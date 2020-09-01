

export const sortTheData = (dataObject) => {

  return fetch("http://localhost:8080/api/sorting", {
    method: 'POST',
    body: JSON.stringify(dataObject),
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json());
};
