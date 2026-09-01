# Anthony Tilotta - Developer Advocate Portfolio

Personal portfolio site. Hand-built static HTML/CSS/JS, no framework, no tracking.

**Live site code is in [`site/`](site/).** Everything else at the root is design source material.

## Structure

| Path | What it is |
|---|---|
| `site/index.html` | The page |
| `site/styles.css` | Styling (dark and light themes, Nocturne palette) |
| `site/script.js` | Scroll spy, reveals, video lightbox, filters, theme toggle |
| `site/videos.js` | Tutorial library data. Add a video by adding one object |
| `site/assets/` | Images |
| `Portfolio.dc.html`, `_ds/` | Original design canvas and design system (not deployed) |

## Run locally

```sh
cd site && python3 -m http.server 8767
```

Open http://127.0.0.1:8767/

## Add a video

Edit `site/videos.js`:

```js
{
  url: "https://youtu.be/VIDEO_ID",
  title: "Video title",
  topic: "AI",          // filter tab: AI, Coding, Overview
  channel: "Moralis for Developers",
},
```

Thumbnails come from YouTube automatically. Add `featured: "one line"` to pin it in Selected tutorials.

## Deploy

Static hosting with `site/` as the root (Vercel, GitHub Pages, Netlify).
