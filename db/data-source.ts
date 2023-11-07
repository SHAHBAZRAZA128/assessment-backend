import { configDotenv } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

configDotenv()

export const dataSourceOptions: DataSourceOptions = {
	type: 'postgres',
	host: process.env.DB_HOST,
	port: parseInt(process.env.DB_PORT, 10), 
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
	entities: ["dist/**/*.entity{.ts,.js}"],
	migrations: ["dist/src/migrations/*.js"],
	// logging: true,  
	// autoLoadEntities: true,

};
const dataSource = new DataSource(dataSourceOptions);
export default dataSource;

