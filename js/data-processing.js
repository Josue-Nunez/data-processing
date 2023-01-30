function titleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }
 

const queryString = window.location.search;




    if(queryString.length>0){
        let myTotal = 0;
        let myData = "";
        let myCart = "";
        const urlParams= new URLSearchParams(queryString);
        
        myCart += "<h3>Cart Contents</h3>"

        urlParams.forEach(function(value,key){
    
            if(key=="Cart"){
                switch(value){
                    case "Widget":
                        myCart += "<p>Widget: $3.99<br></p>";
                        myTotal += 3.99;
                        break;

                    case "Sprocket":
                        myCart += "<p>Sprocket: $5.99<br></p>";
                        myTotal += 5.99;
                        break;

                    case "Thingy":
                        myCart += "<p>Thingy: $1.99<br></p>";
                        myTotal += 1.99;
                        break;                        
                }


                
            }
            else{
                if(key=="First_Name"||key=="Last_Name"||key=="City"){
                    value = titleCase(value);
                }
                
                key = key.split("_").join(" ");
                value = value.split("_").join(" ");
    
                myData += `<p>${key}: ${value}</p>`;
            }


        });

        myCart += "<p>Total: $" + myTotal + `<br></p>`;
        
        myData = myCart + myData;

        myData += `<p><a href = "index.html">CLEAR</a></p>`;
        document.getElementById("output").innerHTML = myData;
    }

    
