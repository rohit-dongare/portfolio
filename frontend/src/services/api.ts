import { healthResponseSchema, type HealthResponse } from '@portfolio/shared';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:4000/api';

export async function getHealthStatus(): Promise<HealthResponse> {
  const response = await fetch(`${API_BASE_URL}/health`);

  if (!response.ok) {
    throw new Error(`Health check failed with status ${response.status}`);
  }

  const payload = await response.json();
  return healthResponseSchema.parse(payload);
}
