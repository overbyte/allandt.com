#!/usr/bin/env bash

set -u
set -e
set -o pipefail

USAGE="Usage: $(basename "$0") p[vh]

ARGUMENTS
-p              : space delimited list of page slugs

DEPENDENCIES
aws (cli)

EXAMPLES
Some nice example implementations of this script
"

PAGES=false

while getopts 'p:vh' OPTION; do
case $OPTION in
    p)  PAGES="$OPTARG"         ;;
    v)  set -x;                     ;;
    [h?]) echo "$USAGE"; exit 0     ;;
esac
done
shift "$((OPTIND - 1))"

: "${PAGES:?}"

for PAGE in $PAGES; do
echo $PAGE
hugo new content $PAGE/index.md
done
