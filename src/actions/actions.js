export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const MANUAL_LOGIN = 'MANUAL_LOGIN';

export function login(credentials) {
  return { type: LOGIN, credentials };
}

export function logout() {
  return { type: LOGOUT };
}

export function manualLogin(credentials) {
  return { type: MANUAL_LOGIN, credentials};
}