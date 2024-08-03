export async function fetchJSON(url = "/data.json") {
  let response = await fetch(url);
  if (!response.ok) {
    response = await fetch(window.location.href + "data.json");
  }
  const data = await response.json();
  return data;
}
