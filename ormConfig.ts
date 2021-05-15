import { ConnectionOptions } from 'typeorm';
import Account from './entity/Account';

const connectionOptions: ConnectionOptions = {
  "type": "mysql",
  "host": "localhost",
  "port": 3306,
  "username": "root",
  "password": "yewon",
  "database": "housework_contract",
  "synchronize": true,
  "logging": true,
  "entities": [
    Account,
    "src/entity/*.ts"
  ],
  "subscribers": [
    "src/subscriber/*.ts"
  ],
  "migrations": [
    "src/migration/*.ts"
  ],
  "cli": {
    "entitiesDir": "src/entity",
    "migrationsDir": "src/migration",
    "subscribersDir": "src/subscriber"
  }
}

export default connectionOptions;