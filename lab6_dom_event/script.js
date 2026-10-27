// --- Latihan 1: Mengubah teks dengan DOM ---
const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");

judul.textContent = "Belajar JavaScript DOM";
pesan.textContent = "Konten berhasil diubah oleh JavaScript.";

// --- Latihan 2: Event click ---
const tombolAksi = document.getElementById("tombolAksi");

tombolAksi.addEventListener("click", function () {
  pesan.textContent = "Tombol diklik pada " + new Date().toLocaleTimeString();
});

// --- Latihan 3: Mengubah kelas dan gaya CSS ---
const tombolGaya = document.getElementById("tombolGaya");
const teksGaya = document.getElementById("teksGaya");

tombolGaya.addEventListener("click", function () {
  teksGaya.classList.toggle("highlight");
  teksGaya.classList.toggle("teks-besar");
});

// --- Latihan 4: Event input dan penghitung karakter ---
const namaInput = document.getElementById("namaInput");
const jumlahKarakter = document.getElementById("jumlahKarakter");

namaInput.addEventListener("input", function () {
  jumlahKarakter.textContent = namaInput.value.length;
});

// --- Latihan 5: Validasi form pendaftaran ---
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
  } else if (
    usiaInputVal === "" ||
    !Number.isInteger(usia) ||
    usia < 17 ||
    usia > 100
  ) {
    pesanForm.textContent = "Usia harus berupa bilangan bulat 17-100.";
  } else {
    pesanForm.textContent = "Validasi berhasil. Form siap diproses.";
    formPendaftaran.reset();
  }
});

// --- Latihan 6: Daftar tugas sederhana (To-do List) ---
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
    selesai.textContent = item.classList.contains("selesai")
      ? "Batalkan selesai"
      : "Tandai selesai";
  });

  item.append(label, selesai);
  daftarTugas.appendChild(item);

  inputTugas.value = "";
  pesanTugas.textContent = "Tugas ditambahkan.";
  inputTugas.focus();
});
