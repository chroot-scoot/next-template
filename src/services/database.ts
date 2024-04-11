import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { serverEnv } from '@/env';

const connStr = serverEnv.DATABASE_CONN_STR;
const connection = postgres(connStr, { prepare: false });
export const db = drizzle(connection);
