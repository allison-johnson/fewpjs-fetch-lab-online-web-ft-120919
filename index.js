function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(function(response) {
    return response.json();
  }).then(function(json) {
    //debugger
    return renderBooks(json);
  })
}// function fetchBooks

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}// function renderBooks

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})//event listener for DOMContentLoaded




