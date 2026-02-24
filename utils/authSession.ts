import { GOOGLE_AUTH_SESSION_KEY } from "../constants/auth";

const getStorage = () => {
  if (typeof globalThis === "undefined" || !("localStorage" in globalThis)) {
    return null;
  }

  return globalThis.localStorage;
};

export const persistGoogleAuthSession = () => {
  const storage = getStorage();

  if (!storage) {
    return;
  }

  storage.setItem(GOOGLE_AUTH_SESSION_KEY, "true");
};

export const hasGoogleAuthSession = () => {
  const storage = getStorage();

  if (!storage) {
    return false;
  }

  return storage.getItem(GOOGLE_AUTH_SESSION_KEY) === "true";
};
