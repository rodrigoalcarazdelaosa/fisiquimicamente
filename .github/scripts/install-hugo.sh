#!/usr/bin/env bash
set -euo pipefail

hugo_tag=$(cat .hvm)
sass_version=1.98.0

curl -fsSL "https://github.com/gohugoio/hugo/releases/download/${hugo_tag}/hugo_${hugo_tag#v}_linux-amd64.deb" -o "$RUNNER_TEMP/hugo.deb"
sudo dpkg -i "$RUNNER_TEMP/hugo.deb"

curl -fsSL "https://github.com/sass/dart-sass/releases/download/${sass_version}/dart-sass-${sass_version}-linux-x64.tar.gz" -o "$RUNNER_TEMP/dart-sass.tar.gz"
tar -xzf "$RUNNER_TEMP/dart-sass.tar.gz" -C "$RUNNER_TEMP"
echo "$RUNNER_TEMP/dart-sass" >> "$GITHUB_PATH"

hugo version
"$RUNNER_TEMP/dart-sass/sass" --embedded --version
