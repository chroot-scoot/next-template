import { describe, expect, test } from 'vitest';
import { createMocks } from 'node-mocks-http';
import { GET } from './route';

describe('GET /api', () => {
  test("returns 'Hello, World'", async () => {
    const { req, res } = createMocks({
      method: 'GET',
    });

    const response = await GET(req);

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual([
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
    ]);
  });
});
