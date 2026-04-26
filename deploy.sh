#!/bin/bash

chmod +x minify

export DEPLOYPATH=/home/hepivasi/public_html/
/bin/cp *.html $DEPLOYPATH
/bin/cp *.css $DEPLOYPATH
/bin/cp *.md $DEPLOYPATH
/bin/cp *.txt $DEPLOYPATH
/bin/cp *.png $DEPLOYPATH
/bin/cp *.jpg $DEPLOYPATH
/bin/cp *.mjs $DEPLOYPATH
/bin/cp *.html $DEPLOYPATH
/bin/cp -r blog $DEPLOYPATH/blog
/bin/cp -r media $DEPLOYPATH/media
/bin/cp -r projects $DEPLOYPATH/projects

$DEPLOYPATH/minify -i $DEPLOYPATH

echo "Success" > $DEPLOYPATH/deploy.txt