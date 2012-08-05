#!/bin/bash

set -e

ROOTDIR="$( cd "$( dirname "$0")" && pwd )"

runtest() {
    java -jar $ROOTDIR/tmp/JsTestDriver-1.3.4.b.jar --server http://localhost:9876 --raiseOnFailure true --captureConsole $*
}
# The (undocumented) option '--raiseOnFailure true' is required to make
# JsTestDriver return with an error code on test failures.

(
    cd $(dirname $0)
    runtest --config ../test.jstd --tests all --testOutput ../testReports
    exit $?
)