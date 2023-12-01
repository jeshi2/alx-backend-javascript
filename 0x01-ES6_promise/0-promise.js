function getResponseFromAPI() {
    return new Promise((resolve) => {
        // Your API request or asynchronous logic goes here
        // For example, resolving with a sample data after a timeout
        setTimeout(() => {
            resolve({
                status: 200,
                body: 'Sample API response',
            });
        }, 1000); // Simulating a delay of 1 second
    });
}

export default getResponseFromAPI;