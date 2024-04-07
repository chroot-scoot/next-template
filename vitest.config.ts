import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    include: ['src/**/*.spec.{tsx,ts}'],
    reporters: ['html', 'default'],
    outputFile: 'vitest-report/index.html',
  },
});
