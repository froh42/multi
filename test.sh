#!/bin/bash

export PATH=$PATH:`pwd`/node_modules/.bin

source functions.sh

trap ErrorHandler ERR
trap ExitHandler EXIT

echo "****** jsTestDriver"
jsTestDriver/server.sh start
jsTestDriver/runtests.sh
# Keep server running in the background, so IDE can also use it.

(
    trap ErrorHandler ERR
    trap ExitHandler EXIT

    echo "****** Selenium"
    cd selenium
    ./server.sh stop
    ./server.sh start
    ./runtests.sh 
    ./server.sh stop
)
