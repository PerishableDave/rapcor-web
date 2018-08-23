
export const serializePhone = (value) => {
  const number = value.replace(/[^\d]/g, '')
  return `+1${number}`
}

export const deserializePhone = (value) => {
  if (!value) {
    return value
  }

  if (value.length === 0) {
    return ''
  }
  
  if (value.length === 12 && value.slice(0, 2) === "+1") {
    return `(${value.slice(2, 5)}) ${value.slice(5, 8)}-${value.slice(8, 12)}`
  }

  return value
}
