import { describe, expect, it } from 'vitest';
import { healthResponseSchema } from './health.js';

describe('healthResponseSchema', () => {
  it('accepts a valid health payload', () => {
    const result = healthResponseSchema.safeParse({
      success: true,
      message: 'Backend is healthy',
      timestamp: '2026-08-29T00:00:00.000Z',
    });

    expect(result.success).toBe(true);
  });

  it('rejects invalid timestamps', () => {
    const result = healthResponseSchema.safeParse({
      success: true,
      message: 'Backend is healthy',
      timestamp: 'not-a-date',
    });

    expect(result.success).toBe(false);
  });
});
