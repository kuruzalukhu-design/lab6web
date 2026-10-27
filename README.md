Laporan Praktikum Pemrograman Web - Pertemuan 7
Praktikum 6: JavaScript DOM dan Event Handling
Mata Kuliah: Pemrograman Web
Pertemuan: 7
Nama Repository: Lab6Web
Program Studi: Teknik Informatika (OBE)

A. Tujuan Praktikum
Memahami DOM (Document Object Model) sebagai representasi dokumen HTML yang dapat diakses melalui JavaScript.
Menggunakan id, class, dan selector CSS untuk memilih elemen HTML.
Mengubah teks, atribut, kelas CSS, dan gaya elemen melalui JavaScript.
Menangani event pengguna menggunakan addEventListener().
Membuat validasi form dan menampilkan pesan sesuai kondisi input.
Mengembangkan halaman interaktif dengan minimal tiga fungsi yang berjalan benar.

B. Struktur File
Lab6Web/
├── index.html       # Berkas utama berisi struktur HTML (Latihan 1-6 & Mini Project)
├── style.css        # Berkas tata letak dan gaya tampilan
├── script.js        # Berkas logika JavaScript DOM dan Event Handling
└── README.md        # Laporan praktikum dan petunjuk penggunaan

C. Cara Menjalankan Project
Clone atau unduh repository ini ke komputer lokal Anda:
git clone https://github.com/USERNAME/Lab6Web.git
Buka folder Lab6Web melalui editor kode seperti Visual Studio Code.
Jalankan berkas index.html dengan cara:
Klik dua kali pada berkas index.html untuk membukanya langsung di peramban (browser) web.
Atau gunakan ekstensi Live Server di VS Code untuk menjalankan server lokal.
Tekan F12 (atau klik kanan -> Inspect) lalu pilih tab Console pada peramban untuk melihat log atau melakukan debugging.

D. Langkah Kerja & Implementasi
1. Latihan 1: Mengubah Teks dengan DOM
Langkah Kerja: Memilih elemen <h1 id="judul"> dan <p id="pesan"> menggunakan document.getElementById(), lalu mengupdate teksnya dengan properti textContent.
Kode Utama:
const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");

judul.textContent = "Belajar JavaScript DOM";
pesan.textContent = "Konten berhasil diubah oleh JavaScript.";

2. Latihan 2: Event Click
Langkah Kerja: Menambahkan event listener click pada tombol tombolAksi untuk mengubah konten paragraf pesan menjadi waktu saat tindakan dilakukan.
Kode Utama:
const tombolAksi = document.getElementById("tombolAksi");

tombolAksi.addEventListener("click", function () {
  pesan.textContent = "Tombol diklik pada " + new Date().toLocaleTimeString();
});

3. Latihan 3: Mengubah Kelas dan Gaya CSS
Langkah Kerja: Menggunakan classList.toggle() untuk menambah dan menghapus kelas .highlight dan .teks-besar secara dinamis saat tombol diklik.
Kode Utama:
const tombolGaya = document.getElementById("tombolGaya");
const teksGaya = document.getElementById("teksGaya");

tombolGaya.addEventListener("click", function () {
  teksGaya.classList.toggle("highlight");
  teksGaya.classList.toggle("teks-besar");
});

4. Latihan 4: Event Input dan Penghitung Karakter
Langkah Kerja: Mendengarkan event input pada elemen <input id="namaInput"> untuk menghitung jumlah karakter secara langsung (real-time).
Kode Utama:
const namaInput = document.getElementById("namaInput");
const jumlahKarakter = document.getElementById("jumlahKarakter");

namaInput.addEventListener("input", function () {
  jumlahKarakter.textContent = namaInput.value.length;
});

5. Latihan 5: Validasi Form Pendaftaran
Langkah Kerja: Mencegah pengiriman formulir bawaan dengan event.preventDefault(). Melakukan validasi input nama (wajib diisi), email (pola regex valid), dan usia (bilangan bulat 17-100).
Kode Utama:
const formPendaftaran = document.getElementById("formPendaftaran");
const pesanForm = document.getElementById("pesanForm");

formPendaftaran.addEventListener("submit", function (event) {
  event.preventDefault();

  const namaVal = document.getElementById("nama").value.trim();
  const emailVal = document.getElementById("email").value.trim();
  const usiaInputVal = document.getElementById("usia").value;
  const usia = Number(usiaInputVal);
  const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (namaVal === "") {
    pesanForm.textContent = "Nama wajib diisi.";
  } else if (!polaEmail.test(emailVal)) {
    pesanForm.textContent = "Masukkan email yang valid.";
  } else if (usiaInputVal === "" || !Number.isInteger(usia) || usia < 17 || usia > 100) {
    pesanForm.textContent = "Usia harus berupa bilangan bulat 17-100.";
  } else {
    pesanForm.textContent = "Validasi berhasil. Form siap diproses.";
    formPendaftaran.reset();
  }
});

