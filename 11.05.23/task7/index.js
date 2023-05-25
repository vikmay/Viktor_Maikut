const bookList = document.getElementById("bookList");
    let selectedBooks = [];

    function handleBookClick(event) {
      const book = event.target;
      const isCtrlPressed = event.ctrlKey;
      const isShiftPressed = event.shiftKey;

      if (isCtrlPressed) {
        toggleBookSelection(book);
      } else if (isShiftPressed) {
        selectBooksInRange(book);
      } else {
        clearSelection();
        selectBook(book);
      }
    }

    function toggleBookSelection(book) {
      const bookIndex = selectedBooks.indexOf(book);
      if (bookIndex > -1) {
        selectedBooks.splice(bookIndex, 1);
        book.classList.remove("selected");
      } else {
        selectedBooks.push(book);
        book.classList.add("selected");
      }
    }

    function selectBooksInRange(book) {
      if (selectedBooks.length === 0) {
        selectBook(book);
        return;
      }

      const firstSelectedBook = selectedBooks[0];
      const lastSelectedBook = selectedBooks[selectedBooks.length - 1];
      const books = Array.from(bookList.children);
      const startIndex = books.indexOf(firstSelectedBook);
      const endIndex = books.indexOf(lastSelectedBook);

      for (let i = startIndex; i <= endIndex; i++) {
        const currentBook = books[i];
        if (!selectedBooks.includes(currentBook)) {
          selectedBooks.push(currentBook);
          currentBook.classList.add("selected");
        }
      }
    }

    function selectBook(book) {
      selectedBooks.push(book);
      book.classList.add("selected");
    }

    function clearSelection() {
      selectedBooks.forEach((book) => {
        book.classList.remove("selected");
      });
      selectedBooks = [];
    }

    bookList.addEventListener("click", handleBookClick);