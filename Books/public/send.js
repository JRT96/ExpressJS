let saveBook = (e) => {
    e.preventDefault();
    let form = document.querySelector('form');
    if (form.checkValidity()) {
        let title = document.getElementById('title');
        let author = document.getElementById('author');
        let image = document.getElementById('image');
        let description = document.getElementById('description');
        let formData = new FormData();
        formData.append('Title', title.value);
        formData.append('Author', author.value);
        formData.append('Image', image.files[0]);
        formData.append('Description', description.value);
        fetch('/save', {
            method: 'POST',
            body: formData
        }).then (response => {
            if (response.status == 200) {
                form.reset();
                form.classList.remove('was-validated');
                alert('Book Saved');
            }
        }).catch(error => {
            console.log(error);
        })
    }
    else {
        form.classList.add('was-validated');
        form.reportValidity();
    }
    
};