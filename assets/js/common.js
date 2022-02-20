    const method = "POST";
      // create common methods inside common class 
      //you can put this code in common.js file
      class Common {
        enabledWebsites(method, url, headers) {
           
          let data = getData(methods, url, headers);
          console.log(data);
          //create elements and add it to html code here


        }
      }
      let common = new Common();

    