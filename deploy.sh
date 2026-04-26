#!/bin/bash


export DEPLOYPATH=/home/hepivasi/public_html/
/bin/cp *.html $DEPLOYPATH
/bin/cp *.css $DEPLOYPATH
/bin/cp *.md $DEPLOYPATH
/bin/cp *.txt $DEPLOYPATH
/bin/cp *.png $DEPLOYPATH
/bin/cp *.jpg $DEPLOYPATH
/bin/cp *.mjs $DEPLOYPATH
/bin/cp *.html $DEPLOYPATH
/bin/cp minify $DEPLOYPATH
/bin/cp -r blog $DEPLOYPATH/blog
/bin/cp -r media $DEPLOYPATH/media
/bin/cp -r projects $DEPLOYPATH/projects

chmod +x $$DEPLOYPATH/minify
$DEPLOYPATH/minify -i --recursive $DEPLOYPATH

echo "Success" > $DEPLOYPATH/deploy.txt