function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then(response => response.json())
    .then(books => {
      // for (const dataObj of books) {
      //   const li = document.createElement("li")
      //   const h3 = document.createElement("h3")
      //   li.append(h3)
      //   h3.textContent = dataObj.name
      //   document.querySelector("#list").append(li)
      // }


      renderBooks(books)
    })
    .catch(error => alert(error))
}



function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  fetchBooks();
});
