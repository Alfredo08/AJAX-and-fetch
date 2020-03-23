
function fetchDogImages(){

    let settings = {
      method : 'GET'
    };
  
    let url = "https://dog.ceo/api/breeds/image/random/5";
  
    fetch( url, settings )
      .then( response => {
  
        if( response.status === 200 ){
          return response.json();
        }
        throw new Error( "Something went wrong!" );
      })
      .then( responseJSON => {
        let dogImages = document.querySelector( '.dogs-images' );
  
        responseJSON.message.forEach( imageURL => {
          dogImages.innerHTML += `<img src="${imageURL}" />`;
        });
        
      })
      .catch( errMessage => {
        console.log( errMessage );
      })
  
  }
  
  
  function watchForm(){
  
    let dogsForm = document.querySelector( '.dogs-form' );
  
    dogsForm.addEventListener( 'submit', ( event ) => {
      event.preventDefault();
  
      fetchDogImages();
    });
  }
  
  
  function init(){
    watchForm();
  }
  
  init();