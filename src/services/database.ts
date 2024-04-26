import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { env } from '@/env';

const connStr = env.DATABASE_CONN_STR;
const connection = postgres(connStr, { prepare: false });
export const db = drizzle(connection);
