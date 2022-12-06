#!/bin/bash

cp -r ._sd/ themes/
mv themes/._sd themes/$1

sed -i 's/_sd/'$1'/g' themes/$1/**/*.php
sed -i 's/_sd/'$1'/g' themes/$1/*.*
sed -i 's/_SD/\U'$1'/g' themes/$1/functions.php  
