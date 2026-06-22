My [personal academic website](https://gezimsejdiu.github.io/) is now powered by [MkDocs](https://www.mkdocs.org/) with the [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) theme.

## Local Development

This repository is configured to work with [`uv`](https://docs.astral.sh/uv/).

Install dependencies and start the local server with:

```bash
uv run mkdocs serve
```

Then open `http://127.0.0.1:8000`.

To build the static site:

```bash
uv run mkdocs build
```