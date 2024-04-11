import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const serverEnv = createEnv({
  server: {
    DATABASE_CONN_STR: z.string(),
    LOGSTREAM_SOURCE_TOKEN: z.string(),
    NODE_ENV: z.enum(['production', 'development']),
  },
  client: {},
  runtimeEnv: {
    DATABASE_CONN_STR: process.env.DATABASE_CONN_STR,
    LOGSTREAM_SOURCE_TOKEN: process.env.LOGSTREAM_SOURCE_TOKEN,
    NODE_ENV: process.env.NODE_ENV,
  },
});
