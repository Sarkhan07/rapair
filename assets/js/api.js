  //global function to get data/response
      //you can put this code in api.js file
      function getData(method, url,headers, body = null) {
        return fetch(url, {
          method: method,
          body: JSON.stringify(body),
          headers: headers,
        }).then((response) => {
          if (response.ok) {
            return response.json();
          }
          return response.json().then((error) => {
            const e = new Error("Something happened");
            e.data = error;
            throw e;
          });
        });
      }
