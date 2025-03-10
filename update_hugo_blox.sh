#!/usr/bin/env bash

# Hugo Blox Updater
# Helps update Hugo modules.
# https://docs.hugoblox.com/reference/update/
#
# Command: bash ./update_hugo_blox.sh

# Check for prerequisites.
if [ ! -d content ]; then
  echo "ERROR: `cd` into your website folder before running this tool."
  exit 1;
fi

# Update the Hugo Blox module
function update_hugo_blox () {
  # Update Hugo Blox to the latest main version
  echo -e "Updating Hugo Modules to their latest version...\n"
  hugo mod get -u ./...
  hugo mod tidy
}

# Perform update
update_hugo_blox

echo
echo "Warning: review the changes made by this helper script before pushing them to your site."
echo
echo "If there are breaking changes, the site structure, config, and/or front matter of content" \
"may need upgrading by following the steps in the relevant consecutive release notes."
echo
echo "View the update guide at: https://docs.hugoblox.com/reference/update/"
echo "View the latest release notes at: https://hugoblox.com/blog/"