export const getSession = () => {
  return localStorage.getItem('session');
};

export const setSession = (val: string) => {
  return localStorage.setItem('session', val);
}