
function printData(allRows) {
    let table = '';
    if (allRows.length == 0)
        table = '<h3>No Books Available</h3>';
    else {
        allRows.forEach(row => {
            let image = `data:image/jpeg;base64,${arrayBufferToBase64(row.image.data)}`;
            table += ` <div class="m-3" id="cardHolder">
            <div class="row row-cols-1 row-cols-md-3 g-4">
              <div class="col">
                <div class="card h-100">
                  <img src="${image}" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title" id="booktitle">${row.title}</h5>
                    <p class="card-text">${row.description}</p>
                    <p class="card-text">${row.author}</p>
                  </div>
                </div>
              </div>
          </div>`;
        });
    }
}

const arrayBufferToBase64 = (arr) =>
    window.btoa(
        Array(arr.length)
            .fill('')
            .map((_, i) => String.fromCharCode(arr[i]))
            .join('')
    );