#!/bin/bash

#
# Handle error returns from called commands.
#
# This simple error handler will make the script return the exit code of the last
# command that returned non-zero.
#
# For this to work, the called commands must actually return non-zero in case of
# errors. For other shell scripts, it is thus advisable to set the 'errexit' shell
# option, see also http://www.alittlemadness.com/2006/05/24/bash-tip-exit-on-error/
# (or ensure non-zero return on error by some other means, e.g. yet another error
# handler).
#
# see http://stackoverflow.com/questions/1000370/add-collect-exit-codes-in-bash
# for an example and further documentation.
#

# inheriting the ERR trap into the ( ... ) subshells does not work even with '-E',
# in spite of what's said here:
# http://stackoverflow.com/questions/9624947/bash-not-trapping-interrupts-during-rsync-subshell-exec-statements

declare -i ERROR=0

ErrorHandler () {
    ERROR=$?
    if [[ $BASH_SUBSHELL -gt 0 ]]; then
      echo "      ^- returned ERROR: $ERROR"
    fi
}

ExitHandler () {
    # echo "      >- returning ERROR: $ERROR"
    exit $ERROR
}

trap ErrorHandler ERR
trap ExitHandler EXIT

(
    trap ErrorHandler ERR
    trap ExitHandler EXIT

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
    trap ErrorHandler ERR
    trap ExitHandler EXIT

    echo "******"
    echo "****** Selenium"
    echo "******"
    cd selenium
    echo "***** SERVER STOP"
    ./server.sh stop
    echo "***** SERVER START"
    ./server.sh start
    echo "***** RUN TEST"
    ./runtests.sh 
    echo "***** SERVER STOP"
    ./server.sh stop
)
