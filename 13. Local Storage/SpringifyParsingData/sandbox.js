const todos = [
    {text: 'play mariokart', author: 'shaun'},
    {text: 'buy some milk', author: 'mario'},
    {text: 'buy some bread', author: 'luigi'}
  ];

  // convert array to JSON data. this enables the data to be stored in local storage
  console.log(JSON.stringify(todos));

  localStorage.setItem('todos', JSON.stringify(todos));
  const stored = localStorage.getItem('todos')
  // converts JSON data to array
  console.log(JSON.parse(stored));

  

