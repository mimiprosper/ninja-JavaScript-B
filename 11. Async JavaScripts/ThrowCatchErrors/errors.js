const getTodos = async () => {

    const response = await fetch('luigi.json');

    if (response.status !== 200) {
        throw new Error('Can not get data')
    }

    const data = response.json();
    return data;

}

getTodos()
    .then(data => console.log('Resolved : ', data))
    .catch(err => console.log('Rejected ; ', err.message));