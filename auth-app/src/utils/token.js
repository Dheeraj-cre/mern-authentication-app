const TOKEN_KEY = "token";

/**
 * Save JWT token
 */
export function setToken(token) {
  if (token) {
    localStorage.setItem(TOKEN_KEY, token);
  }
}

/**
 * Get JWT token
 */
export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

/**
 * Remove JWT token
 */
export function removeToken() {
  localStorage.removeItem(TOKEN_KEY);
}
