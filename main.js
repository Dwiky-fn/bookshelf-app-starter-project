// ambil data dari localStorage atau buat array kosong
let books = JSON.parse(localStorage.getItem("books")) || [];
let editingBookId = null; // penanda kalau sedang edit

// fungsi untuk generate ID unik
function generateId() {
  return +new Date();
}

// fungsi untuk simpan ke localStorage
function saveBooks() {
  localStorage.setItem("books", JSON.stringify(books));
}

// render daftar buku
function renderBooks(filteredBooks = books) {
  const incompleteBookList = document.getElementById("incompleteBookList");
  const completeBookList = document.getElementById("completeBookList");

  incompleteBookList.innerHTML = "";
  completeBookList.innerHTML = "";

  filteredBooks.forEach((book) => {
    const bookElement = document.createElement("div");
    bookElement.setAttribute("data-bookid", book.id);
    bookElement.setAttribute("data-testid", "bookItem");

    bookElement.innerHTML = `
      <h3 data-testid="bookItemTitle">${book.title}</h3>
      <p data-testid="bookItemAuthor">Penulis: ${book.author}</p>
      <p data-testid="bookItemYear">Tahun: ${book.year}</p>
      <div>
        <button data-testid="bookItemIsCompleteButton">
          ${book.isComplete ? "Belum selesai dibaca" : "Selesai dibaca"}
        </button>
        <button data-testid="bookItemDeleteButton">Hapus Buku</button>
        <button data-testid="bookItemEditButton">Edit Buku</button>
      </div>
    `;

    // tombol ubah status selesai/belum
    bookElement.querySelector('[data-testid="bookItemIsCompleteButton"]').addEventListener("click", function () {
      book.isComplete = !book.isComplete;
      saveBooks();
      renderBooks();
    });

    // tombol hapus buku
    bookElement.querySelector('[data-testid="bookItemDeleteButton"]').addEventListener("click", function () {
      const confirmDelete = confirm(`Yakin ingin menghapus "${book.title}"?`);
      if (confirmDelete) {
        books = books.filter((b) => b.id !== book.id);
        saveBooks();
        renderBooks();
      }
    });

    // tombol edit buku
    bookElement.querySelector('[data-testid="bookItemEditButton"]').addEventListener("click", function () {
      document.getElementById("bookFormTitle").value = book.title;
      document.getElementById("bookFormAuthor").value = book.author;
      document.getElementById("bookFormYear").value = book.year;
      document.getElementById("bookFormIsComplete").checked = book.isComplete;

      editingBookId = book.id;
      document.getElementById("bookFormSubmit").textContent = "Update Buku";
    });

    if (book.isComplete) {
      completeBookList.appendChild(bookElement);
    } else {
      incompleteBookList.appendChild(bookElement);
    }
  });

  // update label tombol submit jika bukan edit mode
  const submitBtn = document.getElementById("bookFormSubmit");
  const isComplete = document.getElementById("bookFormIsComplete").checked;
  if (!editingBookId) {
    submitBtn.innerHTML = "Masukkan Buku ke rak <span>" + (isComplete ? "Selesai dibaca" : "Belum selesai dibaca") + "</span>";
  }
}

// tambah atau update buku
document.getElementById("bookForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("bookFormTitle").value;
  const author = document.getElementById("bookFormAuthor").value;
  const year = parseInt(document.getElementById("bookFormYear").value);
  const isComplete = document.getElementById("bookFormIsComplete").checked;

  if (editingBookId) {
    // mode edit
    const bookIndex = books.findIndex((b) => b.id === editingBookId);
    books[bookIndex] = {
      ...books[bookIndex],
      title,
      author,
      year,
      isComplete,
    };
    editingBookId = null;
  } else {
    // mode tambah
    const newBook = {
      id: generateId(),
      title,
      author,
      year,
      isComplete,
    };
    books.push(newBook);
  }

  saveBooks();
  this.reset();
  renderBooks();
});

// update label tombol submit kalau checkbox berubah
document.getElementById("bookFormIsComplete").addEventListener("change", function () {
  if (!editingBookId) {
    const isComplete = this.checked;
    document.getElementById("bookFormSubmit").innerHTML = "Masukkan Buku ke rak <span>" + (isComplete ? "Selesai dibaca" : "Belum selesai dibaca") + "</span>";
  }
});

// pencarian buku
document.getElementById("searchBook").addEventListener("submit", function (e) {
  e.preventDefault();
  const keyword = document.getElementById("searchBookTitle").value.toLowerCase();

  if (keyword === "") {
    renderBooks();
  } else {
    const filtered = books.filter((book) => book.title.toLowerCase().includes(keyword));

    if (filtered.length === 0) {
      alert("Buku tidak ditemukan");
      renderBooks(); // tampilkan semua lagi
    } else {
      renderBooks(filtered);
    }
  }
});

// render awal
document.addEventListener("DOMContentLoaded", () => renderBooks());
