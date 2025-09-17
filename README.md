# 📚 Bookshelf App

Bookshelf App adalah aplikasi sederhana berbasis web untuk mengelola koleksi buku.  
Pengguna dapat menambahkan buku, memindahkan antar rak, mengedit, menghapus, dan mencari buku.  
Data buku tersimpan menggunakan **localStorage**, sehingga tidak hilang ketika halaman direfresh.

---

## ✨ Fitur Utama

- **Tambah Buku Baru**  
  Isi form dengan judul, penulis, tahun, dan status selesai/ belum selesai dibaca.  

- **Dua Rak Buku**  
  - 📖 **Belum selesai dibaca**  
  - ✅ **Selesai dibaca**

- **Pindah Buku Antar Rak**  
  Dengan sekali klik, buku bisa dipindahkan antar rak.

- **Edit Buku**  
  Ubah detail buku yang sudah ada. Tombol submit otomatis berubah menjadi **Update Buku** ketika dalam mode edit.

- **Hapus Buku**  
  Hapus buku dengan konfirmasi agar tidak salah hapus.

- **Cari Buku**  
  Cari buku berdasarkan judul.  
  Jika buku tidak ditemukan → muncul **alert**.

- **Penyimpanan Data**  
  Semua data buku tersimpan di **localStorage** sehingga tetap ada setelah refresh.

---

## 🛠️ Teknologi yang Digunakan

- **HTML5** → struktur aplikasi  
- **CSS3** → styling tampilan (clean & responsive)  
- **JavaScript (Vanilla)** → logika aplikasi + localStorage  

---

## 📂 Struktur Proyek

```
bookshelf-app/
│
├── index.html        # Halaman utama aplikasi
├── style.css         # Styling aplikasi
├── main.js           # Logika aplikasi (CRUD + localStorage)
└── README.md         # Dokumentasi proyek
```

---

## 📝 Catatan

- Atribut `data-testid` pada elemen HTML **tidak boleh dihapus** karena digunakan untuk kebutuhan testing.  
- Aplikasi ini dibuat sebagai tugas akhir kelas **Belajar Membuat Front-End Web untuk Pemula (Dicoding Indonesia)**.

---

## 👤 Pengembang

- **Dwiky Juniardi**
- **Asah led by Dicoding**

---

## 📄 Lisensi

Proyek ini dibuat untuk tujuan pembelajaran. Silakan gunakan dan kembangkan lebih lanjut sesuai kebutuhan.
