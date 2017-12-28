---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}

<h2><strong>Publications</strong></h2>
<hr />
<h3 class="papercite">2017</h3>
<ul class="papercite_bibliography">
<li>    J. Lehmann, <span class="papercite_highlight">G. Sejdiu</span>, L. Bühmann, P. Westphal, C. Stadler, I. Ermilov, S. Bin, N. Chakraborty, M. Saleem, A. N. Ngonga, and H. Jabeen, &#8220;Distributed Semantic Analytics using the SANSA Stack,&#8221; in <span style="font-style: italic">Proceedings of 16th International Semantic Web Conference &#8211; Resources Track (ISWC&#8217;2017)</span>,  2017.       <br />   <a href="javascript:void(0)" id="papercite_4" class="papercite_toggle">[BibTeX]</a>      <a href="javascript:void(0)" id="papercite_abstract_4" class="papercite_toggle">[Abstract]</a>         <a href="http://svn.aksw.org/papers/2017/ISWC_SANSA_SoftwareFramework/public.pdf" title='Download PDF' class='papercite_pdf'>[Download PDF]</a><br />
</li>
<li>    I. Ermilov, A. N. Ngomo, A. Versteden, H. Jabeen, <span class="papercite_highlight">G. Sejdiu</span>, G. Argyriou, L. Selmi, J. Jakobitsch, and J. Lehmann, &#8220;Managing Lifecycle of Big Data Applications,&#8221; in <span style="font-style: italic">KESW</span>,  2017.       <br />   <a href="javascript:void(0)" id="papercite_3" class="papercite_toggle">[BibTeX]</a>         <a href="https://svn.aksw.org/papers/2017/KESW_BDE_Workflow/public.pdf" title='Download PDF' class='papercite_pdf'>[Download PDF]</a>
<div class="papercite_bibtex" id="papercite_3_block">
<pre><code class="tex bibtex">@InProceedings{KESW_2017_BDE,
Title = {Managing Lifecycle of Big Data Applications},
Author = {Ermilov, Ivan and Ngomo, Axel-Cyrille Ngonga and Versteden, Aad and Jabeen, Hajira and Sejdiu, Gezim and Argyriou, Giorgos and Selmi, Luigi and Jakobitsch, J{\&quot;u}rgen and Lehmann, Jens},
Booktitle = {KESW},
Year = {2017},
Added-at = {2017-08-31T16:24:46.000+0200},
Biburl = {https://www.bibsonomy.org/bibtex/2f5ee59fb595ade7ece4c840ad4a95741/aksw},
Interhash = {8ac92f717e75f88d59f2811ecf7b816e},
Intrahash = {f5ee59fb595ade7ece4c840ad4a95741},
Keywords = {bde group_aksw iermilov lehmann ngonga simba},
Timestamp = {2017-08-31T16:24:46.000+0200},
Url = {https://svn.aksw.org/papers/2017/KESW_BDE_Workflow/public.pdf}
}</code></pre>
</p></div>
</li>
<li>    I. Ermilov, J. Lehmann, <span class="papercite_highlight">G. Sejdiu</span>, L. Bühmann, P. Westphal, C. Stadler, S. Bin, N. Chakraborty, H. Petzka, M. Saleem, A. N. Ngonga, and H. Jabeen, &#8220;The Tale of Sansa Spark,&#8221; in <span style="font-style: italic">Proceedings of 16th International Semantic Web Conference, Poster &amp; Demos</span>,  2017.       <br />   <a href="javascript:void(0)" id="papercite_2" class="papercite_toggle">[BibTeX]</a>         <a href="http://jens-lehmann.org/files/2017/iswc_pd_sansa.pdf" title='Download PDF' class='papercite_pdf'>[Download PDF]</a>
<div class="papercite_bibtex" id="papercite_2_block">
<pre><code class="tex bibtex">@InProceedings{iermilov-2017-sansa-iswc-demo,
Title = {The {T}ale of {S}ansa {S}park},
Author = {Ermilov, Ivan and Lehmann, Jens and Sejdiu, Gezim and B\&quot;uhmann, Lorenz and Westphal, Patrick and Stadler, Claus and Bin, Simon and Chakraborty, Nilesh and Petzka, Henning and Saleem, Muhammad and Ngonga, Axel-Cyrille Ngomo and Jabeen, Hajira},
Booktitle = {Proceedings of 16th International Semantic Web Conference, Poster \&amp; Demos},
Year = {2017},
Added-at = {2017-08-31T16:24:45.000+0200},
Biburl = {https://www.bibsonomy.org/bibtex/2f9b5a69afa4755944984ae63f59ad146/aksw},
Interhash = {ebabfe08f697304b399c9b6b89f2829e},
Intrahash = {f9b5a69afa4755944984ae63f59ad146},
Keywords = {2017 bde buehmann chakraborty group_aksw iermilov lehmann mole ngonga saleem sbin sejdiu stadler westphal},
Owner = {iermilov},
Timestamp = {2017-08-31T16:24:45.000+0200},
Url = {http://jens-lehmann.org/files/2017/iswc_pd_sansa.pdf}
}</code></pre>
</p></div>
</li>
<li>    S. Auer, S. Scerri, A. Versteden, E. Pauwels, A. Charalambidis, S. Konstantopoulos, J. Lehmann, H. Jabeen, I. Ermilov, <span class="papercite_highlight">G. Sejdiu</span>, A. Ikonomopoulos, S. Andronopoulos, M. Vlachogiannis, C. Pappas, A. Davettas, I. A. Klampanos, E. Grigoropoulos, V. Karkaletsis, V. de Boer, R. Siebes, M. N. Mami, S. Albani, M. Lazzarini, P. Nunes, E. Angiuli, N. Pittaras, G. Giannakopoulos, G. Argyriou, G. Stamoulis, G. Papadakis, M. Koubarakis, P. Karampiperis, A. N. Ngomo, and M. Vidal, &#8220;The BigDataEurope Platform &#8211; Supporting the Variety Dimension of Big Data,&#8221; in <span style="font-style: italic">17th International Conference on Web Engineering (ICWE2017)</span>,  2017.       <br />   <a href="javascript:void(0)" id="papercite_1" class="papercite_toggle">[BibTeX]</a>      <a href="javascript:void(0)" id="papercite_abstract_1" class="papercite_toggle">[Abstract]</a>         <a href="http://jens-lehmann.org/files/2017/icwe_bde.pdf" title='Download PDF' class='papercite_pdf'>[Download PDF]</a><br />
<blockquote class="papercite_bibtex" id="papercite_abstract_1_block">The management and analysis of large-scale datasets &#8212; described with the term Big Data &#8212; involves the three classic dimensions volume, velocity and variety. While the former two are well supported by a plethora of software components, the variety dimension is still rather neglected. We present the BDE platform &#8212; an easy-to-deploy, easy-to-use and adaptable (cluster-based and standalone) platform for the execution of big data components and tools like Hadoop, Spark, Flink. The BDE platform was designed based upon the requirements gathered from the seven societal challenges put forward by the European Commission in the Horizon 2020 programme and targeted by the BigDataEurope pilots. As a result, the BDE platform allows to perform a variety of Big Data flow tasks like message passing (Kafka, Flume), storage (Hive, Cassandra) or publishing (GeoTriples). In order to facilitate the processing of heterogeneous data, a particular innovation of the platform is the semantic layer, which allows to directly process RDF data and to map and transform arbitrary data into RDF.</p></blockquote>
<div class="papercite_bibtex" id="papercite_1_block">
<pre><code class="tex bibtex">@InProceedings{Auer+ICWE-2017,
Title = {{T}he {B}ig{D}ata{E}urope {P}latform - {S}upporting the {V}ariety {D}imension of {B}ig {D}ata},
Author = {S\&quot;oren Auer and Simon Scerri and Aad Versteden and Erika Pauwels and Angelos Charalambidis and Stasinos Konstantopoulos and Jens Lehmann and Hajira Jabeen and Ivan Ermilov and Gezim Sejdiu and Andreas Ikonomopoulos and Spyros Andronopoulos and Mandy Vlachogiannis and Charalambos Pappas and Athanasios Davettas and Iraklis A. Klampanos and Efstathios Grigoropoulos and Vangelis Karkaletsis and Victor de Boer and Ronald Siebes and Mohamed Nadjib Mami and Sergio Albani and Michele Lazzarini and Paulo Nunes and Emanuele Angiuli and Nikiforos Pittaras and George Giannakopoulos and Giorgos Argyriou and George Stamoulis and George Papadakis and Manolis Koubarakis and Pythagoras Karampiperis and Axel-Cyrille Ngonga Ngomo and Maria-Esther Vidal},
Booktitle = {17th International Conference on Web Engineering (ICWE2017)},
Year = {2017},
Abstract = {The management and analysis of large-scale datasets -- described with the term Big Data -- involves the three classic dimensions volume, velocity and variety. While the former two are well supported by a plethora of software components, the variety dimension is still rather neglected. We present the BDE platform -- an easy-to-deploy, easy-to-use and adaptable (cluster-based and standalone) platform for the execution of big data components and tools like Hadoop, Spark, Flink. The BDE platform was designed based upon the requirements gathered from the seven societal challenges put forward by the European Commission in the Horizon 2020 programme and targeted by the BigDataEurope pilots. As a result, the BDE platform allows to perform a variety of Big Data flow tasks like message passing (Kafka, Flume), storage (Hive, Cassandra) or publishing (GeoTriples). In order to facilitate the processing of heterogeneous data, a particular innovation of the platform is the semantic layer, which allows to directly process RDF data and to map and transform arbitrary data into RDF.},
Bdsk-url-1 = {http://svn.aksw.org/lod2/Paper/ISWC2012-InUse_LOD2-Stack/public.pdf},
Date-modified = {2012-12-02 12:25:29 +0000},
Keywords = {group_aksw sys:relevantFor:infai sys:relevantFor:bis 2017 auer iermilov ngonga lehmann bde MOLE},
Url = {http://jens-lehmann.org/files/2017/icwe_bde.pdf}
}</code></pre>
</p></div>
</li>
</ul>
<h3 class="papercite">2016</h3>
<ul class="papercite_bibliography">
<li>    H. Thakkar, M. Dubey, <span class="papercite_highlight">G. Sejdiu</span>, A. Ngonga Ngomo, J. Debattista, C. Lange, J. Lehmann, S. Auer, and M. Vidal, &#8220;LITMUS: An Open Extensible Framework for Benchmarking RDF Data Management Solutions,&#8221; , 2016.       <br />   <a href="javascript:void(0)" id="papercite_6" class="papercite_toggle">[BibTeX]</a>
<div class="papercite_bibtex" id="papercite_6_block">
<pre><code class="tex bibtex">@Other{ThakkarEtAl:LITMUS16,
Title = {{LITMUS}: {A}n {O}pen {E}xtensible {F}ramework for {B}enchmarking {RDF} {D}ata {M}anagement {S}olutions},
Author = {Harsh Thakkar and Mohnish Dubey and Gezim Sejdiu and Ngonga Ngomo, Axel-Cyrille and Jeremy Debattista and Christoph Lange and Jens Lehmann and S{\&quot;o}ren Auer and Maria-Esther Vidal},
Date = {2016-08-09},
Eprint = {1608.02800},
Eprintclass = {cs.PF},
Eprinttype = {arxiv},
File = {http://arxiv.org/pdf/1608.02800},
Pubs = {clange,vidal},
Year = {2016}
}</code></pre>
</p></div>
</li>
</ul>
<h3 class="papercite">2014</h3>
<ul class="papercite_bibliography">
<li>    <span class="papercite_highlight">G. Sejdiu</span>, &#8220;Semantic Ranking of Web Pages : The Wikipedia Case Study,&#8221; Master Thesis, University of Prishtina, Kosova, 2014.       <br />   <a href="javascript:void(0)" id="papercite_5" class="papercite_toggle">[BibTeX]</a>         <a href="https://www.researchgate.net/profile/Gezim_Sejdiu/publication/264400068_Rangimi_semantik_i_ueb_faqeve_-_Wikipedia_si_nje_rast_studimi_Semantic_Ranking_of_Web_Pages_-_The_Wikipedia_Case_Study/links/569904a808aeeea98594506c/Rangimi-semantik-i-ueb-faqeve-Wikipedia-si-nje-rast-studimi-Semantic-Ranking-of-Web-Pages-The-Wikipedia-Case-Study.pdf?origin=publication_detail&amp;ev=pub_int_prw_xdl&amp;msrp=AA37FwBzmKERYXi1M2vhWudDort1uLpVM1OSeZjP0qQ0IpEmuvefoRBnX2gTOpctGw5NQ-WolOCmQ4CYW6PwSE9UP27VAGvrmWbzGO7X5ssHhngO5v4.lVzcwbIYCwbOaWUUPbOVaMXxWfjqqco8y7lPka6Sx7akCcIJgNaBUsRP9ybuqT0wg-ngpyu_fSPRrs63hkYjLJvJZvNDWR3fzZopSg.2puAeXufSna9VfnNYPTr3-L_fgans7XuC2YL1uo73vNE68nlRwKz0sc_RvUZusuNMkwxtSkJClAIrpmtZNrOeB7UtJ9-xaG5j8pqRQ.jB1XguS-PfblCV77SV_zZJK2kMl5WXGMPP-NgQs8X5x0efgfCk_urpyJJb-cnp7LHUlXEUiq_t5wSdDgb3j9lXd99NTG_tyV6LESEQ" title='Download PDF' class='papercite_pdf'>[Download PDF]</a>
<div class="papercite_bibtex" id="papercite_5_block">
<pre><code class="tex bibtex">@MastersThesis{sejdiu2014,
Title = {Semantic {R}anking of {W}eb {P}ages : {T}he {W}ikipedia {C}ase {S}tudy},
Author = {Gezim Sejdiu},
School = {Faculty of {E}lectrical and {C}omputer {E}ngineering},
Year = {2014},
Address = {University of Prishtina, Kosova},
Month = {7},
Bdsk-url-1 = {http://www.comp.ime.eb.br/pos/conteudo/publicacoes/detalhe-dissertacoes.html?q=2014&amp;z=7},
Keywords = {2014 sejdiu},
Url = {https://www.researchgate.net/profile/Gezim_Sejdiu/publication/264400068_Rangimi_semantik_i_ueb_faqeve_-_Wikipedia_si_nje_rast_studimi_Semantic_Ranking_of_Web_Pages_-_The_Wikipedia_Case_Study/links/569904a808aeeea98594506c/Rangimi-semantik-i-ueb-faqeve-Wikipedia-si-nje-rast-studimi-Semantic-Ranking-of-Web-Pages-The-Wikipedia-Case-Study.pdf?origin=publication_detail&amp;ev=pub_int_prw_xdl&amp;msrp=AA37FwBzmKERYXi1M2vhWudDort1uLpVM1OSeZjP0qQ0IpEmuvefoRBnX2gTOpctGw5NQ-WolOCmQ4CYW6PwSE9UP27VAGvrmWbzGO7X5ssHhngO5v4.lVzcwbIYCwbOaWUUPbOVaMXxWfjqqco8y7lPka6Sx7akCcIJgNaBUsRP9ybuqT0wg-ngpyu_fSPRrs63hkYjLJvJZvNDWR3fzZopSg.2puAeXufSna9VfnNYPTr3-L_fgans7XuC2YL1uo73vNE68nlRwKz0sc_RvUZusuNMkwxtSkJClAIrpmtZNrOeB7UtJ9-xaG5j8pqRQ.jB1XguS-PfblCV77SV_zZJK2kMl5WXGMPP-NgQs8X5x0efgfCk_urpyJJb-cnp7LHUlXEUiq_t5wSdDgb3j9lXd99NTG_tyV6LESEQ}
}</code></pre>
</p></div>
</li>
<li>    L. Ahmedi, L. Halilaj, <span class="papercite_highlight">G. Sejdiu</span>, and L. Bajraktari, &#8220;Ranking Authors on the Web: A Semantic AuthorRank,&#8221; in <span style="font-style: italic">Social Networks: Analysis and Case Studies</span>, {. Gündüz-Ö{u{g}}üdücü and {. A. Etaner-Uyar, Eds., Vienna: Springer Vienna, 2014, pp. 19-40.       <a href='http://dx.doi.org/10.1007/978-3-7091-1797-2_2' class='papercite_doi' title='View on publisher site'>doi:10.1007/978-3-7091-1797-2_2</a>      <br />   <a href="javascript:void(0)" id="papercite_0" class="papercite_toggle">[BibTeX]</a>      <a href="javascript:void(0)" id="papercite_abstract_0" class="papercite_toggle">[Abstract]</a>         <a href="http://luleahmedi.uni-pr.edu/docs/pubs/SemAuthorRank2014.pdf" title='Download PDF' class='papercite_pdf'>[Download PDF]</a><br />
<blockquote class="papercite_bibtex" id="papercite_abstract_0_block">Author ranking is growing in popularity since search engines are considering the author&#8217;s reputation of a Web page when generating search results. A question that naturally arises is whether we should rank authors on the Web as we rank Web pages by considering their links. In addition, over what links to actually calculate author ranking? We have adopted an extended FOAF ontology, the so-called Co-AuthorOnto ontology, able to represent authors, but also their co-author links on the Web. We further extended Co-AuthorOnto with PageRank and AuthorRank metrics for ranking authors based on their co-author links. Important to note is that both PageRank and AuthorRank are implemented in Semantic Web Rule Language (SWRL), which represents a novelty and fits well with the semantic modeling of authors and their co-author relationships within FOAF. Preliminary semantic ranking results are demonstrated, showcasing also the huge potential of this ranking approach for adopting it by search engines where our future work will focus.</p></blockquote>
<div class="papercite_bibtex" id="papercite_0_block">
<pre><code class="tex bibtex">@InBook{Ahmedi2014,
Title = {Ranking {A}uthors on the {W}eb: {A} {S}emantic {A}uthor{R}ank},
Author = {Ahmedi, Lule and Halilaj, Lavdim and Sejdiu, Gezim and Bajraktari, Labinot},
Editor = {G{\&quot;u}nd{\&quot;u}z-{\&quot;O}{\u{g}}{\&quot;u}d{\&quot;u}c{\&quot;u}, {\c{S}}ule and Etaner-Uyar, A. {\c{S}}ima},
Pages = {19--40},
Publisher = {Springer Vienna},
Year = {2014},
Address = {Vienna},
Abstract = {Author ranking is growing in popularity since search engines are considering the author's reputation of a Web page when generating search results. A question that naturally arises is whether we should rank authors on the Web as we rank Web pages by considering their links. In addition, over what links to actually calculate author ranking? We have adopted an extended FOAF ontology, the so-called Co-AuthorOnto ontology, able to represent authors, but also their co-author links on the Web. We further extended Co-AuthorOnto with PageRank and AuthorRank metrics for ranking authors based on their co-author links. Important to note is that both PageRank and AuthorRank are implemented in Semantic Web Rule Language (SWRL), which represents a novelty and fits well with the semantic modeling of authors and their co-author relationships within FOAF. Preliminary semantic ranking results are demonstrated, showcasing also the huge potential of this ranking approach for adopting it by search engines where our future work will focus.},
Bdsk-url-1 = {https://doi.org/10.1007/978-3-7091-1797-2_2},
Booktitle = {Social Networks: Analysis and Case Studies},
Doi = {10.1007/978-3-7091-1797-2_2},
ISBN = {978-3-7091-1797-2},
Keywords = {sejdiu},
Url = {http://luleahmedi.uni-pr.edu/docs/pubs/SemAuthorRank2014.pdf}
}</code></pre>
</p></div>
</li>
</ul>
