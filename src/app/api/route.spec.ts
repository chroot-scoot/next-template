import { describe, expect, test } from 'vitest';
import { GET } from './route';

describe('GET /api', () => {
  test("returns 'Hello, World'", async () => {
    const response = await GET();

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ msg: 'Hello, World' });
  });
});
