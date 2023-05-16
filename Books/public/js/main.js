let saveBook = (e) => {
    e.preventDefault();
    let form = document.querySelector('form'); //It gets the form
    if (form.checkValidity()) { //It validates the form
        let title = document.getElementById('title'); //It gets the title from the form
        let author = document.getElementById('author');
        let image = document.getElementById('image'); //It gets the image from the form
        let description = document.getElementById('description'); //It gets the description from the form
        let formData = new FormData(); //It creates a new FormData object to save the fields in the form
        formData.append('title', title.value); //It appends the fields to the FormData object
        formData.append('author', author.value);
        formData.append('image', image.files[0]); //It appends the fields to the FormData object 
        formData.append('description', description.value); //It appends the fields to the FormData object
        fetch('/books', { //It sends the request to the back-end
            method: 'POST',
            body: formData
        }).then(response => {
            if (response.status == 200) {
                form.reset(); //It resets the form
                form.classList.remove('was-validated');
                alert('Data saved successfully!');
            }
        }
        ).catch(error => {
            console.log(error);
        });
    }
    else {
        form.classList.add('was-validated');
        form.reportValidity();
    }
}