6. Latihan 6: Daftar Tugas Sederhana (To-Do List)
Langkah Kerja: Membuat elemen <li>, <span>, dan <button> secara dinamis dengan document.createElement(), menambahkan fitur pencoretan tugas selesai, serta menghapus/mereset input penambahan tugas.
Kode Utama:
const inputTugas = document.getElementById("inputTugas");
const tambahTugas = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");
const pesanTugas = document.getElementById("pesanTugas");

tambahTugas.addEventListener("click", function () {
  const teks = inputTugas.value.trim();
  if (teks === "") {
    pesanTugas.textContent = "Tulis tugas terlebih dahulu.";
    return;
  }

  const item = document.createElement("li");
  const label = document.createElement("span");
  const selesai = document.createElement("button");

  label.textContent = teks + " ";
  selesai.type = "button";
  selesai.textContent = "Tandai selesai";

  selesai.addEventListener("click", function () {
    item.classList.toggle("selesai");
    selesai.textContent = item.classList.contains("selesai") ? "Batalkan selesai" : "Tandai selesai";
  });

  item.append(label, selesai);
  daftarTugas.appendChild(item);

  inputTugas.value = "";
  pesanTugas.textContent = "Tugas ditambahkan.";
  inputTugas.focus();
});

E. Screenshot Hasil Praktikum
Catatan: Lampirkan gambar screenshot pengujian Anda di dalam folder repository lalu perbarui tautan gambar di bawah ini.
1. Latihan 1 & 2 (Ubah Teks & Event Click)

2. Latihan 3 (Ubah Kelas & Gaya CSS)

3. Latihan 4 (Penghitung Karakter)

4. Latihan 5 (Validasi Form Pendaftaran)
Kondisi Form Kosong (Error): 
Kondisi Email Tidak Valid (Error): 
Kondisi Usia Tidak Sesuai (Error): 
Kondisi Form Valid (Sukses): 
5. Latihan 6 (To-Do List)


F. Jawaban Pertanyaan Evaluasi
Apa yang dimaksud dengan DOM dan apa manfaatnya?
DOM (Document Object Model) adalah representasi struktur dokumen HTML dalam bentuk objek yang dapat diakses dan dimanipulasi oleh JavaScript.
Manfaatnya: Memungkinkan program untuk memilih elemen, mengubah konten/teks, menambah/menghapus kelas CSS, serta merespons interaksi pengguna secara dinamis tanpa perlu memuat ulang (reload) halaman.
Apa perbedaan getElementById(), querySelector(), dan querySelectorAll()?
getElementById(): Memilih satu elemen spesifik berdasarkan atribut id.
querySelector(): Memilih elemen pertama yang cocok dengan selector CSS tertentu.
querySelectorAll(): Memilih seluruh elemen yang cocok dengan selector CSS tertentu dan mengembalikannya sebagai NodeList.
Apa fungsi addEventListener() dan sebutkan tiga contoh event?
Fungsi: Menghubungkan suatu kejadian (event) pada elemen HTML dengan fungsi penangan (handler) yang akan dijalankan saat kejadian tersebut terjadi.
Contoh Event: click, input (atau change), dan submit.
Mengapa event.preventDefault() digunakan pada event submit form?
Untuk mencegah perilaku bawaan browser yang akan memuat ulang (reload) halaman saat formulir dikirimkan, sehingga validasi JavaScript dapat diproses terlebih dahulu secara penuh.
Apa perbedaan textContent dan innerHTML dari sisi penggunaan dan keamanan?
Penggunaan: textContent digunakan untuk menangani teks biasa, sedangkan innerHTML dapat memproses markup/tag HTML.
Keamanan: textContent jauh lebih aman karena memperlakukan semua input sebagai teks murni. innerHTML berisiko tinggi terhadap serangan XSS (Cross-Site Scripting) jika digunakan untuk menampilkan input pengguna tanpa pembersihan data.
Bagaimana classList.toggle() membantu mengubah tampilan elemen?
classList.toggle() bekerja seperti tombol saklar (switch): jika kelas CSS belum ada pada elemen maka kelas tersebut akan ditambahkan, dan jika kelas sudah ada maka akan dihapus secara otomatis.
Sebutkan minimal tiga skenario pengujian validasi form.
Skenario Form Kosong: Menguji pesan peringatan ketika tombol submit ditekan tanpa mengisi input.
Skenario Format Email Salah: Menguji pesan kesalahan saat email diisi tanpa format @ atau domain yang valid.
Skenario Usia Di Luar Batas: Menguji pesan peringatan saat input usia diisi di bawah 17 tahun atau di atas 100 tahun.

G. Langkah Commit dan Pengumpulan Repository
# 1. Inisialisasi Git (jika belum)
git init

# 2. Tambahkan berkas ke staging area
git add .

# 3. Commit perubahan
git commit -m "Submit Laporan dan Tugas Praktikum 6 DOM & Event Handling"

# 4. Hubungkan ke repository GitHub
git remote add origin https://github.com/USERNAME/Lab6Web.git

# 5. Push ke repository utama
git push -u origin main

