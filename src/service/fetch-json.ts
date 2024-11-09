export async function fetchJSON(url = '/data.json') {
  let response = await fetch(url)
  if (!response.ok) {
    try {
      response = await fetch(window.location.href + 'data.json')
    }
    catch (e) {
      console.error('Error loading json file', e)
      return null
    }
  }
  try {
    const data = await response.json()
    return data
  }
  catch (e) {
    console.error('Error reading json file', e)
  }
  return null
}
