#!/usr/bin/env bash
set -o errexit -o nounset

script_dir="$(cd $(dirname "$0"); pwd)"

if ! npm whoami &>/dev/null; then
  echo "ERROR: Must be logged in to npm; run npm login first"
fi

npm_user="$(npm whoami)"
echo "Logged in as $npm_user"

cd "$script_dir"
pnpm install &>/dev/null

# Publish public packages
for pkg in $(ls "$script_dir/@aspect-test"); do
  if [ -d "$script_dir/@aspect-test/$pkg" ]; then
    (
      echo "--------------"
      echo "@aspect-test/$pkg"
      cd "$script_dir/@aspect-test/$pkg"
      if "$script_dir/node_modules/.bin/can-npm-publish"; then
        echo "Publishing as public npm package"
        npm publish --access public
      else
        echo "Already published"
      fi
    )
  fi
done

# Publish private packages
for pkg in $(ls "$script_dir/@aspect-priv-npm"); do
  if [ -d "$script_dir/@aspect-priv-npm/$pkg" ]; then
    (
      echo "--------------"
      echo "@aspect-priv-npm/$pkg"
      cd "$script_dir/@aspect-priv-npm/$pkg"
      if "$script_dir/node_modules/.bin/can-npm-publish"; then
        echo "Publishing as private npm package"
        npm publish --access private
      else
        echo "Already published"
      fi
    )
  fi
done
