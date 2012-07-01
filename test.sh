#!/bin/sh
(
    cd jsTestDriver
    echo "***** SERVER STOP"
    ./server.sh stop
    echo "***** SERVER START"
    ./server.sh start
    sleep 1
    tail -f *.err *.out &
    sleep 1
    echo "***** RUN TEST"
    ./runtests.sh --config ../test.jstd --tests all --testOutput ../testReports
    echo "***** SERVER STOP"
    ./server.sh stop
)

