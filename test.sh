#!/bin/sh
(
    cd jsTestDriver
    ./server.sh stop
    ./server.sh start
    sleep 1
    tail -f *.err *.out
    ./runtests.sh --config ../test.jstd --tests all --testOutput ../testReports
    ./server.sh stop
)

