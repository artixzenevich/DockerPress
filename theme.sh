#!/bin/bash

cp -r ._sd/ $1/

sed -i 's/_sd/'$1'/g' $1/**/*.php
sed -i 's/_sd/'$1'/g' $1/*.*
sed -i 's/_SD/\U'$1'/g' $1/functions.php  
sed -i 's/_sd/'$1'/g' $1/webpack.config.dev.js
