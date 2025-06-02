---
title: "Kendall Correlation Coefficients for Portfolio Optimization"
authors:
  - Tomas España
  - Victor Le Coz
  - Matteo Smerlak
date: "2024-10-01"
# doi: ""

# Schedule page publish date (NOT publication's date).
# publishDate: ""

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
# publication_types: ["article"]

# Publication name and optional abbreviated publication name.
publication: arXiv preprint
# publication_short: ""

abstract: Markowitz's optimal portfolio relies on the accurate estimation of correlations between asset returns, a difficult problem when the number of observations is not much larger than the number of assets. Using powerful results from random matrix theory, several schemes have been developed to "clean" the eigenvalues of empirical correlation matrices. By contrast, the (in practice equally important) problem of correctly estimating the eigenvectors of the correlation matrix has received comparatively little attention. Here we discuss a class of correlation estimators generalizing Kendall's rank correlation coefficient which improve the estimation of both eigenvalues and eigenvectors in data-poor regimes. Using both synthetic and real financial data, we show that these generalized correlation coefficients yield Markowitz portfolios with lower out-of-sample risk than those obtained with rotationally invariant estimators. Central to these results is a property shared by all Kendall-like estimators but not with classical correlation coefficients zero eigenvalues only appear when the number of assets becomes proportional to the square of the number of data points.

# Summary. An optional shortened abstract.
summary: Markowitz's optimal portfolio relies on the accurate estimation of correlations between asset returns, a difficult problem when the number of observations is not much larger than the number of assets. Using powerful results from random matrix theory, several schemes have been developed to "clean" the eigenvalues of empirical correlation matrices. By contrast, the (in practice equally important) problem of correctly estimating the eigenvectors of the correlation matrix has received comparatively little attention. Here we discuss a class of correlation estimators generalizing Kendall's rank correlation coefficient which improve the estimation of both eigenvalues and eigenvectors in data-poor regimes. Using both synthetic and real financial data, we show that these generalized correlation coefficients yield Markowitz portfolios with lower out-of-sample risk than those obtained with rotationally invariant estimators. Central to these results is a property shared by all Kendall-like estimators but not with classical correlation coefficients zero eigenvalues only appear when the number of assets becomes proportional to the square of the number of data points.

tags:
  - Portfolio Optimization
  - Kendall Correlation
  - Random Matrix Theory

featured: false

links:
  - name: arXiv
    url: https://arxiv.org/abs/2410.17366
url_pdf: https://arxiv.org/pdf/2410.17366
# url_code: 'https://github.com/HugoBlox/hugo-blox-builder'
# url_dataset: '#'
# url_poster: '#'
# url_project: ''
# url_slides: ''
# url_source: '#'
# url_video: '#'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: ""
  focal_point: ""
  preview_only: false
# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
# projects:
# - internal-project

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
# slides: example
---
