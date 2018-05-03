export const saveSession = (store) => {
  try {
    const serializedState = JSON.stringify(store);
    sessionStorage.setItem('sessionState', serializedState)
  } catch (err) {
    // TODO Log error.
  }
}

export const loadSession = () => {
  try {
    const serializedState = sessionStorage.getItem('sessionState')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}
