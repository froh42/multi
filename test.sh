#!/bin/sh
(
    echo "******"
    echo "****** jsTestDriver"
    echo "******"
    cd jsTestDriver
    echo "***** SERVER STOP"
    ./server.sh stop
    echo "***** SERVER START"
    ./server.sh start
    sleep 10
    echo "***** RUN TEST"
    ./runtests.sh --config ../test.jstd --tests all --testOutput ../testReports
    echo "***** SERVER STOP"
    ./server.sh stop
)

(
    echo "******"
    echo "****** Selenium"
    echo "******"
    cd selenium
    echo "***** SERVER STOP"
    ./server.sh stop
    echo "***** SERVER START"
    ./server.sh start
    sleep 10
    echo "***** RUN TEST"
    ./runtests.sh 
    echo "***** SERVER STOP"
    ./server.sh stop
)
