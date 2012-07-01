#!/bin/bash

ROOTDIR="$( cd "$( dirname "$0")" && pwd )"
SELENIUM_VERSION=2.24.1

COMMAND=$1

#command -v firefox >/dev/null 2>&1 || { echo "Can't find firefox, please make sure it's on your PATH." >&2; exit 1; }

if [ ! -f "$ROOTDIR/selenium-server-standalone-$SELENIUM_VERSION.jar" ]; then
    echo "Downloading selenium-server-standalone jar ..."
    curl http://selenium.googlecode.com/files/selenium-server-standalone-$SELENIUM_VERSION.jar > $ROOTDIR/selenium-server-standalone-$SELENIUM_VERSION.jar
fi

if [[ $COMMAND == "start" ]]; then
    echo "Starting SELENIUM Server"

    nohup java -jar $ROOTDIR/selenium-server-standalone-$SELENIUM_VERSION.jar > $ROOTDIR/selenium.out 2> $ROOTDIR/selenium.err < /dev/null &
    echo $! > $ROOTDIR/selenium.pid

    for i in {0..30}; do
	echo "Waiting for selenium ... $i"
	curl -s -f http://localhost:4444/selenium-server
	if [ $? -eq 0 ]; then
	    break
	fi
	sleep 1
    done
fi

if [[ $COMMAND == "stop" ]]; then
    echo "Killing SELENIUM Server"

    if [ -f $ROOTDIR/selenium.pid ]; then
	PID=`cat $ROOTDIR/selenium.pid`
	kill $PID
    fi

    rm -f $ROOTDIR/selenium.out $ROOTDIR/selenium.err $ROOTDIR/selenium.pid
fi
