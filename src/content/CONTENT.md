# Adding an entry

Five sections are driven by files in this directory. The writing team adds an object, opens a pull request, and the page appears on the next deploy of `main`. No CMS step is required for these files. Sanity posts still show on the blog if the studio has them.

Keep the voice dry and specific. Do not add raise amounts, valuations, or investor-model figures. Do not invent dates, customers, or statistics. If a claim is not on the site or in a public repo, leave it out or mark the roadmap cell `exploring`.

Slugs are URLs. Use lowercase words and hyphens. Do not change a slug after it has been published.

## Blog — `essays.ts`

Route: `/blog` and `/blog/[slug]`.

Append an object to the `essays` array.

| Field | What to put |
|---|---|
| `slug` | URL segment |
| `title` | The h1. Keep the draft headline, including its punctuation. |
| `seoTitle` | Document `<title>`, Open Graph title, and Twitter title, before the ` \| PrimusNeo` suffix. The h1 stays `title`. Put the search phrase here. Keep `seoTitle` plus ` \| PrimusNeo` at 60 characters or fewer. |
| `dek` | Standfirst under the headline. Use the draft summary, unchanged. |
| `excerpt` | One or two sentences for the index, the feed, and `/llms.txt`. The summary is fine when that is the dek. |
| `description` | Meta description, also used for Open Graph and Twitter. For a search-targeted note, 155 characters or fewer. |
| `publishedAt` | `YYYY-MM-DD` |
| `kicker` | Short label, for example `Digital twins` |
| `blocks` | `p` (with `inlines`), `h2`, `ul`, and one `cta` |
| `sources` | `{ label, href }` for every fact that is not ours |
| `layer` | Optional. Stack layer the template closer links. A `cta` block supplies it when this is absent. |
| `layerHref` | That layer’s page, or `/roadmap/[slug]` when the layer has no page of its own. |
| `related` | Optional `{ label, href, note? }`. Existing notes or papers only. Real paths. Leave it off when nothing fits. |

`inlines` are strings, `{ t, href }` for a link, or `{ t, em }` / `{ t, strong }` for emphasis. Internal links start with `/`. List items are strings or inline arrays.

The page prints the dek, the body, the sources, then `related` when it is set. The article template ends every post with a closer: the layer link, plus Contact (`/contact`) and RSS (`/feed.xml`). Do not write that closer into the body. A `cta` block is still how an existing note names its layer in the prose. Say what the software does not do yet if that is the honest part. The sitemap, `/feed.xml`, and `/llms.txt` read this array. Do not register the URL by hand.

## Newsroom — `news.ts`

Route: `/newsroom` and `/newsroom/[slug]`.

Append an object to `newsItems`. Put the newest date first if you want it at the top; the page also sorts by date.

| Field | What to put |
|---|---|
| `slug` | URL segment |
| `title` | The announcement |
| `date` | The commit date or the site-change date. Do not guess a launch day. |
| `kicker` | `Site`, a layer name, or `Partnership` |
| `excerpt` | Index line |
| `paragraphs` | Plain strings. One fact per paragraph is enough. |
| `links` | Optional `{ label, href }` to the page, the repo, or the commit |

Press boilerplate and logo files live in `src/app/newsroom/page.tsx` under the kit block. Change that copy only when the facts on the site change. The kit points at `/contact`. That page also lists the operator email, phone, and city. The form stores the submission. See `docs/forms.md`. Operator, privacy, and terms live at `/contact`, `/privacy`, and `/terms`.

## Roadmap — `roadmap.ts`

Route: `/roadmap` and `/roadmap/[slug]`.

Edit the matching object in `roadmapLayers`, or append a layer.

`status` is one of: `shipped`, `in alpha`, `building`, `exploring`.

`now`, `next`, and `later` are string arrays. No dates in those strings. If you are not sure, put the sentence in `later` and say it is exploring.

`href` is the product page, or an external partner URL if we do not have a product page. `repo` is optional and must be a public repository.

## Futures — `futures.ts`

Route: `/futures` and `/futures/[slug]`.

Append an object to `futures`. The page always prints a speculation label. You do not need a flag in the file, and you should not write the piece as a prediction with a year.

| Field | What to put |
|---|---|
| `slug` | URL segment |
| `title` | The piece |
| `date` | When it was written, `YYYY-MM-DD` |
| `horizon` | A range such as `5–20 years` |
| `layer` | The stack layer the speculation hangs on |
| `layerHref` | That layer’s page on this site, or `/roadmap/[slug]` |
| `excerpt` | Index line. Say that it is speculation. The page uses it as the meta description. |
| `paragraphs` | Short plain strings, when the draft has no headings or links. |
| `blocks` | Use instead of `paragraphs` for `h2`, `p` (inlines), and `ul`. Keep a draft’s “What is true now” / “What follows is speculation” headings. |
| `sources` | `{ label, href }` for every source on the draft. |

`horizon` can be the year the piece names, such as `2035`. The page always prints a speculation label above the body. The template closer links `layerHref` and adds Contact and RSS. Point `layerHref` at a layer page on this site, or at `/roadmap/[slug]` when that is the section we have.

## Papers — `papers.ts`

Route: `/papers` and `/papers/[slug]`.

Append an object to `papers`. Put the newest date first if you want it at the top; the index also sorts by date.

The landing page prints the summary, a short list of section titles, the page count, and a download button. The button is a direct link to the PDF. Do not put an email field in front of it. A paper must not collect an address in exchange for the file.

After the download, the page links to `/contact` (“Talk to us”) and mentions `/feed.xml`. That is the same contact form the rest of the site uses, and the same feed. It is not a gate. The PDF stays a direct file. How the form is stored is `docs/forms.md`.

| Field | What to put |
|---|---|
| `slug` | URL segment |
| `kicker` | Short label, for example `White paper no. 1` |
| `title` | The h1 |
| `dek` | The subtitle. Use the paper’s own line. Keep the attribution if a number is in it. |
| `summary` | The paragraph on the page. Do not add a finding the paper does not make. |
| `description` | SEO description. A shortening of the summary, cut on a sentence. |
| `publishedAt` | `YYYY-MM-DD`. The file date, or the day it went on the site if the paper only names a month. |
| `dateLabel` | Optional. What to print when the paper says `November 2026` and not a day. |
| `pages` | Page count of the PDF you are linking. Count the file. |
| `format` | Optional. `US Letter` if the file says so. |
| `cover` | `{ src, width, height, alt }`. `src` is a path under `public/`. The page and the Open Graph image both use it. |
| `pdf` | Path under `public/papers/`. |
| `inside` | Section titles from the PDF. A few is enough. Do not paraphrase them into new claims. |
| `layers` | Optional `{ label, href, note? }`. Stack pages this paper actually discusses: the layer page and, where the site keeps status, the roadmap section (`/roadmap` and `/roadmap/[slug]`). Omit the field and that part of Related does not render. |
| `related` | Optional `{ label, href, note? }`. Two or three essays or other notes that share the subject. Omit the field and that part of Related does not render. |

`layers` and `related` are optional so the next paper gets the Related block, the contact link, and the direct download without a new template. Leave either field off when there is nothing honest to point at.

## After you add one

The sitemap and the RSS feed (`/feed.xml`) read these arrays. You do not register the URL by hand. Check the new route locally, then open the pull request to `main`.
