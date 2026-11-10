# Adding an entry

Four sections are driven by files in this directory. The writing team adds an object, opens a pull request, and the page appears on the next deploy of `main`. No CMS step is required for these files. Sanity posts still show on the blog if the studio has them.

Keep the voice dry and specific. Do not add raise amounts, valuations, or investor-model figures. Do not invent dates, customers, or statistics. If a claim is not on the site or in a public repo, leave it out or mark the roadmap cell `exploring`.

Slugs are URLs. Use lowercase words and hyphens. Do not change a slug after it has been published.

## Blog — `essays.ts`

Route: `/blog` and `/blog/[slug]`.

Append an object to the `essays` array.

| Field | What to put |
|---|---|
| `slug` | URL segment |
| `title` | The h1 |
| `excerpt` | One or two sentences for the index |
| `description` | SEO description |
| `publishedAt` | `YYYY-MM-DD` |
| `kicker` | Short label, for example `Digital twins` |
| `blocks` | `p` (with `inlines`), `h2`, `ul`, and one `cta` |
| `sources` | `{ label, href }` for every fact that is not ours |

`inlines` are strings, or `{ t, href }` for a link. Internal links start with `/`.

The closing `cta` names the layer, links its page, and links `/contact`. Say what the software does not do yet if that is the honest part.

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

Press boilerplate and logo files live in `src/app/newsroom/page.tsx` under the kit block. Change that copy only when the facts on the site change. There is no press email on the site; the kit points at `/contact`.

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
| `layerHref` | That layer’s page |
| `excerpt` | Index line. Say that it is speculation. |
| `paragraphs` | Short. Ground the first half in what is already true, then say what is only a direction. |

## After you add one

The sitemap and the RSS feed (`/feed.xml`) read these arrays. You do not register the URL by hand. Check the new route locally, then open the pull request to `main`.
