const TOKEN_KEY = 'token'
const DATA_USER_KEY = 'data_user'


// DATA LOGIN

export function setDataUser(data_user) {
  localStorage.setItem(DATA_USER_KEY, JSON.stringify(data_user))
}

export function getDataUser() {
  return JSON.parse(localStorage.getItem(DATA_USER_KEY))
}

export function removeDataUser() {
  localStorage.removeItem(DATA_USER_KEY)
}

// TOKEN

export function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token)
}

export function getToken() {
  return localStorage.getItem(TOKEN_KEY)
}

export function removeToken() {
  localStorage.removeItem(TOKEN_KEY)
}

