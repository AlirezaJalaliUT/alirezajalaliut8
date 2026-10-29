# Version 08 — Academic Design Selector

Base layout: **Version 06 Reference Academic** (independently implemented in this project, visually inspired by the supplied academic reference). Adds an interactive Design Studio for color, typography, layouts, card and image treatments, navigation, and advanced display options. All academic content is retained from the earlier projects.

- Repository: `alirezajalaliut8`
- GitHub Pages URL: `https://alirezajalaliut.github.io/alirezajalaliut8/`
- `baseurl`: `/alirezajalaliut8`
- CMS: `.pages.yml` (editable professor profile, research, publications, and Design Defaults)
- Design choices: stored in the viewer's browser; shareable by URL `?look=`; downloadable JSON; slots A/B.
- Built entirely with Jekyll, Liquid, HTML, CSS and vanilla JavaScript, without external backend.

## Deploy

1. Extract archive, upload **contents** to the root of the public GitHub repository `AlirezaJalaliUT/alirezajalaliut8`.
2. Settings → Pages → Deploy from a branch → main / (root).
3. Visit the address above when Pages is deployed. No custom domain is required.
4. For CMS: connect the repository to Pages CMS; edit `Design Defaults` to set the initial public appearance.

## Factual and technical notes

No laboratory photographs, team members, awards, or research results have been fabricated. Source notes and verification considerations are listed in `SOURCES_AND_FACT_CHECK.md`.

A temporary preview is not a production Jekyll build. Run `bundle install && bundle exec jekyll build` if Ruby Bundler dependencies are available.

## Quality assurance performed

- Verified valid YAML, Jekyll includes, referenced assets, internal content sections and CMS paths.
- Ran a Chromium-based **static Liquid approximation** at 1366px, 768px and 390px, checking layout and overflow.
- Exercised all 14 visual presets at those widths, plus individual color, type and layout changes, four save slots and mobile navigation.
- Real `jekyll build` was **not** performed in this execution environment because the Jekyll gem was not installed.
