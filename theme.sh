#!/bin/bash

cp -r .theme/ themes/
mv themes/.theme themes/$1

sed -i 's/theme/'$1'/g' themes/$1/**/*.php
sed -i 's/theme/'$1'/g' themes/$1/*.*
sed -i 's/_S/\U'$1'/g' themes/$1/functions.php  
