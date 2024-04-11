import pino from 'pino';
import { serverEnv } from '@/env';

const transport = pino.transport({
  targets: [
    {
      target: 'pino-pretty',
      options: {
        colorize: true,
      },
    },
    ...(serverEnv.NODE_ENV === 'production'
      ? [
          {
            target: '@logtail/pino',
            options: { sourceToken: serverEnv.LOGSTREAM_SOURCE_TOKEN },
            level: 'warn',
          },
        ]
      : []),
  ],
});

export const logger = pino(transport);
