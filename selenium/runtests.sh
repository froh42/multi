#!/bin/bash

set -e

ROOTDIR="$( cd "$( dirname "$0")" && pwd )"

cd $ROOTDIR
../node_modules/.bin/mocha -t 120000 --reporter spec testsuite.js

exit $?
