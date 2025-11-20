#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DIST_DIR="$ROOT_DIR/dist-site"

rm -rf "$DIST_DIR"
mkdir -p "$DIST_DIR/jt" "$DIST_DIR/nostranos"

echo "Building JT..."
(
  cd "$ROOT_DIR/JT"
  npm install
  npm run build
  cp build/index.html build/404.html
  cp -R build/* "$DIST_DIR/jt"
)

echo "Building Nostranos..."
(
  cd "$ROOT_DIR/nostranos"
  npm install
  npm run build
  cp build/index.html build/404.html
  cp -R build/* "$DIST_DIR/nostranos"
)

cat <<'HTML' > "$DIST_DIR/index.html"
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>arnab.tagore.ca</title>
    <style>
      body { font-family: system-ui, sans-serif; margin: 0; padding: 2rem; background: #111; color: #fff; }
      h1 { margin-bottom: 1rem; }
      ul { list-style: none; padding: 0; }
      li { margin-bottom: 0.5rem; }
      a { color: #f6a623; text-decoration: none; font-size: 1.1rem; }
      a:hover { text-decoration: underline; }
    </style>
  </head>
  <body>
    <h1>Choose an experience</h1>
    <ul>
      <li><a href="/jt/">JT – Food Photography Pricing Sheet</a></li>
      <li><a href="/nostranos/">Nostranos – Artisanal Menu Experience</a></li>
    </ul>
  </body>
</html>
HTML

