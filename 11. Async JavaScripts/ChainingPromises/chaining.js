const getTodos = resource => {

  return new Promise((resolve, reject) => {

    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {

      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject('some error getting resources');
      }

    });

    request.open('GET', resource);
    request.send();

  });

}

getTodos('luigi.json').then(data => {
  console.log('promise resolved 1: ', data);
  return getTodos('mario.json');
}).then(data => {
  console.log('promise resolved 2: ', data);
  return getTodos('shaun.json');
}).then(data => {
  console.log('promise resolved 3: ', data)
}).catch(err => {
  console.log('promise rejected: ', err);
})

