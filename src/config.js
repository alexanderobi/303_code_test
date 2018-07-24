const {
  MYSQL_PORT_3306_TCP_ADDR,
  MYSQL_DATABASE,
  MYSQL_PORT_3306_TCP_PORT,
  MYSQL_ENV_MYSQL_ROOT_PASSWORD,
} = process.env;

const host = MYSQL_PORT_3306_TCP_ADDR || 'localhost';
const user = 'root';
const password = MYSQL_ENV_MYSQL_ROOT_PASSWORD || '';
const dialect = 'mysql';
const database = MYSQL_DATABASE || 'test_303';
const port = MYSQL_PORT_3306_TCP_PORT || 3306;

module.exports = {
  database: {
    host,
    user,
    password,
    dialect,
    database,
    port,
  },
};
