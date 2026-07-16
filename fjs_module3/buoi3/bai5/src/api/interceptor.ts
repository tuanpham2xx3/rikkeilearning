import { useAppStore } from '../store/useAppStore';

type RequestConfig = { headers: Record<string, string> };

// File thuần TS: dùng Vanilla API getState(), tuyệt đối không gọi hook useAppStore().
export function attachAuthorization(config: RequestConfig): RequestConfig {
  const token = useAppStore.getState().token;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
}
