# UCSOL DEV

## Установка и запуск

В системе должен быть установлен **Docker** и **Composer**.

Клонируем репо:
```bash
git clone repo
```

Копируем **env.example** в **.env** и меняем значения переменных.  Запускаем контейнер и устанавливаем окружение:

```bash
docker-compose up -d
cd src/
composer install
cd app/themes/dockerpress/ 
npm i
npm run dev
```

## Установка плагинов  с помощью composer

Плагины устанавливаются находясь по пути **/src/**:
```bash
composer search <название_плагина> // если необходимо найти плагин
composer require <название_плагина>
```

Еще один вариант поиска плагинов, искать их  на сайте [wpackagist](https://wpackagist.org/)
