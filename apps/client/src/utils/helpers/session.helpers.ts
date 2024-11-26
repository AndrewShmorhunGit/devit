export enum LocalStorage {
  TOKEN = "token",
}

export const getAccessToken = (): string | null => {
  const session = localStorage.getItem(LocalStorage.TOKEN);
  return session ?? null;
};

export const handleSession = (session: string) => {
  localStorage.setItem(LocalStorage.TOKEN, session);
};

export const handleRemoveSession = () => {
  localStorage.removeItem(LocalStorage.TOKEN);
};
