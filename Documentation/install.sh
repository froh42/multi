#!/bin/sh

echo "examine install.sh and customize for your machine"
exit 777

sudo port install py27-pygments
sudo ln -sf /opt/local/bin/pygmentize-2.7 /opt/local/bin/pygmentize 
sudo port install asciidoc 
wget --no-check-certificate https://github.com/downloads/houqp/asciidoc-deckjs/deckjs-1.3.0.zip
asciidoc --backend install deckjs-1.3.0.zip
