#!/bin/bash

set -e

ROOTDIR="$( cd "$( dirname "$0")" && pwd )"


# The (undocumented) option '--raiseOnFailure true' is required to make
# JsTestDriver return with an error code on test failures.

java -jar $ROOTDIR/tmp/JsTestDriver-1.3.4.b.jar --server http://localhost:9876 --raiseOnFailure true --captureConsole $*

exit $?
