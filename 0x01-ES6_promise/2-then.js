function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      console.log('Got a response from the API');
      return {
        status: 200,
        body: 'success',
      };
    })
    .catch((error) => {
      console.error('Got an error response from the API');

      console.error(error);

      return {
        status: 500,
        body: 'error',
        error: error.message,
      };
    });
}

export default handleResponseFromAPI;
