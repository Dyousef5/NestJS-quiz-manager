import { DataSource } from 'typeorm';


export const databaseProviders = [
   {
      provide: 'DATA_SOURCE',
      useFactory: async () => {
         const dataSource = new DataSource({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'diaa12345',
            database: 'Quiz',
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
            migrations:[__dirname + '/../migrations/*{.ts,.js}'],

            synchronize: true,
         });
         return dataSource.initialize();
      },
   },
];
