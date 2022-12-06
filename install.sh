#!/bin/bash
project_env=("_sd" "version" "user" "pass" "_sdroot")
questions=(
  "1.Project name:"
  "2.Wordpress version (press 'Enter' for lates version):"
  "3.Username MySQL:"
  "4.Password MySQL:"
  "5.Root password MySQL"
)
user_answer=()

echo "_sd_installer v.1.2.3"

for q in "${questions[@]}";
do
  echo $q
  read var
  user_answer+=($var)
done

cp env.example .env

for env in "${!project_env[@]}";
do
  sed -i 's/'${project_env[$env]}'/'${user_answer[$env]}'/g' .env
done

echo "Want to create a new theme?:(y/n)"
read new

if [[ $new = 'y' ]]; then
  echo "New theme "${user_answer[0]}" created in theme/"
  . theme.sh "${user_answer[0]}"
elif [[ $new = 'n' ]]; then
  echo "If you want to create a new theme call the script ./theme.sh"
else
  echo "If you want to create a new theme call the script ./theme.sh"
fi

docker-compose up -d
npm install

echo "Done!!!"
