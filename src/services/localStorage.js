import { isBrowser } from "./isBrowser"

export const getLocalStorage = key =>
  isBrowser() && window.localStorage.getItem(key)
    ? JSON.parse(window.localStorage.getItem(key))
    : null

export const setLocalStorage = (key, value) =>
  window.localStorage.setItem(key, JSON.stringify(value))
