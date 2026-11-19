export type User = {
  id: string;
  name: string;
};

export function authenticate(): Promise<User> {
  return new Promise((resolve) => setTimeout(() => resolve({ id: '1', name: 'Bob' }), 2000));
}
