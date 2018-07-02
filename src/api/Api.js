const loadUserApi = (payload) => {
   return fetch('/records.json')
    .then(response => {
      return response.json()
    })
    .then((findResponse) => {
      return findResponse;
    })
    .catch(function (exception) {
      console.log('Parsing Failed', exception)
    })

};
export default loadUserApi;



