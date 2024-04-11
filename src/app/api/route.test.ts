import { describe, expect, it } from 'vitest';
import { GET } from './route';

describe('get /api', () => {
  it("returns 'Hello, World'", async () => {
    const response = await GET();

    expect.hasAssertions();
    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toStrictEqual({
      msg: 'Hello, World',
    });
  });
});
