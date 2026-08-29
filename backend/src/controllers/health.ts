import { healthResponseSchema } from '@portfolio/shared';
import type { Request, Response } from 'express';

const getHealth = (_req: Request, res: Response) => {
  const payload = healthResponseSchema.parse({
    success: true,
    message: 'Backend is healthy',
    timestamp: new Date().toISOString(),
  });

  res.status(200).json(payload);
};

export const healthController = {
  getHealth,
};
