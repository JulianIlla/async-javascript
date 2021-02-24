const getTodos = (resource) => {

    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
  
      request.addEventListener('readystatechange', () => {
    
        if(request.readyState === 4 && request.status === 200){
          const data = JSON.parse(request.responseText);
          resolve(data);
        } else if (request.readyState === 4){
          reject('could not fetch the data');
        }
    
      });
      
      request.open('GET', resource);
      request.send();
    });
  
  };
  
  getTodos('json/luigi.json').then(data => {
    console.log('promise resolved:', data);
  }).catch(err => {
    console.log('promise rejected:', err);
  });
  
  const getSomething = () => {
  
    return new Promise((resolve, reject) => {
      reject('some error');
    });
  
  };