export const saveSession = (store) => {
  try {
    const session = {
      clinicians: {
        authentication: store.clinicians.authentication
      }
    }
    const serializedState = JSON.stringify(session);
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
