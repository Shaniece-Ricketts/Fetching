// Fetch Request -> JSON placeholder
// https://jsonplaceholder.typicode.com/
export async function getComments() {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        return response.json()
        // console.log(response)
      })
      
        .then((data) => {
            console.log(data);
            for (let i = 0; i < 20; i++) { 
                let commentElement = document.createElement('p'); 
                commentElement.innerHTML = data[i].body; 
                document.body.appendChild(commentElement); 
            }
        });
        
      }
  