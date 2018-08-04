function searchInput() {
  let opened = false;
  let searchBtn = document.querySelector('.search__btn-search');
  searchBtn.addEventListener('click', () => {
    let searchInput = document.querySelector('.search__input');
    if (!opened) {
      searchInput.style.width = '150px';
      searchInput.style.padding = '0 15px';
      opened = true;
    } else {
      // post user data to the server here
      searchInput.style.width = '0';
      searchInput.style.padding = '0';
      opened = false;
    }
  })
}

searchInput();
