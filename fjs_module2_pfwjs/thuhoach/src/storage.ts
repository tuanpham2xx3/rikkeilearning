export function saveToStorage<T>(key: string, data: T): void {
  localStorage.setItem(key, JSON.stringify(data));
}

export function loadFromStorage<T>(key: string, defaultValue: T): T {
  try {
    const data = localStorage.getItem(key);

    if (data === null) {
      return defaultValue;
    }

    return JSON.parse(data) as T;
  } catch (error) {
    console.error(`Error loading ${key} from localStorage:`, error);
    return defaultValue;
  }
}
