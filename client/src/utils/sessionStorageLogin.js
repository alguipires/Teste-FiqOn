export const getSavedUser = (key) => {
  return sessionStorage.getItem(key);
};

export const saveUser = (key, obj) => {
  // sessionStorage.setItem(key, JSON.stringify(obj));
  sessionStorage.setItem(key, obj);
};

export const removeUser = (key) => {
  if (!key) throw new Error('Você deve fornecer uma chave válida');
  sessionStorage.removeItem(key);
};
