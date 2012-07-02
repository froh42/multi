#!/bin/bash

set -e

ROOTDIR="$( cd "$( dirname "$0")" && pwd )"

cd $ROOTDIR
mocha -t 30000 --reporter spec testsuite.js

exit $?
