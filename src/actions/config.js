export function getFormConfig() {
  return {
    headers: {
      'Authorization': `JWT ${localStorage.authToken}`,
      "Content-Type": "application/x-www-form-urlencoded"
    }
  }
}

export function getDefaultConfig() {
  return {
    headers: {
      'Authorization': `JWT ${localStorage.authToken}`,
    }
  }
}