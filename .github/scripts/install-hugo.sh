#!/usr/bin/env bash
set -euo pipefail

source ./build-versions.env

curl -fsSL "https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_${HUGO_VERSION}_linux-amd64.deb" -o "$RUNNER_TEMP/hugo.deb"
sudo dpkg -i "$RUNNER_TEMP/hugo.deb"

curl -fsSL "https://github.com/sass/dart-sass/releases/download/${DART_SASS_VERSION}/dart-sass-${DART_SASS_VERSION}-linux-x64.tar.gz" -o "$RUNNER_TEMP/dart-sass.tar.gz"
tar -xzf "$RUNNER_TEMP/dart-sass.tar.gz" -C "$RUNNER_TEMP"
echo "$RUNNER_TEMP/dart-sass" >> "$GITHUB_PATH"

hugo version
"$RUNNER_TEMP/dart-sass/sass" --embedded --version
