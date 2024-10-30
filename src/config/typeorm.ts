import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
dotenv.config();

export const dbConfig: any = {
  type: 'postgres',
  host: 'localhost', // Изменено с 'url' на 'host'
  port: 5432,
  database: 'cur',
  username: 'postgres',
  password: 'Beka_2002',
  synchronize: true,
  migrations: ['migrations/*.js'],
  entities: ['**/*.entity.js'],
  migrationRun: false,
};

// Создание экземпляра DataSource
const AppDataSource = new DataSource(dbConfig);

// Экспортируйте экземпляр DataSource
export default AppDataSource;

// Логирование конфигурации
console.log('Connecting to database with config:', dbConfig);

// Инициализация DataSource
AppDataSource.initialize()
  .then(() => console.log('Data Source has been initialized'))
  .catch((error) => console.error('Error initializing Data Source', error));
