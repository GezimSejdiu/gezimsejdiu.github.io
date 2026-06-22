---
date:
  created: 2022-04-24
authors:
  - gezimsejdiu
tags:
  - kubernetes
  - docker
  - flink
title: Set Up SeaTunnel with Kubernetes
---

# Set Up SeaTunnel with Kubernetes

This post provides a quick guide to running SeaTunnel with Kubernetes.

## Prerequisites

Install and verify the following tools on your local system:

- [Docker](https://docs.docker.com/)
- [Kubernetes](https://kubernetes.io/)
- [Helm](https://helm.sh/docs/intro/quickstart/)

<!-- more -->

For local Kubernetes, this setup uses [Minikube](https://minikube.sigs.k8s.io/docs/start/) v1.23.3:

```bash
minikube start --kubernetes-version=v1.23.3
```

## Installation

### SeaTunnel Docker image

Create `Dockerfile`:

```dockerfile
FROM flink:1.13

ENV SEATUNNEL_VERSION="2.1.0"

RUN wget https://archive.apache.org/dist/incubator/seatunnel/${SEATUNNEL_VERSION}/apache-seatunnel-incubating-${SEATUNNEL_VERSION}-bin.tar.gz
RUN tar -xzvf apache-seatunnel-incubating-${SEATUNNEL_VERSION}-bin.tar.gz

RUN mkdir -p $FLINK_HOME/usrlib
RUN cp apache-seatunnel-incubating-${SEATUNNEL_VERSION}/lib/seatunnel-core-flink.jar $FLINK_HOME/usrlib/seatunnel-core-flink.jar

RUN rm -fr apache-seatunnel-incubating-${SEATUNNEL_VERSION}*
```

Build and load the image:

```bash
docker build -t seatunnel:2.1.0-flink-1.13 -f Dockerfile .
minikube image load seatunnel:2.1.0-flink-1.13
```

### Deploy the Flink Kubernetes Operator

Install cert-manager (once per cluster):

```bash
kubectl create -f https://github.com/jetstack/cert-manager/releases/download/v1.7.1/cert-manager.yaml
```

Install the operator:

```bash
helm repo add flink-operator-repo https://downloads.apache.org/flink/flink-kubernetes-operator-0.1.0/
helm install flink-kubernetes-operator flink-operator-repo/flink-kubernetes-operator
```

Check status:

```bash
kubectl get pods
```

## Run SeaTunnel Application

Use a simple streaming config in `flink.streaming.conf`:

```conf
env {
  execution.parallelism = 1
}

source {
  FakeSourceStream {
    result_table_name = "fake"
    field_name = "name,age"
  }
}

transform {
  sql {
    sql = "select name,age from fake"
  }
}

sink {
  ConsoleSink {}
}
```

Prepare host path on Minikube:

```bash
minikube ssh
sudo mkdir /mnt/data
```

Copy config file:

```bash
minikube cp flink.streaming.conf /mnt/data/flink.streaming.conf
```

Create `seatunnel-flink.yaml`:

```yaml
apiVersion: flink.apache.org/v1alpha1
kind: FlinkDeployment
metadata:
  namespace: default
  name: seatunnel-flink-streaming-example
spec:
  image: seatunnel:2.1.0-flink-1.13
  flinkVersion: v1_14
  flinkConfiguration:
    taskmanager.numberOfTaskSlots: "2"
  serviceAccount: flink
  jobManager:
    replicas: 1
    resource:
      memory: "2048m"
      cpu: 1
  taskManager:
    resource:
      memory: "2048m"
      cpu: 2
  podTemplate:
    spec:
      containers:
        - name: flink-main-container
          volumeMounts:
            - mountPath: /data
              name: config-volume
      volumes:
        - name: config-volume
          hostPath:
            path: "/mnt/data"
            type: Directory
  job:
    jarURI: local:///opt/flink/usrlib/seatunnel-core-flink.jar
    entryClass: org.apache.seatunnel.SeatunnelFlink
    args: ["--config", "/data/flink.streaming.conf"]
    parallelism: 2
    upgradeMode: stateless
```

Deploy:

```bash
kubectl apply -f seatunnel-flink.yaml
```

## Output and Monitoring

Follow logs:

```bash
kubectl logs -f deploy/seatunnel-flink-streaming-example
```

Expose dashboard:

```bash
kubectl port-forward svc/seatunnel-flink-streaming-example-rest 8081
```

Open [http://localhost:8081](http://localhost:8081).

TaskManager logs:

```bash
kubectl logs -l 'app in (seatunnel-flink-streaming-example), component in (taskmanager)' --tail=-1 -f
```

Stop and clean up:

```bash
kubectl delete -f seatunnel-flink.yaml
```

A simplified version of this guide has been [contributed to SeaTunnel](https://seatunnel.apache.org/docs/getting-started/kubernetes/).
