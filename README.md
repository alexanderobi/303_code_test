# 303_code_test
Rest API

### Requirements
- node >= 8.9
- mysql / mariadb
- docker

```bash
export MYSQL_PORT_3306_TCP_ADDR=localhost
export MYSQL_DATABASE=test_303
export MYSQL_PORT_3306_TCP_PORT=3308
export MYSQL_ENV_MYSQL_ROOT_PASSWORD=password

docker run -it --rm mysql sh -c 'exec mysql -h"$MYSQL_PORT_3306_TCP_ADDR" -P"$MYSQL_PORT_3306_TCP_PORT" -uroot -p"$MYSQL_ENV_MYSQL_ROOT_PASSWORD" --database="MYSQL_DATABASE"'
```

### Installation
```bash
npm install
```

### Run
```bash
npm run start
```