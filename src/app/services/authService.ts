// authService.ts
import { fetchAPI } from '@/app/services/api';

interface LoginResponse {
  token: string;
  role: string;
}

interface LoginPayload {
  username: string;
  password: string;
}

export async function login(payload: LoginPayload): Promise<LoginResponse> {
  return fetchAPI<LoginResponse>('/login', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}
