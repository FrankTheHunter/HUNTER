import { Module, Global } from '@nestjs/common';
import { Kysely, PostgresDialect } from 'kysely';
import { Pool } from 'pg';

const DATABASE_PROVIDERS = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => {
      const db = new Kysely({
        dialect: new PostgresDialect({
          pool: new Pool({
            host: '127.0.0.1:5432',
            database: 'hunters',
            user: 'hunter',
            password: 'super',
          }),
        }),
      });
      return db;
    },
  },
];

@Global()
@Module({
  providers: [...DATABASE_PROVIDERS],
  exports: [...DATABASE_PROVIDERS],
})
export class DatabaseModule {}
