#!/bin/bash

ROOTDIR="$( cd "$( dirname "$0")" && pwd )"
TMP=$ROOTDIR/tmp

JSTD_VERSION=1.3.4.b

COMMAND=$1

command -v phantomjs >/dev/null 2>&1 || { echo "Can't find phantomjs, please make sure it's on your PATH." >&2; exit 1; }

source $ROOTDIR/../functions.sh

checkJsTestDriver() {
    curl -s -f http://localhost:9876 | grep JsTestDriver >/dev/null
}

checkPhantom() {
    curl -s -f http://localhost:9876 | grep "Name: Safari" >/dev/null
}


mkdir -p $TMP
download http://js-test-driver.googlecode.com/files/JsTestDriver-$JSTD_VERSION.jar  $TMP/JsTestDriver-$JSTD_VERSION.jar
download http://js-test-driver.googlecode.com/files/coverage-$JSTD_VERSION.jar $TMP/coverage-$JSTD_VERSION.jar

#
# In any event ... stop the running servers
#
if [[ $COMMAND == "stop" ]] || [[ $COMMAND == "start" ]]; then
    stopbg jstd
    stopbg phantomjs
fi

if [[ $COMMAND == "start" ]]; then
    checkJsTestDriver || startbg jstd java -jar $TMP/JsTestDriver-$JSTD_VERSION.jar --port 9876 
    waitfor checkJsTestDriver

    checkPhantom || startbg phantomjs phantomjs $ROOTDIR/phantomjs-jstd.js 
fi

