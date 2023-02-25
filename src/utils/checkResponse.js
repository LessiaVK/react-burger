export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
}

export async function getDataJson(url, callback) {
  fetch(url).then(checkResponse).then(callback);
}
