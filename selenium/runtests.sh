#!/bin/bash

ROOTDIR="$( cd "$( dirname "$0")" && pwd )"

(
    cd $ROOTDIR
    for i in `ls -1 test_*.js`; do node $i; done
)