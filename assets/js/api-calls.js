

      //you can create this code inside api-call.js file
      let url =
        "https://cors-anywhere.herokuapp.com/https://my-brand-new-storefghfjghmhkh.stagesz.com/api/sites/enabled";
    
      const headers = {
        "Content-Type": "application/json",
      };


      

      common.enabledWebsites("POST", url, headers);

      //sequence to link js files
      //getData function will available to access in another js file
      //1.api.js
      // common object will available to access in another js file
      //2.common.js
      //now you can call common.enabledWebsites method and also other methods in api call js
      //3.api-call.js
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
//   const headers = {
//     'Content-Type': 'application/json'
//   };
//   const commonUrl = "https://cors-anywhere.herokuapp.com/https://my-brand-new-storefghfjghmhkh.stagesz.com/api/sites/enabled";
//   const cartUrl = "https://cors-anywhere.herokuapp.com/https://my-brand-new-storefghfjghmhkh.stagesz.com/cart/get-cart";
//   const addCartUrl = "https://cors-anywhere.herokuapp.com/https://my-brand-new-storefghfjghmhkh.stagesz.com/cart/add/{item_id}/{quantity}";
//   const decraseUrl = "https://cors-anywhere.herokuapp.com/https://my-brand-new-storefghfjghmhkh.stagesz.com/cart/remove/{item_id}/{quantity}";
//   const deleteUrl = "https://cors-anywhere.herokuapp.com/https://my-brand-new-storefghfjghmhkh.stagesz.com/cart/delete/{item_id}";
//   const commonSettingUrl = "https://cors-anywhere.herokuapp.com/https://my-brand-new-storefghfjghmhkh.stagesz.com/api/customer/common";
//   const testimonialsUrl = "https://cors-anywhere.herokuapp.com/https://my-brand-new-storefghfjghmhkh.stagesz.com/api/testimonials";
//   const flashUrl  = "https://cors-anywhere.herokuapp.com/https://my-brand-new-storefghfjghmhkh.stagesz.com/api/get-flash-messages";


//   function enabledWebsites(method, url, body = null) {
//     return fetch(url, {
//       method: method,
//       body: JSON.stringify(body),
//       headers: headers
//     }).then(response => {
//       if (response.ok) {
//         return response.json();
//       } 
//       return response.json().then(error => {
//        const e = new Error('Something happened');
//        e.data = error;
//        throw e;
//      });

//     });
//   }

//   enabledWebsites("POST", commonUrl, {})
//   .then(data => alert (data) )
//   .catch(err => console.log(err));



//   // function getCart(method, url, body = null) {
//   //   return fetch(url, {
//   //     method: method,
//   //     body: JSON.stringify(body),
//   //     headers: headers
//   //   }).then(response => {
//   //     if (response.ok) {
//   //       return response.json();
//   //     } 
//   //     return response.json().then(error => {
//   //      const e = new Error('Something happened');
//   //      e.data = error;
//   //      throw e;
//   //    });

//   //   });
//   // }

//   // getCart("POST", cartUrl, {})
//   // .then(data => console.log(data))
//   // .catch(err => console.log(err));


//   // function addToCart(method, url, body = null) {
//   //   return fetch(url, {
//   //     method: method,
//   //     body: JSON.stringify(body),
//   //     headers: headers
//   //   }).then(response => {
//   //     if (response.ok) {
//   //       return response.json();
//   //     } 
//   //     return response.json().then(error => {
//   //      const e = new Error('Something happened');
//   //      e.data = error;
//   //      throw e;
//   //    });

//   //   });
//   // }

//   // addToCart("POST", addCartUrl, {})
//   // .then(data => console.log(data))
//   // .catch(err => console.log(err));

//   // function decreaseItemQuantityFromCart(method, url, body = null) {
//   //   return fetch(url, {
//   //     method: method,
//   //     body: JSON.stringify(body),
//   //     headers: headers
//   //   }).then(response => {
//   //     if (response.ok) {
//   //       return response.json();
//   //     } 
//   //     return response.json().then(error => {
//   //      const e = new Error('Something happened');
//   //      e.data = error;
//   //      throw e;
//   //    });

//   //   });
//   // }

//   // decreaseItemQuantityFromCart("POST", decraseUrl, {})
//   // .then(data => console.log(data))
//   // .catch(err => console.log(err));


//   // function deleteAnItemFromCart(method, url, body = null) {
//   //   return fetch(url, {
//   //     method: method,
//   //     body: JSON.stringify(body),
//   //     headers: headers
//   //   }).then(response => {
//   //     if (response.ok) {
//   //       return response.json();
//   //     } 
//   //     return response.json().then(error => {
//   //      const e = new Error('Something happened');
//   //      e.data = error;
//   //      throw e;
//   //    });

//   //   });
//   // }

//   // deleteAnItemFromCart("DELETE", deleteUrl, {})
//   // .then(data => console.log(data))
//   // .catch(err => console.log(err));


//   // function getCustomerCommonSettings(method, url, body = null) {
//   //   return fetch(url).then( response => {
//   //     return response.json();
//   //    });
//   // }
 
//   // getCustomerCommonSettings("GET", commonSettingUrl)
//   // .then(data => console.log(data))
//   // .catch(err => console.log(err));

//   // function testimonials(method, url, body = null) {
//   //   return fetch(url).then( response => {
//   //     return response.json();
//   //    });
//   // }
 
//   // testimonials("GET", testimonialsUrl)
//   // .then(data => console.log(data))
//   // .catch(err => console.log(err));

//   // function  getFlashMessages(method, url, body = null) {
//   //   return fetch(url).then( response => {
//   //     return response.json();
//   //    });
//   // }
 
//   // getFlashMessages("GET", flashUrl)
//   // .then(data => console.log(data))
//   // .catch(err => console.log(err));

  







// // function decreaseItemQuantityFromCart(method, url, body = null) {
// //   return new Promise( (resolve, reject) => {
// //     const xhr = new XMLHttpRequest();

// //     xhr.open(method, url);

// //     xhr.responseType = 'json';
// //     xhr.setRequestHeader('Content-Type', 'application/json');

// //     xhr.onload = () => {
// //       if (xhr.status >= 400) {  
// //         reject(xhr.response);
// //       } else {
// //         resolve(xhr.response);
// //       }
// //     };

// //       xhr.onerror = () => { 
// //         reject(xhr.response);
// //       };
// //       xhr.send();

// //   });

// // }

// //   decreaseItemQuantityFromCart('POST', decraseUrl, {})
// //     .then(data => console.log(data))
// //     .catch(err => console.log(err));

// // function enabledWebsites() {
// //   fetch(commonUrl, {
// //     method: "POST",
// //     headers: {
// //       'Content-Type': 'application/json',
// //     }
// //   }).then(response => {
// //     if(response.status === 200) {
// //       return response.json();
// //     } else {
// //       alert("Error: " + response.status);
// //     }
// //   }).then(data=>{
    
// //   });
// // }

// // enabledWebsites();
