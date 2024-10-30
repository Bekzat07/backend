/* eslint-disable prefer-const */
import { DataSource } from 'typeorm';

let dbConfig: any = {
  type: 'postgres',
  port: 5432,
  database: 'cur',
  url: 'localhost',
  synchronize: false,
  username: 'postgres',
  password: 'Beka_2002',
  migrations: ['migrations/*.js'],
  entities: ['**/*.entity.js'],
  migrationRun: false,
};
// console.log('migrations', process.env.NODE_ENV);
// switch (process.env.NODE_ENV) {
//   case 'development':
//     dbConfig.database = 'db.sqlite';
//     break;
//   case 'test':
//     dbConfig.database = 'test.sqlite';
//     break;
//   case 'production':
//     dbConfig.database = 'prod.sqlite';
//     break;
//   default:
//     throw new Error('Unknown environment');
// }

export const AppDataSource = new DataSource(dbConfig);
AppDataSource.initialize()
  .then(() => console.log('Data Source has been initialized'))
  .catch((error) => console.error('Error initializing Data Source', error));
