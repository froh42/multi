#!/bin/bash
waitfor() {
    for i in {0..30}; do
	$@
	if [ $? -eq 0 ]; then
	    break
	fi
	sleep 1
#	echo "Waitinig ... $i"
    done
}

checkJsTestDriver() {
    curl -s -f http://localhost:9876 | grep JsTestDriver >/dev/null
}

checkPhantom() {
    curl -s -f http://localhost:9876 | grep "Name: Safari" >/dev/null
}

function download() {
    [ -f $2 ] || curl -s $1 > $2
}

function startbg() {
    id=$1
    shift
    nohup $@ > $TMP/$id.out 2> $TMP/$id.err < /dev/null &
    echo $! > $TMP/phantomjs.pid
}

function stopbg() {
    if [ -f $TMP/$id.pid ]; then
	PID=`cat $TMP/jstd.pid`
	kill $PID >/dev/null
    fi
}
