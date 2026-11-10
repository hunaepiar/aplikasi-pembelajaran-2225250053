import { useState } from "react";
import "./App.css";

function App() {
  const [halaman, setHalaman] = useState("Beranda");
  const [levelKuis, setLevelKuis] = useState(1);
  const [jawabanKuis, setJawabanKuis] = useState({});
  const [kuisDiperiksa, setKuisDiperiksa] = useState(false);
  const [pembahasanTerbuka, setPembahasanTerbuka] = useState([]);
  const [levelLatihan, setLevelLatihan] = useState(1);
  const [jawabanLatihan, setJawabanLatihan] = useState({});
  const [hasilLatihan, setHasilLatihan] = useState({});
  const [pembahasanLatihan, setPembahasanLatihan] = useState([]);
  const [fotoProfil, setFotoProfil] = useState("");
  const [namaSiswa, setNamaSiswa] = useState("");
const [genderSiswa, setGenderSiswa] = useState("");
const [sekolahSiswa, setSekolahSiswa] = useState("");
const [kelasSiswa, setKelasSiswa] = useState("");
const [daerahSiswa, setDaerahSiswa] = useState("");

  const menu = [
    { nama: "Beranda", ikon: "🏠" },
    { nama: "Materi", ikon: "📚" },
    { nama: "Contoh Soal", ikon: "📝" },
    { nama: "Kuis", ikon: "🎯" },
    { nama: "Latihan", ikon: "✏️" },
    { nama: "Profil", ikon: "👤" },
  ];

  const contohSoal = [
    {
      nomor: 1,
      kategori: "Perhitungan Dasar",
      tingkat: "Mudah",
      soal: "Ani menerima gaji sebesar Rp2.500.000,00. Jika persentase pajak yang dikenakan adalah 2,5%, berapakah besar pajak dan gaji bersih Ani?",
      diketahui: ["Gaji = Rp2.500.000,00", "Pajak = 2,5%"],
      ditanya: "Besar pajak dan gaji bersih Ani.",
      langkah: [
        "Ubah persentase menjadi desimal: 2,5% = 2,5 ÷ 100 = 0,025.",
        "Hitung pajak = 0,025 × Rp2.500.000,00 = Rp62.500,00.",
        "Gaji bersih = Rp2.500.000,00 − Rp62.500,00 = Rp2.437.500,00."
      ],
      jawaban: "Pajak = Rp62.500,00 dan gaji bersih = Rp2.437.500,00."
    },
    {
      nomor: 2,
      kategori: "Perhitungan Dasar",
      tingkat: "Mudah",
      soal: "Sebuah barang memiliki harga Rp800.000,00. Dalam soal ini, barang tersebut dikenakan pajak sebesar 5% dari harga barang. Berapakah pajaknya?",
      diketahui: ["Harga barang = Rp800.000,00", "Pajak = 5%"],
      ditanya: "Besar pajak.",
      langkah: [
        "Ubah 5% menjadi desimal: 5 ÷ 100 = 0,05.",
        "Pajak = 0,05 × Rp800.000,00.",
        "Pajak = Rp40.000,00."
      ],
      jawaban: "Besar pajak adalah Rp40.000,00."
    },
    {
      nomor: 3,
      kategori: "Perhitungan Dasar",
      tingkat: "Mudah",
      soal: "Harga sebuah barang adalah Rp1.200.000,00. Jika dikenakan pajak sebesar 10%, tentukan besar pajak dan harga setelah ditambah pajak.",
      diketahui: ["Harga barang = Rp1.200.000,00", "Pajak = 10%"],
      ditanya: "Besar pajak dan harga akhir.",
      langkah: [
        "10% = 10 ÷ 100 = 0,1.",
        "Pajak = 0,1 × Rp1.200.000,00 = Rp120.000,00.",
        "Harga akhir = Rp1.200.000,00 + Rp120.000,00 = Rp1.320.000,00."
      ],
      jawaban: "Pajak = Rp120.000,00 dan harga akhir = Rp1.320.000,00."
    },
    {
      nomor: 4,
      kategori: "Perhitungan Dasar",
      tingkat: "Sedang",
      soal: "Sebuah barang berharga Rp400.000,00 mendapat diskon 10%. Setelah diskon, barang dikenakan pajak sebesar 2,5%. Berapakah harga yang harus dibayar?",
      diketahui: ["Harga awal = Rp400.000,00", "Diskon = 10%", "Pajak = 2,5%"],
      ditanya: "Harga akhir setelah diskon dan pajak.",
      langkah: [
        "Diskon = 10% × Rp400.000,00 = Rp40.000,00.",
        "Harga setelah diskon = Rp400.000,00 − Rp40.000,00 = Rp360.000,00.",
        "Pajak = 2,5% × Rp360.000,00 = 0,025 × Rp360.000,00 = Rp9.000,00.",
        "Harga akhir = Rp360.000,00 + Rp9.000,00 = Rp369.000,00."
      ],
      jawaban: "Harga yang harus dibayar adalah Rp369.000,00."
    },
    {
      nomor: 5,
      kategori: "Perhitungan Dasar",
      tingkat: "Sedang",
      soal: "Seseorang memperoleh penghasilan sebesar Rp1.500.000,00. Jika penghasilan tersebut dikenakan pajak sebesar 4%, berapakah penghasilan setelah dipotong pajak?",
      diketahui: ["Penghasilan = Rp1.500.000,00", "Pajak = 4%"],
      ditanya: "Penghasilan bersih.",
      langkah: [
        "4% = 4 ÷ 100 = 0,04.",
        "Pajak = 0,04 × Rp1.500.000,00 = Rp60.000,00.",
        "Penghasilan bersih = Rp1.500.000,00 − Rp60.000,00 = Rp1.440.000,00."
      ],
      jawaban: "Penghasilan bersih adalah Rp1.440.000,00."
    },
    {
      nomor: 6,
      kategori: "Kehidupan Sehari-hari",
      tingkat: "Mudah",
      soal: "Rina membeli sepasang sepatu di sebuah toko dengan harga Rp250.000,00. Pada struk pembelian tercantum pajak sebesar 4% dari harga sepatu. Berapa pajak yang harus dibayar dan berapa total belanja Rina?",
      diketahui: ["Harga sepatu = Rp250.000,00", "Pajak = 4%"],
      ditanya: "Besar pajak dan total belanja.",
      langkah: [
        "4% = 4 ÷ 100 = 0,04.",
        "Pajak = 0,04 × Rp250.000,00 = Rp10.000,00.",
        "Total belanja = Rp250.000,00 + Rp10.000,00 = Rp260.000,00."
      ],
      jawaban: "Pajak = Rp10.000,00 dan total belanja = Rp260.000,00."
    },
    {
      nomor: 7,
      kategori: "Kehidupan Sehari-hari",
      tingkat: "Mudah",
      soal: "Ayah bekerja di sebuah perusahaan dan menerima gaji bulanan sebesar Rp3.200.000,00. Untuk latihan ini, anggap pajak penghasilannya sebesar 2,5%. Berapa uang yang diterima Ayah setelah dipotong pajak?",
      diketahui: ["Gaji = Rp3.200.000,00", "Pajak = 2,5%"],
      ditanya: "Gaji setelah dipotong pajak.",
      langkah: [
        "2,5% = 0,025.",
        "Pajak = 0,025 × Rp3.200.000,00 = Rp80.000,00.",
        "Gaji bersih = Rp3.200.000,00 − Rp80.000,00 = Rp3.120.000,00."
      ],
      jawaban: "Gaji bersih Ayah adalah Rp3.120.000,00."
    },
    {
      nomor: 8,
      kategori: "Belanja dan Diskon",
      tingkat: "Sedang",
      soal: "Doni membeli sebuah laptop seharga Rp5.500.000,00. Toko memberikan diskon 10%. Setelah diskon, harga laptop dikenakan pajak sebesar 2%. Berapa total uang yang harus disiapkan Doni?",
      diketahui: ["Harga laptop = Rp5.500.000,00", "Diskon = 10%", "Pajak = 2%"],
      ditanya: "Total harga setelah diskon dan pajak.",
      langkah: [
        "Diskon = 10% × Rp5.500.000,00 = Rp550.000,00.",
        "Harga setelah diskon = Rp5.500.000,00 − Rp550.000,00 = Rp4.950.000,00.",
        "Pajak = 2% × Rp4.950.000,00 = Rp99.000,00.",
        "Total = Rp4.950.000,00 + Rp99.000,00 = Rp5.049.000,00."
      ],
      jawaban: "Doni harus membayar Rp5.049.000,00."
    },
    {
      nomor: 9,
      kategori: "Belanja dan Pajak",
      tingkat: "Sedang",
      soal: "Salsa membeli beberapa buku pelajaran dengan total harga Rp180.000,00. Jika dalam soal ini dikenakan pajak sebesar 5%, berapakah jumlah uang yang harus dibayar Salsa?",
      diketahui: ["Harga buku = Rp180.000,00", "Pajak = 5%"],
      ditanya: "Total pembayaran.",
      langkah: [
        "5% = 0,05.",
        "Pajak = 0,05 × Rp180.000,00 = Rp9.000,00.",
        "Total pembayaran = Rp180.000,00 + Rp9.000,00 = Rp189.000,00."
      ],
      jawaban: "Salsa harus membayar Rp189.000,00."
    },
    {
      nomor: 10,
      kategori: "Belanja dan Pajak",
      tingkat: "Sedang",
      soal: "Ibu berbelanja kebutuhan rumah tangga dengan total harga Rp640.000,00. Dalam perhitungan latihan ini, dikenakan pajak sebesar 2,5%. Berapa besar pajak dan total pembayaran Ibu?",
      diketahui: ["Total belanja = Rp640.000,00", "Pajak = 2,5%"],
      ditanya: "Pajak dan total pembayaran.",
      langkah: [
        "2,5% = 0,025.",
        "Pajak = 0,025 × Rp640.000,00 = Rp16.000,00.",
        "Total pembayaran = Rp640.000,00 + Rp16.000,00 = Rp656.000,00."
      ],
      jawaban: "Pajak = Rp16.000,00 dan total pembayaran = Rp656.000,00."
    },
    {
      nomor: 11,
      kategori: "Usaha dan Perdagangan",
      tingkat: "Sedang",
      soal: "Seorang pemilik toko roti menerima pesanan 12 kotak roti. Harga setiap kotak adalah Rp35.000,00. Pesanan tersebut dikenakan pajak sebesar 5% dari seluruh harga roti. Berapa total pembayaran pelanggan?",
      diketahui: ["Jumlah kotak = 12", "Harga per kotak = Rp35.000,00", "Pajak = 5%"],
      ditanya: "Total pembayaran pelanggan.",
      langkah: [
        "Harga seluruh roti = 12 × Rp35.000,00 = Rp420.000,00.",
        "Pajak = 5% × Rp420.000,00 = 0,05 × Rp420.000,00 = Rp21.000,00.",
        "Total pembayaran = Rp420.000,00 + Rp21.000,00 = Rp441.000,00."
      ],
      jawaban: "Total pembayaran pelanggan adalah Rp441.000,00."
    },
    {
      nomor: 12,
      kategori: "Belanja dan Diskon",
      tingkat: "Sedang",
      soal: "Toko elektronik memberikan diskon 15% untuk sebuah telepon genggam seharga Rp2.400.000,00. Setelah diskon, harga tersebut dikenakan pajak sebesar 2,5%. Hitunglah total harga yang harus dibayar pembeli.",
      diketahui: ["Harga awal = Rp2.400.000,00", "Diskon = 15%", "Pajak = 2,5%"],
      ditanya: "Total harga setelah diskon dan pajak.",
      langkah: [
        "Diskon = 15% × Rp2.400.000,00 = Rp360.000,00.",
        "Harga setelah diskon = Rp2.400.000,00 − Rp360.000,00 = Rp2.040.000,00.",
        "Pajak = 2,5% × Rp2.040.000,00 = Rp51.000,00.",
        "Total harga = Rp2.040.000,00 + Rp51.000,00 = Rp2.091.000,00."
      ],
      jawaban: "Total harga yang dibayar adalah Rp2.091.000,00."
    },
    {
      nomor: 13,
      kategori: "Penghasilan",
      tingkat: "Sulit",
      soal: "Seorang pegawai memperoleh penghasilan selama satu tahun sebesar Rp48.000.000,00. Untuk latihan ini, diasumsikan pajak sebesar 5% dari seluruh penghasilan tersebut. Berapa pajak yang harus dibayar dan berapa sisa penghasilannya setelah dipotong pajak?",
      diketahui: ["Penghasilan setahun = Rp48.000.000,00", "Pajak = 5%"],
      ditanya: "Pajak dan penghasilan setelah dipotong pajak.",
      langkah: [
        "5% = 0,05.",
        "Pajak = 0,05 × Rp48.000.000,00 = Rp2.400.000,00.",
        "Sisa penghasilan = Rp48.000.000,00 − Rp2.400.000,00 = Rp45.600.000,00."
      ],
      jawaban: "Pajak = Rp2.400.000,00 dan sisa penghasilan = Rp45.600.000,00."
    },
    {
      nomor: 14,
      kategori: "Belanja dan Perdagangan",
      tingkat: "Sulit",
      soal: "Pak Budi membeli tiga barang di sebuah toko. Harga barang pertama Rp125.000,00, barang kedua Rp85.000,00, dan barang ketiga Rp90.000,00. Seluruh pembelian dikenakan pajak sebesar 4%. Berapa total yang harus dibayar Pak Budi?",
      diketahui: ["Barang pertama = Rp125.000,00", "Barang kedua = Rp85.000,00", "Barang ketiga = Rp90.000,00", "Pajak = 4%"],
      ditanya: "Total pembayaran.",
      langkah: [
        "Jumlah harga barang = Rp125.000,00 + Rp85.000,00 + Rp90.000,00 = Rp300.000,00.",
        "Pajak = 4% × Rp300.000,00 = Rp12.000,00.",
        "Total pembayaran = Rp300.000,00 + Rp12.000,00 = Rp312.000,00."
      ],
      jawaban: "Pak Budi harus membayar Rp312.000,00."
    },
    {
      nomor: 15,
      kategori: "Belanja dan Diskon",
      tingkat: "Sulit",
      soal: "Sebuah jaket memiliki harga awal Rp480.000,00. Saat promosi, toko memberikan diskon 25%. Setelah diskon, harga jaket dikenakan pajak sebesar 5%. Berapakah harga akhir jaket?",
      diketahui: ["Harga awal = Rp480.000,00", "Diskon = 25%", "Pajak = 5%"],
      ditanya: "Harga akhir jaket.",
      langkah: [
        "Diskon = 25% × Rp480.000,00 = Rp120.000,00.",
        "Harga setelah diskon = Rp480.000,00 − Rp120.000,00 = Rp360.000,00.",
        "Pajak = 5% × Rp360.000,00 = Rp18.000,00.",
        "Harga akhir = Rp360.000,00 + Rp18.000,00 = Rp378.000,00."
      ],
      jawaban: "Harga akhir jaket adalah Rp378.000,00."
    },
    {
      nomor: 16,
      kategori: "Transportasi",
      tingkat: "Sulit",
      soal: "Sebuah keluarga membeli 4 tiket perjalanan. Harga satu tiket adalah Rp75.000,00. Seluruh tiket dikenakan pajak sebesar 2%. Berapa jumlah pembayaran untuk keempat tiket tersebut?",
      diketahui: ["Jumlah tiket = 4", "Harga satu tiket = Rp75.000,00", "Pajak = 2%"],
      ditanya: "Jumlah pembayaran seluruh tiket.",
      langkah: [
        "Harga empat tiket = 4 × Rp75.000,00 = Rp300.000,00.",
        "Pajak = 2% × Rp300.000,00 = Rp6.000,00.",
        "Total pembayaran = Rp300.000,00 + Rp6.000,00 = Rp306.000,00."
      ],
      jawaban: "Jumlah pembayaran adalah Rp306.000,00."
    },
    {
      nomor: 17,
      kategori: "Kebutuhan Sekolah",
      tingkat: "Sulit",
      soal: "Sebuah toko alat tulis menerima pesanan 5 paket perlengkapan sekolah. Harga setiap paket adalah Rp42.000,00. Pesanan tersebut dikenakan pajak sebesar 3%. Berapa total harga yang harus dibayar?",
      diketahui: ["Jumlah paket = 5", "Harga satu paket = Rp42.000,00", "Pajak = 3%"],
      ditanya: "Total harga pesanan.",
      langkah: [
        "Harga seluruh paket = 5 × Rp42.000,00 = Rp210.000,00.",
        "Pajak = 3% × Rp210.000,00 = Rp6.300,00.",
        "Total harga = Rp210.000,00 + Rp6.300,00 = Rp216.300,00."
      ],
      jawaban: "Total harga pesanan adalah Rp216.300,00."
    },
    {
      nomor: 18,
      kategori: "Penghasilan",
      tingkat: "Sulit",
      soal: "Seorang pekerja memperoleh penghasilan Rp4.800.000,00 setiap bulan. Dalam soal ini, pajak diasumsikan sebesar 2,5% dari penghasilan bulanan. Hitunglah pajak selama satu bulan dan jumlah penghasilan bersih selama 3 bulan jika gaji dan persentase pajak tetap.",
      diketahui: ["Gaji per bulan = Rp4.800.000,00", "Pajak = 2,5%", "Waktu = 3 bulan"],
      ditanya: "Pajak sebulan dan penghasilan bersih selama 3 bulan.",
      langkah: [
        "Pajak sebulan = 2,5% × Rp4.800.000,00 = Rp120.000,00.",
        "Gaji bersih sebulan = Rp4.800.000,00 − Rp120.000,00 = Rp4.680.000,00.",
        "Penghasilan bersih 3 bulan = 3 × Rp4.680.000,00 = Rp14.040.000,00."
      ],
      jawaban: "Pajak sebulan = Rp120.000,00 dan penghasilan bersih 3 bulan = Rp14.040.000,00."
    },
    {
      nomor: 19,
      kategori: "Belanja dan Diskon",
      tingkat: "Sulit",
      soal: "Sebuah toko furnitur menjual meja seharga Rp2.800.000,00. Pembeli mendapat diskon 12,5%. Setelah diskon, harga meja dikenakan pajak sebesar 4%. Hitunglah besar diskon, besar pajak, dan harga akhir meja.",
      diketahui: ["Harga meja = Rp2.800.000,00", "Diskon = 12,5%", "Pajak = 4%"],
      ditanya: "Diskon, pajak, dan harga akhir.",
      langkah: [
        "Diskon = 12,5% × Rp2.800.000,00 = Rp350.000,00.",
        "Harga setelah diskon = Rp2.800.000,00 − Rp350.000,00 = Rp2.450.000,00.",
        "Pajak = 4% × Rp2.450.000,00 = Rp98.000,00.",
        "Harga akhir = Rp2.450.000,00 + Rp98.000,00 = Rp2.548.000,00."
      ],
      jawaban: "Diskon = Rp350.000,00, pajak = Rp98.000,00, dan harga akhir = Rp2.548.000,00."
    },
    {
      nomor: 20,
      kategori: "Belanja dan Perhitungan Gabungan",
      tingkat: "Sulit",
      soal: "Dina membeli perlengkapan rumah tangga dengan total harga sebelum pajak Rp3.600.000,00. Dalam soal ini, pajak ditetapkan sebesar 5%. Dina membayar menggunakan uang Rp4.000.000,00. Berapakah pajak, total belanja setelah pajak, dan uang kembalian Dina?",
      diketahui: ["Harga belanja = Rp3.600.000,00", "Pajak = 5%", "Uang dibayarkan = Rp4.000.000,00"],
      ditanya: "Pajak, total belanja, dan uang kembalian.",
      langkah: [
        "Pajak = 5% × Rp3.600.000,00 = Rp180.000,00.",
        "Total belanja = Rp3.600.000,00 + Rp180.000,00 = Rp3.780.000,00.",
        "Uang kembalian = Rp4.000.000,00 − Rp3.780.000,00 = Rp220.000,00."
      ],
      jawaban: "Pajak = Rp180.000,00, total belanja = Rp3.780.000,00, dan kembalian = Rp220.000,00."
    }
  ];
  const bankKuis = {
  1: [
    {
      soal: "Rina membeli tas seharga Rp200.000,00. Dalam soal ini, tas dikenakan pajak sebesar 5%. Berapakah besar pajaknya?",
      pilihan: ["Rp5.000,00", "Rp10.000,00", "Rp15.000,00", "Rp20.000,00"],
      benar: 1,
      bahas: "Pajak = 5% × Rp200.000,00 = 0,05 × Rp200.000,00 = Rp10.000,00."
    },
    {
      soal: "Ayah memperoleh gaji Rp3.000.000,00. Jika pajak dalam soal ini sebesar 2%, berapakah besar pajaknya?",
      pilihan: ["Rp30.000,00", "Rp50.000,00", "Rp60.000,00", "Rp90.000,00"],
      benar: 2,
      bahas: "Pajak = 2% × Rp3.000.000,00 = 0,02 × Rp3.000.000,00 = Rp60.000,00."
    },
    {
      soal: "Sebuah barang berharga Rp500.000,00 dikenakan pajak 4%. Berapakah harga barang setelah ditambah pajak?",
      pilihan: ["Rp504.000,00", "Rp510.000,00", "Rp520.000,00", "Rp540.000,00"],
      benar: 2,
      bahas: "Pajak = 4% × Rp500.000,00 = Rp20.000,00. Harga akhir = Rp500.000,00 + Rp20.000,00 = Rp520.000,00."
    },
    {
      soal: "Bentuk desimal dari 5% adalah ...",
      pilihan: ["0,5", "0,05", "0,005", "5,0"],
      benar: 1,
      bahas: "Persentase diubah menjadi desimal dengan membagi 100. Jadi, 5% = 5 ÷ 100 = 0,05."
    },
    {
      soal: "Sebuah barang seharga Rp400.000,00 mendapat diskon 10%. Berapakah besar diskonnya?",
      pilihan: ["Rp20.000,00", "Rp30.000,00", "Rp40.000,00", "Rp50.000,00"],
      benar: 2,
      bahas: "Diskon = 10% × Rp400.000,00 = 0,1 × Rp400.000,00 = Rp40.000,00."
    },
    {
      soal: "Harga sebuah barang adalah Rp800.000,00. Barang tersebut dikenakan pajak 5%. Berapakah jumlah pajaknya?",
      pilihan: ["Rp20.000,00", "Rp30.000,00", "Rp40.000,00", "Rp50.000,00"],
      benar: 2,
      bahas: "Pajak = 5% × Rp800.000,00 = 0,05 × Rp800.000,00 = Rp40.000,00."
    },
    {
      soal: "Gaji seorang pegawai Rp2.000.000,00. Setelah dipotong pajak Rp50.000,00, berapakah gaji bersihnya?",
      pilihan: ["Rp1.900.000,00", "Rp1.950.000,00", "Rp2.050.000,00", "Rp2.100.000,00"],
      benar: 1,
      bahas: "Gaji bersih = gaji awal − pajak = Rp2.000.000,00 − Rp50.000,00 = Rp1.950.000,00."
    },
    {
      soal: "Harga sebuah barang Rp600.000,00. Jika pajaknya 10%, berapakah harga setelah pajak?",
      pilihan: ["Rp610.000,00", "Rp630.000,00", "Rp660.000,00", "Rp700.000,00"],
      benar: 2,
      bahas: "Pajak = 10% × Rp600.000,00 = Rp60.000,00. Harga akhir = Rp600.000,00 + Rp60.000,00 = Rp660.000,00."
    },
    {
      soal: "Sebuah barang berharga Rp300.000,00 mendapat diskon 20%. Berapakah harga setelah diskon?",
      pilihan: ["Rp220.000,00", "Rp230.000,00", "Rp240.000,00", "Rp260.000,00"],
      benar: 2,
      bahas: "Diskon = 20% × Rp300.000,00 = Rp60.000,00. Harga setelah diskon = Rp300.000,00 − Rp60.000,00 = Rp240.000,00."
    },
    {
      soal: "Sebuah barang seharga Rp1.000.000,00 dikenakan pajak 3%. Berapakah total harga yang harus dibayar?",
      pilihan: ["Rp1.003.000,00", "Rp1.020.000,00", "Rp1.030.000,00", "Rp1.300.000,00"],
      benar: 2,
      bahas: "Pajak = 3% × Rp1.000.000,00 = Rp30.000,00. Total = Rp1.000.000,00 + Rp30.000,00 = Rp1.030.000,00."
    }
  ]
};

const bankLatihan = {
  1: [
    {
      nomor: 1,
      tingkat: "Mudah",
      soal: "Dina membeli sebuah buku seharga Rp50.000,00. Dalam soal ini, buku tersebut dikenakan pajak sebesar 2%. Berapakah besar pajak yang harus dibayar Dina?",
      petunjuk: "Ubah persentase menjadi desimal, kemudian kalikan dengan harga buku.",
      jawaban: "1000",
      langkah: [
        "Diketahui: Harga buku = Rp50.000,00 dan pajak = 2%.",
        "Ubah 2% menjadi desimal: 2 ÷ 100 = 0,02.",
        "Pajak = 0,02 × Rp50.000,00.",
        "Pajak = Rp1.000,00."
      ]
    },
    {
      nomor: 2,
      tingkat: "Mudah",
      soal: "Rudi membeli sepatu dengan harga Rp200.000,00. Jika sepatu tersebut dikenakan pajak sebesar 5%, berapakah jumlah pajak yang harus dibayar Rudi?",
      petunjuk: "Gunakan rumus pajak = persentase pajak × harga barang.",
      jawaban: "10000",
      langkah: [
        "Diketahui: Harga sepatu = Rp200.000,00 dan pajak = 5%.",
        "Ubah 5% menjadi desimal: 5 ÷ 100 = 0,05.",
        "Pajak = 0,05 × Rp200.000,00.",
        "Pajak = Rp10.000,00."
      ]
    },
    {
      nomor: 3,
      tingkat: "Mudah",
      soal: "Ibu membeli peralatan dapur seharga Rp150.000,00. Dalam soal ini, pajak yang dikenakan adalah 4%. Hitunglah total uang yang harus dibayarkan Ibu setelah ditambah pajak.",
      petunjuk: "Hitung pajaknya terlebih dahulu, kemudian tambahkan ke harga awal.",
      jawaban: "156000",
      langkah: [
        "Diketahui: Harga barang = Rp150.000,00 dan pajak = 4%.",
        "Pajak = 4 ÷ 100 × Rp150.000,00.",
        "Pajak = Rp6.000,00.",
        "Total pembayaran = Rp150.000,00 + Rp6.000,00.",
        "Total pembayaran = Rp156.000,00."
      ]
    },
    {
      nomor: 4,
      tingkat: "Mudah",
      soal: "Andi mendapatkan uang sebesar Rp1.500.000,00. Dalam suatu perhitungan, uang tersebut dikenakan potongan pajak sebesar 2%. Berapakah uang yang diterima Andi setelah dipotong pajak?",
      petunjuk: "Hitung potongan pajak, kemudian kurangkan dari uang awal.",
      jawaban: "1470000",
      langkah: [
        "Diketahui: Uang awal = Rp1.500.000,00 dan pajak = 2%.",
        "Pajak = 0,02 × Rp1.500.000,00.",
        "Pajak = Rp30.000,00.",
        "Uang bersih = Rp1.500.000,00 − Rp30.000,00.",
        "Uang bersih = Rp1.470.000,00."
      ]
    },
    {
      nomor: 5,
      tingkat: "Mudah",
      soal: "Sebuah tas dijual dengan harga Rp250.000,00. Toko mengenakan pajak sebesar 10% dalam soal ini. Jika Siska membeli tas tersebut, berapakah total harga yang harus dibayarnya?",
      petunjuk: "Ingat bahwa total harga merupakan harga awal ditambah pajak.",
      jawaban: "275000",
      langkah: [
        "Diketahui: Harga tas = Rp250.000,00 dan pajak = 10%.",
        "Pajak = 0,10 × Rp250.000,00.",
        "Pajak = Rp25.000,00.",
        "Total harga = Rp250.000,00 + Rp25.000,00.",
        "Total harga = Rp275.000,00."
      ]
    },
    {
      nomor: 6,
      tingkat: "Mudah",
      soal: "Budi membeli alat tulis seharga Rp80.000,00. Ia harus membayar pajak sebesar 5%. Budi membayar menggunakan uang Rp100.000,00. Berapakah uang kembalian yang diterima Budi?",
      petunjuk: "Hitung pajak, total pembayaran, lalu kurangi dari uang Budi.",
      jawaban: "16000",
      langkah: [
        "Diketahui: Harga alat tulis = Rp80.000,00, pajak = 5%, uang Budi = Rp100.000,00.",
        "Pajak = 0,05 × Rp80.000,00 = Rp4.000,00.",
        "Total pembayaran = Rp80.000,00 + Rp4.000,00 = Rp84.000,00.",
        "Kembalian = Rp100.000,00 − Rp84.000,00.",
        "Kembalian = Rp16.000,00."
      ]
    },
    {
      nomor: 7,
      tingkat: "Mudah",
      soal: "Pak Dedi memperoleh penghasilan sebesar Rp2.500.000,00. Untuk latihan ini, diasumsikan terdapat potongan pajak sebesar 3% dari penghasilannya. Berapakah besar pajak dan penghasilan bersih Pak Dedi?",
      petunjuk: "Hitung 3% dari penghasilan, kemudian kurangkan hasilnya.",
      jawaban: "2425000",
      langkah: [
        "Diketahui: Penghasilan = Rp2.500.000,00 dan pajak = 3%.",
        "Pajak = 0,03 × Rp2.500.000,00.",
        "Pajak = Rp75.000,00.",
        "Penghasilan bersih = Rp2.500.000,00 − Rp75.000,00.",
        "Penghasilan bersih = Rp2.425.000,00."
      ]
    },
    {
      nomor: 8,
      tingkat: "Mudah",
      soal: "Sebuah keluarga membeli kebutuhan rumah tangga seharga Rp600.000,00. Dalam soal ini dikenakan pajak sebesar 5%. Berapakah total pembayaran setelah pajak?",
      petunjuk: "Hitung pajak terlebih dahulu, kemudian tambahkan ke harga awal.",
      jawaban: "630000",
      langkah: [
        "Diketahui: Harga belanja = Rp600.000,00 dan pajak = 5%.",
        "Pajak = 0,05 × Rp600.000,00 = Rp30.000,00.",
        "Total pembayaran = Rp600.000,00 + Rp30.000,00 = Rp630.000,00."
      ]
    }
  ],
    2: [
    {
      nomor: 1,
      tingkat: "Sedang",
      soal: "Sebuah jaket seharga Rp400.000,00 mendapat diskon 15%. Setelah diskon, dikenakan pajak 5%. Berapa total harga yang harus dibayar?",
      petunjuk: "Hitung harga setelah diskon, lalu tambahkan pajak.",
      jawaban: "357000",
      langkah: [
        "Diketahui: Harga awal = Rp400.000,00, diskon = 15%, pajak = 5%.",
        "Diskon = 15% × Rp400.000,00 = Rp60.000,00.",
        "Harga setelah diskon = Rp400.000,00 − Rp60.000,00 = Rp340.000,00.",
        "Pajak = 5% × Rp340.000,00 = Rp17.000,00.",
        "Total pembayaran = Rp340.000,00 + Rp17.000,00 = Rp357.000,00."
      ]
    },
    {
      nomor: 2,
      tingkat: "Sedang",
      soal: "Sebuah televisi berharga Rp2.500.000,00 dikenakan pajak 4%. Berapa harga televisi setelah pajak?",
      petunjuk: "Tambahkan pajak ke harga awal.",
      jawaban: "2600000",
      langkah: [
        "Pajak = 4% × Rp2.500.000,00 = Rp100.000,00.",
        "Harga akhir = Rp2.500.000,00 + Rp100.000,00.",
        "Jadi, harga akhir = Rp2.600.000,00."
      ]
    },
    {
      nomor: 3,
      tingkat: "Sedang",
      soal: "Pak Andi memperoleh gaji Rp4.000.000,00. Jika dipotong pajak 3%, berapa gaji bersihnya?",
      petunjuk: "Kurangi gaji awal dengan pajak.",
      jawaban: "3880000",
      langkah: [
        "Pajak = 3% × Rp4.000.000,00 = Rp120.000,00.",
        "Gaji bersih = Rp4.000.000,00 − Rp120.000,00.",
        "Jadi, gaji bersih = Rp3.880.000,00."
      ]
    },
    {
      nomor: 4,
      tingkat: "Sedang",
      soal: "Sebuah meja seharga Rp800.000,00 mendapat diskon 20%. Berapa harga meja setelah diskon?",
      petunjuk: "Hitung besar diskon, lalu kurangkan dari harga awal.",
      jawaban: "640000",
      langkah: [
        "Diskon = 20% × Rp800.000,00 = Rp160.000,00.",
        "Harga setelah diskon = Rp800.000,00 − Rp160.000,00.",
        "Jadi, harga meja = Rp640.000,00."
      ]
    },
    {
      nomor: 5,
      tingkat: "Sedang",
      soal: "Sebuah toko menjual 3 tas dengan harga masing-masing Rp150.000,00. Seluruh pembelian dikenakan pajak 4%. Berapa total pembayaran?",
      petunjuk: "Hitung harga seluruh tas terlebih dahulu.",
      jawaban: "468000",
      langkah: [
        "Harga seluruh tas = 3 × Rp150.000,00 = Rp450.000,00.",
        "Pajak = 4% × Rp450.000,00 = Rp18.000,00.",
        "Total pembayaran = Rp450.000,00 + Rp18.000,00.",
        "Jadi, total pembayaran = Rp468.000,00."
      ]
    },
    {
      nomor: 6,
      tingkat: "Sedang",
      soal: "Ibu memiliki uang Rp1.200.000,00. Uang tersebut digunakan untuk membeli barang seharga Rp950.000,00 yang dikenakan pajak 5%. Berapa sisa uang Ibu?",
      petunjuk: "Hitung total belanja setelah pajak, lalu kurangkan dari uang Ibu.",
      jawaban: "202500",
      langkah: [
        "Pajak = 5% × Rp950.000,00 = Rp47.500,00.",
        "Total belanja = Rp950.000,00 + Rp47.500,00 = Rp997.500,00.",
        "Sisa uang = Rp1.200.000,00 − Rp997.500,00.",
        "Jadi, sisa uang Ibu = Rp202.500,00."
      ]
    },
    {
      nomor: 7,
      tingkat: "Sedang",
      soal: "Sebuah barang memiliki harga Rp600.000,00. Barang tersebut mendapat diskon 10%, kemudian dikenakan pajak 2%. Berapa harga akhirnya?",
      petunjuk: "Kerjakan diskon terlebih dahulu, kemudian pajak.",
      jawaban: "550800",
      langkah: [
        "Diskon = 10% × Rp600.000,00 = Rp60.000,00.",
        "Harga setelah diskon = Rp600.000,00 − Rp60.000,00 = Rp540.000,00.",
        "Pajak = 2% × Rp540.000,00 = Rp10.800,00.",
        "Harga akhir = Rp540.000,00 + Rp10.800,00.",
        "Jadi, harga akhir = Rp550.800,00."
      ]
    },
    {
      nomor: 8,
      tingkat: "Sedang",
      soal: "Seorang pegawai memperoleh gaji Rp5.000.000,00 setiap bulan. Jika pajak yang diasumsikan dalam soal sebesar 4%, berapa total gaji bersih selama 2 bulan?",
      petunjuk: "Hitung gaji bersih satu bulan, lalu kalikan 2.",
      jawaban: "9600000",
      langkah: [
        "Pajak sebulan = 4% × Rp5.000.000,00 = Rp200.000,00.",
        "Gaji bersih sebulan = Rp5.000.000,00 − Rp200.000,00 = Rp4.800.000,00.",
        "Gaji bersih 2 bulan = 2 × Rp4.800.000,00.",
        "Jadi, total gaji bersih = Rp9.600.000,00."
      ]
    }
  ],

  3: [
    {
      nomor: 1,
      tingkat: "Sulit",
      soal: "Sebuah tas memiliki harga Rp850.000,00. Tas tersebut mendapat diskon 20%, kemudian dikenakan pajak 11% dari harga setelah diskon. Berapa harga akhirnya?",
      petunjuk: "Hitung diskon terlebih dahulu, lalu tambahkan pajak 11%.",
      jawaban: "754800",
      langkah: [
        "Diskon = 20% × 850.000 = 170.000",
        "Harga setelah diskon = 850.000 − 170.000 = 680.000",
        "Pajak = 11% × 680.000 = 74.800",
        "Harga akhir = 680.000 + 74.800 = 754.800"
      ]
    },
    {
      nomor: 2,
      tingkat: "Sulit",
      soal: "Seorang pegawai menerima gaji pokok Rp5.200.000,00 dan tunjangan Rp650.000,00. Jika terdapat potongan sebesar 5% dari gaji pokok, berapa gaji bersih yang diterima?",
      petunjuk: "Jumlahkan gaji dan tunjangan, kemudian kurangi potongan.",
      jawaban: "5590000",
      langkah: [
        "Total pendapatan = 5.200.000 + 650.000 = 5.850.000",
        "Potongan = 5% × 5.200.000 = 260.000",
        "Gaji bersih = 5.850.000 − 260.000 = 5.590.000"
      ]
    },
    {
      nomor: 3,
      tingkat: "Sulit",
      soal: "Sebuah barang berharga Rp1.250.000,00 mendapat diskon 15%. Setelah diskon, barang dikenakan pajak 10%. Berapa harga akhirnya?",
      petunjuk: "Hitung harga setelah diskon, kemudian tambahkan pajak.",
      jawaban: "1168750",
      langkah: [
        "Diskon = 15% × 1.250.000 = 187.500",
        "Harga setelah diskon = 1.250.000 − 187.500 = 1.062.500",
        "Pajak = 10% × 1.062.500 = 106.250",
        "Harga akhir = 1.062.500 + 106.250 = 1.168.750"
      ]
    },
    {
      nomor: 4,
      tingkat: "Sulit",
      soal: "Rani membeli 3 buku dengan harga masing-masing Rp85.000,00. Ia mendapat diskon 10% dari total harga buku dan membayar ongkos kirim Rp15.000,00. Berapa total pembayaran Rani?",
      petunjuk: "Hitung total harga buku, diskon, lalu tambahkan ongkos kirim.",
      jawaban: "244500",
      langkah: [
        "Total harga buku = 3 × 85.000 = 255.000",
        "Diskon = 10% × 255.000 = 25.500",
        "Harga setelah diskon = 255.000 − 25.500 = 229.500",
        "Total pembayaran = 229.500 + 15.000 = 244.500"
      ]
    },
    {
      nomor: 5,
      tingkat: "Sulit",
      soal: "Seorang pegawai memiliki gaji kotor Rp7.500.000,00. Ia mendapat dua potongan, yaitu 2% dan 3% dari gaji kotor. Berapa gaji bersihnya?",
      petunjuk: "Jumlahkan kedua persentase potongan terlebih dahulu.",
      jawaban: "7125000",
      langkah: [
        "Total potongan = 2% + 3% = 5%",
        "Jumlah potongan = 5% × 7.500.000 = 375.000",
        "Gaji bersih = 7.500.000 − 375.000 = 7.125.000"
      ]
    },
    {
      nomor: 6,
      tingkat: "Sulit",
      soal: "Seorang tenaga penjual memperoleh komisi sebesar 4% dari total penjualan Rp12.500.000,00. Berapa komisi yang diterima?",
      petunjuk: "Kalikan total penjualan dengan persentase komisi.",
      jawaban: "500000",
      langkah: [
        "Komisi = 4% × 12.500.000",
        "Komisi = 500.000"
      ]
    },
    {
      nomor: 7,
      tingkat: "Sulit",
      soal: "Setelah mendapat diskon 25%, harga sebuah barang menjadi Rp900.000,00. Berapa harga barang sebelum diskon?",
      petunjuk: "Harga setelah diskon adalah 75% dari harga awal.",
      jawaban: "1200000",
      langkah: [
        "Persentase harga setelah diskon = 100% − 25% = 75%",
        "Harga awal = 900.000 ÷ 75%",
        "Harga awal = 900.000 ÷ 0,75 = 1.200.000"
      ]
    },
    {
      nomor: 8,
      tingkat: "Sulit",
      soal: "Sebuah toko menjual barang dengan total harga Rp4.800.000,00. Pembeli mendapat diskon 12,5%, kemudian dikenakan pajak 10% dari harga setelah diskon. Berapa total pembayaran?",
      petunjuk: "Kurangi diskon terlebih dahulu, kemudian hitung pajaknya.",
      jawaban: "4620000",
      langkah: [
        "Diskon = 12,5% × 4.800.000 = 600.000",
        "Harga setelah diskon = 4.800.000 − 600.000 = 4.200.000",
        "Pajak = 10% × 4.200.000 = 420.000",
        "Total pembayaran = 4.200.000 + 420.000 = 4.620.000"
      ]
    }
  ],
    4: [
    {
      nomor: 1,
      tingkat: "Sedang",
      soal: "Sebuah sepeda berharga Rp1.200.000,00 mendapat diskon 15%. Berapa harga setelah diskon?",
      petunjuk: "Hitung 15% dari harga awal, lalu kurangkan.",
      jawaban: "1020000",
      langkah: [
        "Diskon = 15% × Rp1.200.000,00 = Rp180.000,00.",
        "Harga setelah diskon = Rp1.200.000,00 − Rp180.000,00.",
        "Jadi, harga setelah diskon = Rp1.020.000,00."
      ]
    },
    {
      nomor: 2,
      tingkat: "Sedang",
      soal: "Harga sebuah lemari Rp2.000.000,00 dikenakan pajak 5%. Berapa total harganya?",
      petunjuk: "Hitung pajak, kemudian tambahkan ke harga awal.",
      jawaban: "2100000",
      langkah: [
        "Pajak = 5% × Rp2.000.000,00 = Rp100.000,00.",
        "Total harga = Rp2.000.000,00 + Rp100.000,00.",
        "Jadi, total harga = Rp2.100.000,00."
      ]
    },
    {
      nomor: 3,
      tingkat: "Sedang",
      soal: "Gaji Raka Rp3.600.000,00 dipotong pajak 2,5%. Berapa gaji bersihnya?",
      petunjuk: "Kurangi gaji awal dengan pajak.",
      jawaban: "3510000",
      langkah: [
        "Pajak = 2,5% × Rp3.600.000,00 = Rp90.000,00.",
        "Gaji bersih = Rp3.600.000,00 − Rp90.000,00.",
        "Jadi, gaji bersih = Rp3.510.000,00."
      ]
    },
    {
      nomor: 4,
      tingkat: "Sedang",
      soal: "Sebuah tas Rp500.000,00 mendapat diskon 20%, lalu dikenakan pajak 5%. Berapa harga akhirnya?",
      petunjuk: "Kerjakan diskon lebih dahulu, lalu pajak.",
      jawaban: "420000",
      langkah: [
        "Diskon = 20% × Rp500.000,00 = Rp100.000,00.",
        "Harga setelah diskon = Rp400.000,00.",
        "Pajak = 5% × Rp400.000,00 = Rp20.000,00.",
        "Harga akhir = Rp400.000,00 + Rp20.000,00 = Rp420.000,00."
      ]
    },
    {
      nomor: 5,
      tingkat: "Sedang",
      soal: "Toko menjual 4 buku seharga Rp35.000,00 per buku. Jika pajaknya 5%, berapa total pembayaran?",
      petunjuk: "Kalikan jumlah buku dengan harga satuan terlebih dahulu.",
      jawaban: "147000",
      langkah: [
        "Harga seluruh buku = 4 × Rp35.000,00 = Rp140.000,00.",
        "Pajak = 5% × Rp140.000,00 = Rp7.000,00.",
        "Total pembayaran = Rp140.000,00 + Rp7.000,00 = Rp147.000,00."
      ]
    },
    {
      nomor: 6,
      tingkat: "Sedang",
      soal: "Harga sebuah barang setelah diskon 10% adalah Rp720.000,00. Berapa harga awalnya?",
      petunjuk: "Harga setelah diskon merupakan 90% dari harga awal.",
      jawaban: "800000",
      langkah: [
        "Persentase setelah diskon = 100% − 10% = 90%.",
        "Harga awal = Rp720.000,00 ÷ 0,9.",
        "Jadi, harga awal = Rp800.000,00."
      ]
    },
    {
      nomor: 7,
      tingkat: "Sedang",
      soal: "Seseorang menerima komisi 3% dari penjualan Rp8.000.000,00. Berapa komisinya?",
      petunjuk: "Kalikan penjualan dengan 3%.",
      jawaban: "240000",
      langkah: [
        "Komisi = 3% × Rp8.000.000,00.",
        "Komisi = 0,03 × Rp8.000.000,00.",
        "Jadi, komisi = Rp240.000,00."
      ]
    },
    {
      nomor: 8,
      tingkat: "Sedang",
      soal: "Ibu memiliki Rp1.000.000,00. Ia membeli barang Rp750.000,00 dengan pajak 4%. Berapa sisa uang Ibu?",
      petunjuk: "Hitung total belanja setelah pajak, lalu kurangkan dari uang awal.",
      jawaban: "220000",
      langkah: [
        "Pajak = 4% × Rp750.000,00 = Rp30.000,00.",
        "Total belanja = Rp750.000,00 + Rp30.000,00 = Rp780.000,00.",
        "Sisa uang = Rp1.000.000,00 − Rp780.000,00 = Rp220.000,00."
      ]
    }
  ],

  5: [
    {
      nomor: 1,
      tingkat: "Sedang",
      soal: "Sebuah ponsel seharga Rp3.200.000,00 mendapat diskon 12,5%. Berapa harga setelah diskon?",
      petunjuk: "Ubah 12,5% menjadi 0,125.",
      jawaban: "2800000",
      langkah: [
        "Diskon = 12,5% × Rp3.200.000,00 = Rp400.000,00.",
        "Harga setelah diskon = Rp3.200.000,00 − Rp400.000,00.",
        "Jadi, harga setelah diskon = Rp2.800.000,00."
      ]
    },
    {
      nomor: 2,
      tingkat: "Sedang",
      soal: "Harga barang Rp1.750.000,00 dikenakan pajak 8%. Berapa total pembayaran?",
      petunjuk: "Tambahkan pajak ke harga awal.",
      jawaban: "1890000",
      langkah: [
        "Pajak = 8% × Rp1.750.000,00 = Rp140.000,00.",
        "Total = Rp1.750.000,00 + Rp140.000,00.",
        "Jadi, total pembayaran = Rp1.890.000,00."
      ]
    },
    {
      nomor: 3,
      tingkat: "Sedang",
      soal: "Gaji bulanan Rp6.400.000,00 dipotong 3,5%. Berapa gaji bersih?",
      petunjuk: "Hitung 3,5% dari gaji lalu kurangkan.",
      jawaban: "6176000",
      langkah: [
        "Potongan = 3,5% × Rp6.400.000,00 = Rp224.000,00.",
        "Gaji bersih = Rp6.400.000,00 − Rp224.000,00.",
        "Jadi, gaji bersih = Rp6.176.000,00."
      ]
    },
    {
      nomor: 4,
      tingkat: "Sedang",
      soal: "Barang seharga Rp900.000,00 mendapat diskon 20%, lalu pajak 10%. Berapa harga akhir?",
      petunjuk: "Diskon dihitung sebelum pajak.",
      jawaban: "792000",
      langkah: [
        "Diskon = 20% × Rp900.000,00 = Rp180.000,00.",
        "Harga setelah diskon = Rp720.000,00.",
        "Pajak = 10% × Rp720.000,00 = Rp72.000,00.",
        "Harga akhir = Rp720.000,00 + Rp72.000,00 = Rp792.000,00."
      ]
    },
    {
      nomor: 5,
      tingkat: "Sedang",
      soal: "Toko menjual 6 pasang sepatu, masing-masing Rp250.000,00. Dikenakan pajak 4%. Berapa totalnya?",
      petunjuk: "Cari jumlah harga sepatu dahulu.",
      jawaban: "1560000",
      langkah: [
        "Harga seluruh sepatu = 6 × Rp250.000,00 = Rp1.500.000,00.",
        "Pajak = 4% × Rp1.500.000,00 = Rp60.000,00.",
        "Total = Rp1.560.000,00."
      ]
    },
    {
      nomor: 6,
      tingkat: "Sedang",
      soal: "Harga setelah diskon 25% adalah Rp1.125.000,00. Berapa harga awal?",
      petunjuk: "Harga akhir adalah 75% dari harga awal.",
      jawaban: "1500000",
      langkah: [
        "Persentase harga akhir = 100% − 25% = 75%.",
        "Harga awal = Rp1.125.000,00 ÷ 0,75.",
        "Jadi, harga awal = Rp1.500.000,00."
      ]
    },
    {
      nomor: 7,
      tingkat: "Sedang",
      soal: "Penjualan sebesar Rp15.000.000,00 mendapat komisi 2,5%. Berapa komisi?",
      petunjuk: "Kalikan total penjualan dengan 0,025.",
      jawaban: "375000",
      langkah: [
        "Komisi = 2,5% × Rp15.000.000,00.",
        "Komisi = 0,025 × Rp15.000.000,00.",
        "Jadi, komisi = Rp375.000,00."
      ]
    },
    {
      nomor: 8,
      tingkat: "Sedang",
      soal: "Uang Dita Rp2.000.000,00. Ia membeli barang Rp1.600.000,00 dengan diskon 10% dan pajak 5% setelah diskon. Berapa sisa uangnya?",
      petunjuk: "Terapkan diskon, lalu pajak, kemudian kurangi dari uang Dita.",
      jawaban: "488000",
      langkah: [
        "Diskon = 10% × Rp1.600.000,00 = Rp160.000,00.",
        "Harga setelah diskon = Rp1.440.000,00.",
        "Pajak = 5% × Rp1.440.000,00 = Rp72.000,00.",
        "Total = Rp1.512.000,00.",
        "Sisa uang = Rp2.000.000,00 − Rp1.512.000,00 = Rp488.000,00."
      ]
    }
  ],

  6: [
    {
      nomor: 1,
      tingkat: "Sedang",
      soal: "Harga komputer Rp7.500.000,00 mendapat diskon 18%. Berapa harga setelah diskon?",
      petunjuk: "Hitung 18% dari harga awal.",
      jawaban: "6150000",
      langkah: [
        "Diskon = 18% × Rp7.500.000,00 = Rp1.350.000,00.",
        "Harga setelah diskon = Rp7.500.000,00 − Rp1.350.000,00.",
        "Jadi, harga setelah diskon = Rp6.150.000,00."
      ]
    },
    {
      nomor: 2,
      tingkat: "Sedang",
      soal: "Penghasilan Rp8.250.000,00 dikenakan potongan 4%. Berapa penghasilan bersih?",
      petunjuk: "Kurangkan 4% dari penghasilan.",
      jawaban: "7920000",
      langkah: [
        "Potongan = 4% × Rp8.250.000,00 = Rp330.000,00.",
        "Penghasilan bersih = Rp8.250.000,00 − Rp330.000,00.",
        "Jadi, penghasilan bersih = Rp7.920.000,00."
      ]
    },
    {
      nomor: 3,
      tingkat: "Sedang",
      soal: "Harga barang Rp2.400.000,00 mendapat diskon 15% dan pajak 11% setelah diskon. Berapa totalnya?",
      petunjuk: "Hitung diskon dahulu, kemudian pajak.",
      jawaban: "2264400",
      langkah: [
        "Diskon = 15% × Rp2.400.000,00 = Rp360.000,00.",
        "Harga setelah diskon = Rp2.040.000,00.",
        "Pajak = 11% × Rp2.040.000,00 = Rp224.400,00.",
        "Total = Rp2.264.400,00."
      ]
    },
    {
      nomor: 4,
      tingkat: "Sedang",
      soal: "Sebuah toko membeli barang Rp4.500.000,00 dan menjualnya Rp5.400.000,00. Berapa persentase keuntungan dari harga beli?",
      petunjuk: "Keuntungan dibagi harga beli, lalu dikali 100%.",
      jawaban: "20",
      langkah: [
        "Keuntungan = Rp5.400.000,00 − Rp4.500.000,00 = Rp900.000,00.",
        "Persentase keuntungan = (Rp900.000,00 ÷ Rp4.500.000,00) × 100%.",
        "Persentase keuntungan = 20%."
      ]
    },
    {
      nomor: 5,
      tingkat: "Sedang",
      soal: "Sebuah barang Rp3.000.000,00 didiskon 10% kemudian didiskon lagi 5%. Berapa harga akhirnya?",
      petunjuk: "Diskon kedua dihitung dari harga setelah diskon pertama.",
      jawaban: "2565000",
      langkah: [
        "Diskon pertama = 10% × Rp3.000.000,00 = Rp300.000,00.",
        "Harga pertama = Rp2.700.000,00.",
        "Diskon kedua = 5% × Rp2.700.000,00 = Rp135.000,00.",
        "Harga akhir = Rp2.565.000,00."
      ]
    },
    {
      nomor: 6,
      tingkat: "Sedang",
      soal: "Gaji Rp5.500.000,00 ditambah tunjangan Rp750.000,00. Potongan 4% dihitung dari gaji pokok. Berapa pendapatan bersih?",
      petunjuk: "Jumlahkan gaji dan tunjangan, lalu kurangi potongan dari gaji pokok.",
      jawaban: "6030000",
      langkah: [
        "Total pendapatan = Rp5.500.000,00 + Rp750.000,00 = Rp6.250.000,00.",
        "Potongan = 4% × Rp5.500.000,00 = Rp220.000,00.",
        "Pendapatan bersih = Rp6.250.000,00 − Rp220.000,00 = Rp6.030.000,00."
      ]
    },
    {
      nomor: 7,
      tingkat: "Sedang",
      soal: "Harga setelah pajak 5% adalah Rp2.100.000,00. Berapa harga sebelum pajak?",
      petunjuk: "Harga setelah pajak merupakan 105% dari harga awal.",
      jawaban: "2000000",
      langkah: [
        "Harga setelah pajak = 105% dari harga awal.",
        "Harga awal = Rp2.100.000,00 ÷ 1,05.",
        "Jadi, harga sebelum pajak = Rp2.000.000,00."
      ]
    },
    {
      nomor: 8,
      tingkat: "Sedang",
      soal: "Toko memberi diskon 20% pada barang Rp1.800.000,00. Pembeli membayar pajak 5% setelah diskon. Berapa besar pajaknya?",
      petunjuk: "Cari harga setelah diskon, kemudian hitung 5%.",
      jawaban: "72000",
      langkah: [
        "Diskon = 20% × Rp1.800.000,00 = Rp360.000,00.",
        "Harga setelah diskon = Rp1.440.000,00.",
        "Pajak = 5% × Rp1.440.000,00 = Rp72.000,00."
      ]
    }
  ],
    7: [
    {
      nomor: 1,
      tingkat: "Sulit",
      soal: "Sebuah barang Rp2.750.000,00 mendapat diskon 16%. Berapa harga setelah diskon?",
      petunjuk: "Kurangi 16% dari harga awal.",
      jawaban: "2310000",
      langkah: [
        "Diskon = 16% × Rp2.750.000,00 = Rp440.000,00.",
        "Harga setelah diskon = Rp2.750.000,00 − Rp440.000,00.",
        "Jadi, harga setelah diskon = Rp2.310.000,00."
      ]
    },
    {
      nomor: 2,
      tingkat: "Sulit",
      soal: "Penghasilan Rp9.600.000,00 dipotong 7,5%. Berapa penghasilan bersih?",
      petunjuk: "Hitung potongan lalu kurangkan.",
      jawaban: "8880000",
      langkah: [
        "Potongan = 7,5% × Rp9.600.000,00 = Rp720.000,00.",
        "Penghasilan bersih = Rp9.600.000,00 − Rp720.000,00 = Rp8.880.000,00."
      ]
    },
    {
      nomor: 3,
      tingkat: "Sulit",
      soal: "Barang Rp1.850.000,00 mendapat diskon 10%, lalu pajak 11%. Berapa total harga?",
      petunjuk: "Pajak dihitung dari harga setelah diskon.",
      jawaban: "1848150",
      langkah: [
        "Diskon = 10% × Rp1.850.000,00 = Rp185.000,00.",
        "Harga setelah diskon = Rp1.665.000,00.",
        "Pajak = 11% × Rp1.665.000,00 = Rp183.150,00.",
        "Total = Rp1.848.150,00."
      ]
    },
    {
      nomor: 4,
      tingkat: "Sulit",
      soal: "Harga jual barang Rp3.600.000,00 sudah termasuk keuntungan 20% dari modal. Berapa modalnya?",
      petunjuk: "Harga jual adalah 120% dari modal.",
      jawaban: "3000000",
      langkah: [
        "Harga jual = 120% × modal.",
        "Modal = Rp3.600.000,00 ÷ 1,2.",
        "Jadi, modal = Rp3.000.000,00."
      ]
    },
    {
      nomor: 5,
      tingkat: "Sulit",
      soal: "Toko membeli 15 barang seharga Rp80.000,00 per barang. Semua barang dijual Rp100.000,00 per barang. Berapa total keuntungan?",
      petunjuk: "Hitung total harga beli dan total harga jual.",
      jawaban: "300000",
      langkah: [
        "Total harga beli = 15 × Rp80.000,00 = Rp1.200.000,00.",
        "Total harga jual = 15 × Rp100.000,00 = Rp1.500.000,00.",
        "Keuntungan = Rp1.500.000,00 − Rp1.200.000,00 = Rp300.000,00."
      ]
    },
    {
      nomor: 6,
      tingkat: "Sulit",
      soal: "Harga Rp4.000.000,00 didiskon 15%, kemudian dikenakan pajak 10%. Berapa total pembayaran?",
      petunjuk: "Hitung harga diskon sebelum menambahkan pajak.",
      jawaban: "3740000",
      langkah: [
        "Diskon = 15% × Rp4.000.000,00 = Rp600.000,00.",
        "Harga setelah diskon = Rp3.400.000,00.",
        "Pajak = 10% × Rp3.400.000,00 = Rp340.000,00.",
        "Total = Rp3.740.000,00."
      ]
    },
    {
      nomor: 7,
      tingkat: "Sulit",
      soal: "Seseorang menerima komisi 4,5% dari penjualan Rp18.000.000,00. Berapa komisi?",
      petunjuk: "Kalikan 0,045 dengan total penjualan.",
      jawaban: "810000",
      langkah: [
        "Komisi = 4,5% × Rp18.000.000,00.",
        "Komisi = 0,045 × Rp18.000.000,00 = Rp810.000,00."
      ]
    },
    {
      nomor: 8,
      tingkat: "Sulit",
      soal: "Setelah pajak 8%, harga suatu barang menjadi Rp2.700.000,00. Berapa pajaknya?",
      petunjuk: "Cari harga awal dengan membagi 1,08, lalu cari selisihnya.",
      jawaban: "200000",
      langkah: [
        "Harga awal = Rp2.700.000,00 ÷ 1,08 = Rp2.500.000,00.",
        "Pajak = Rp2.700.000,00 − Rp2.500.000,00.",
        "Jadi, pajak = Rp200.000,00."
      ]
    }
  ],

  8: [
    {
      nomor: 1,
      tingkat: "Sulit",
      soal: "Harga sebuah motor Rp18.000.000,00 mendapat diskon 7,5%. Berapa harga setelah diskon?",
      petunjuk: "Hitung 7,5% dari harga motor.",
      jawaban: "16650000",
      langkah: [
        "Diskon = 7,5% × Rp18.000.000,00 = Rp1.350.000,00.",
        "Harga setelah diskon = Rp18.000.000,00 − Rp1.350.000,00.",
        "Jadi, harga setelah diskon = Rp16.650.000,00."
      ]
    },
    {
      nomor: 2,
      tingkat: "Sulit",
      soal: "Gaji Rp12.500.000,00 dipotong 6,4%. Berapa gaji bersih?",
      petunjuk: "Kurangi gaji dengan 6,4% dari gaji tersebut.",
      jawaban: "11700000",
      langkah: [
        "Potongan = 6,4% × Rp12.500.000,00 = Rp800.000,00.",
        "Gaji bersih = Rp12.500.000,00 − Rp800.000,00 = Rp11.700.000,00."
      ]
    },
    {
      nomor: 3,
      tingkat: "Sulit",
      soal: "Barang Rp6.400.000,00 didiskon 12,5% dan dikenakan pajak 11% setelah diskon. Berapa totalnya?",
      petunjuk: "Hitung diskon, lalu pajak dari harga setelah diskon.",
      jawaban: "6216000",
      langkah: [
        "Diskon = 12,5% × Rp6.400.000,00 = Rp800.000,00.",
        "Harga setelah diskon = Rp5.600.000,00.",
        "Pajak = 11% × Rp5.600.000,00 = Rp616.000,00.",
        "Total = Rp6.216.000,00."
      ]
    },
    {
      nomor: 4,
      tingkat: "Sulit",
      soal: "Modal usaha Rp8.000.000,00 memperoleh keuntungan 15%. Berapa harga jual seluruhnya?",
      petunjuk: "Tambahkan keuntungan 15% ke modal.",
      jawaban: "9200000",
      langkah: [
        "Keuntungan = 15% × Rp8.000.000,00 = Rp1.200.000,00.",
        "Harga jual = Rp8.000.000,00 + Rp1.200.000,00 = Rp9.200.000,00."
      ]
    },
    {
      nomor: 5,
      tingkat: "Sulit",
      soal: "Harga barang setelah diskon 30% adalah Rp1.260.000,00. Berapa nilai diskonnya?",
      petunjuk: "Harga setelah diskon adalah 70% dari harga awal.",
      jawaban: "540000",
      langkah: [
        "Harga awal = Rp1.260.000,00 ÷ 0,7 = Rp1.800.000,00.",
        "Diskon = 30% × Rp1.800.000,00 = Rp540.000,00."
      ]
    },
    {
      nomor: 6,
      tingkat: "Sulit",
      soal: "Sebuah toko menjual 8 unit barang Rp375.000,00 per unit. Pajak total 4%. Berapa total pembayaran?",
      petunjuk: "Hitung harga 8 unit, lalu tambahkan pajak 4%.",
      jawaban: "3120000",
      langkah: [
        "Harga seluruh barang = 8 × Rp375.000,00 = Rp3.000.000,00.",
        "Pajak = 4% × Rp3.000.000,00 = Rp120.000,00.",
        "Total pembayaran = Rp3.120.000,00."
      ]
    },
    {
      nomor: 7,
      tingkat: "Sulit",
      soal: "Pendapatan Rp7.200.000,00 terdiri dari gaji pokok dan tunjangan. Potongan 5% hanya dari gaji pokok Rp6.000.000,00. Berapa pendapatan bersih?",
      petunjuk: "Hitung potongan dari gaji pokok saja.",
      jawaban: "6900000",
      langkah: [
        "Potongan = 5% × Rp6.000.000,00 = Rp300.000,00.",
        "Pendapatan bersih = Rp7.200.000,00 − Rp300.000,00 = Rp6.900.000,00."
      ]
    },
    {
      nomor: 8,
      tingkat: "Sulit",
      soal: "Harga setelah diskon 20% kemudian pajak 5% adalah Rp1.680.000,00. Berapa harga awal?",
      petunjuk: "Harga akhir = 80% × 105% dari harga awal.",
      jawaban: "2000000",
      langkah: [
        "Faktor harga akhir = 0,8 × 1,05 = 0,84.",
        "Harga awal = Rp1.680.000,00 ÷ 0,84.",
        "Jadi, harga awal = Rp2.000.000,00."
      ]
    }
  ],

  9: [
    {
      nomor: 1,
      tingkat: "Sulit",
      soal: "Barang Rp5.600.000,00 didiskon 17,5%. Berapa harga setelah diskon?",
      petunjuk: "Hitung 17,5% dari harga awal.",
      jawaban: "4620000",
      langkah: [
        "Diskon = 17,5% × Rp5.600.000,00 = Rp980.000,00.",
        "Harga setelah diskon = Rp5.600.000,00 − Rp980.000,00 = Rp4.620.000,00."
      ]
    },
    {
      nomor: 2,
      tingkat: "Sulit",
      soal: "Penghasilan Rp14.400.000,00 dipotong 8,25%. Berapa penghasilan bersih?",
      petunjuk: "Hitung 8,25% dari penghasilan, lalu kurangkan.",
      jawaban: "13212000",
      langkah: [
        "Potongan = 8,25% × Rp14.400.000,00 = Rp1.188.000,00.",
        "Penghasilan bersih = Rp14.400.000,00 − Rp1.188.000,00 = Rp13.212.000,00."
      ]
    },
    {
      nomor: 3,
      tingkat: "Sulit",
      soal: "Barang Rp3.750.000,00 mendapat diskon 12% dan pajak 11% setelah diskon. Berapa total pembayaran?",
      petunjuk: "Terapkan diskon dahulu.",
      jawaban: "3663000",
      langkah: [
        "Diskon = 12% × Rp3.750.000,00 = Rp450.000,00.",
        "Harga setelah diskon = Rp3.300.000,00.",
        "Pajak = 11% × Rp3.300.000,00 = Rp363.000,00.",
        "Total = Rp3.663.000,00."
      ]
    },
    {
      nomor: 4,
      tingkat: "Sulit",
      soal: "Harga jual Rp6.900.000,00 memberikan keuntungan 15% dari modal. Berapa keuntungan dalam rupiah?",
      petunjuk: "Harga jual = 115% modal. Cari modal, lalu selisihnya.",
      jawaban: "900000",
      langkah: [
        "Modal = Rp6.900.000,00 ÷ 1,15 = Rp6.000.000,00.",
        "Keuntungan = Rp6.900.000,00 − Rp6.000.000,00 = Rp900.000,00."
      ]
    },
    {
      nomor: 5,
      tingkat: "Sulit",
      soal: "Harga awal Rp2.400.000,00 naik 10%, lalu turun 10%. Berapa harga akhirnya?",
      petunjuk: "Kenaikan dan penurunan dihitung berurutan dari nilai terbaru.",
      jawaban: "2376000",
      langkah: [
        "Setelah naik 10% = Rp2.400.000,00 × 1,1 = Rp2.640.000,00.",
        "Setelah turun 10% = Rp2.640.000,00 × 0,9.",
        "Harga akhir = Rp2.376.000,00."
      ]
    },
    {
      nomor: 6,
      tingkat: "Sulit",
      soal: "Toko menjual barang Rp9.500.000,00 dengan diskon 8%, lalu pajak 11%. Berapa pajaknya?",
      petunjuk: "Hitung harga setelah diskon, kemudian 11%.",
      jawaban: "961400",
      langkah: [
        "Diskon = 8% × Rp9.500.000,00 = Rp760.000,00.",
        "Harga setelah diskon = Rp8.740.000,00.",
        "Pajak = 11% × Rp8.740.000,00 = Rp961.400,00."
      ]
    },
    {
      nomor: 7,
      tingkat: "Sulit",
      soal: "Komisi 3,75% dari penjualan Rp24.000.000,00 akan dibagi rata kepada 3 pegawai. Berapa bagian setiap pegawai?",
      petunjuk: "Hitung total komisi, lalu bagi 3.",
      jawaban: "300000",
      langkah: [
        "Total komisi = 3,75% × Rp24.000.000,00 = Rp900.000,00.",
        "Bagian setiap pegawai = Rp900.000,00 ÷ 3 = Rp300.000,00."
      ]
    },
    {
      nomor: 8,
      tingkat: "Sulit",
      soal: "Setelah dipotong pajak 7%, gaji seseorang menjadi Rp8.370.000,00. Berapa pajak yang dipotong?",
      petunjuk: "Gaji bersih adalah 93% dari gaji awal.",
      jawaban: "630000",
      langkah: [
        "Gaji awal = Rp8.370.000,00 ÷ 0,93 = Rp9.000.000,00.",
        "Pajak = 7% × Rp9.000.000,00 = Rp630.000,00."
      ]
    }
  ],

  10: [
    {
      nomor: 1,
      tingkat: "Sulit",
      soal: "Barang Rp8.400.000,00 mendapat diskon berturut-turut 10% dan 5%. Berapa harga akhirnya?",
      petunjuk: "Diskon kedua dihitung dari harga setelah diskon pertama.",
      jawaban: "7182000",
      langkah: [
        "Setelah diskon 10% = Rp8.400.000,00 × 0,9 = Rp7.560.000,00.",
        "Setelah diskon 5% = Rp7.560.000,00 × 0,95.",
        "Harga akhir = Rp7.182.000,00."
      ]
    },
    {
      nomor: 2,
      tingkat: "Sulit",
      soal: "Penghasilan Rp16.000.000,00 mendapat potongan 5% dan 2,5%, keduanya dari penghasilan awal. Berapa penghasilan bersih?",
      petunjuk: "Jumlahkan persentase potongan karena keduanya dihitung dari dasar yang sama.",
      jawaban: "14800000",
      langkah: [
        "Total potongan = 5% + 2,5% = 7,5%.",
        "Potongan = 7,5% × Rp16.000.000,00 = Rp1.200.000,00.",
        "Penghasilan bersih = Rp16.000.000,00 − Rp1.200.000,00 = Rp14.800.000,00."
      ]
    },
    {
      nomor: 3,
      tingkat: "Sulit",
      soal: "Harga Rp5.000.000,00 didiskon 20%, lalu pajak 11%. Berapa total pembayaran?",
      petunjuk: "Hitung harga setelah diskon sebelum pajak.",
      jawaban: "4440000",
      langkah: [
        "Diskon = 20% × Rp5.000.000,00 = Rp1.000.000,00.",
        "Harga setelah diskon = Rp4.000.000,00.",
        "Pajak = 11% × Rp4.000.000,00 = Rp440.000,00.",
        "Total pembayaran = Rp4.440.000,00."
      ]
    },
    {
      nomor: 4,
      tingkat: "Sulit",
      soal: "Sebuah usaha memiliki modal Rp12.000.000,00. Barang terjual dengan keuntungan 22,5% dari modal. Berapa total hasil penjualan?",
      petunjuk: "Tambahkan keuntungan ke modal.",
      jawaban: "14700000",
      langkah: [
        "Keuntungan = 22,5% × Rp12.000.000,00 = Rp2.700.000,00.",
        "Hasil penjualan = Rp12.000.000,00 + Rp2.700.000,00 = Rp14.700.000,00."
      ]
    },
    {
      nomor: 5,
      tingkat: "Sulit",
      soal: "Harga setelah pajak 12% adalah Rp5.600.000,00. Berapa nilai pajaknya?",
      petunjuk: "Harga akhir merupakan 112% dari harga sebelum pajak.",
      jawaban: "600000",
      langkah: [
        "Harga awal = Rp5.600.000,00 ÷ 1,12 = Rp5.000.000,00.",
        "Pajak = Rp5.600.000,00 − Rp5.000.000,00 = Rp600.000,00."
      ]
    },
    {
      nomor: 6,
      tingkat: "Sulit",
      soal: "Pembelian 12 barang masing-masing Rp425.000,00 mendapat diskon 10% dari total, lalu pajak 5%. Berapa total pembayaran?",
      petunjuk: "Hitung total harga, diskon, kemudian pajak.",
      jawaban: "4819500",
      langkah: [
        "Harga seluruh barang = 12 × Rp425.000,00 = Rp5.100.000,00.",
        "Diskon = 10% × Rp5.100.000,00 = Rp510.000,00.",
        "Harga setelah diskon = Rp4.590.000,00.",
        "Pajak = 5% × Rp4.590.000,00 = Rp229.500,00.",
        "Total = Rp4.819.500,00."
      ]
    },
    {
      nomor: 7,
      tingkat: "Sulit",
      soal: "Harga jual Rp13.800.000,00 sudah termasuk keuntungan 15% dari modal. Berapa modal usaha?",
      petunjuk: "Harga jual merupakan 115% dari modal.",
      jawaban: "12000000",
      langkah: [
        "Harga jual = 115% × modal.",
        "Modal = Rp13.800.000,00 ÷ 1,15.",
        "Jadi, modal = Rp12.000.000,00."
      ]
    },
    {
      nomor: 8,
      tingkat: "Sulit",
      soal: "Seseorang memiliki uang Rp10.000.000,00. Ia membeli barang Rp8.500.000,00 dengan diskon 12%, lalu pajak 11% setelah diskon. Berapa sisa uangnya?",
      petunjuk: "Kerjakan diskon, pajak, lalu kurangi dari uang awal.",
      jawaban: "1697200",
      langkah: [
        "Diskon = 12% × Rp8.500.000,00 = Rp1.020.000,00.",
        "Harga setelah diskon = Rp7.480.000,00.",
        "Pajak = 11% × Rp7.480.000,00 = Rp822.800,00.",
        "Total pembayaran = Rp8.302.800,00.",
        "Sisa uang = Rp10.000.000,00 − Rp8.302.800,00 = Rp1.697.200,00."
      ]
    }
  ]
};
const handleFotoProfil = (e) => {
  const file = e.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onloadend = () => {
      setFotoProfil(reader.result);
    };

    reader.readAsDataURL(file);
  }
};

return (
    <div className="aplikasi">
      <header className="header">
        <div className="logo">
          <span className="logo-icon">📖</span>
          <div>
            <h2>PajakPintar</h2>
            <p>Belajar Pajak Jadi Lebih Mudah</p>
          </div>
        </div>
        <div className="header-label">
          Media Pembelajaran Matematika SMP
        </div>
      </header>
            <div className="layout">
        <aside className="sidebar">
          <h3>MENU UTAMA</h3>

          {menu.map((item) => (
            <button
              key={item.nama}
              className={`menu-item ${
                halaman === item.nama ? "aktif" : ""
              }`}
              onClick={() => setHalaman(item.nama)}
            >
              <span>{item.ikon}</span>
              {item.nama}
            </button>
          ))}
        </aside>

        <main className="konten">
          {halaman === "Beranda" && (
            <>
              <section className="sambutan">
                <div>
                  <p className="sapaan">SELAMAT DATANG 👋</p>
                  <h1>Yuk, Belajar Pajak!</h1>
                  <p className="deskripsi">
                    Kenali pajak, pelajari cara menghitungnya,
                    dan temukan penerapannya dalam kehidupan
                    sehari-hari.
                  </p>
                  <button
                    className="tombol-utama"
                    onClick={() => setHalaman("Materi")}
                  >
                    Mulai Belajar →
                  </button>
                </div>
                <div className="ilustrasi">📚</div>
              </section>

              <section className="bagian-menu">
                <h2>Jelajahi Pembelajaran</h2>
                <p className="subjudul">
                  Pilih bagian yang ingin kamu pelajari.
                </p>

                <div className="kartu-container">
                  {menu.slice(1).map((item) => (
                    <button
                      className="kartu"
                      key={item.nama}
                      onClick={() => setHalaman(item.nama)}
                    >
                      <span className="kartu-ikon">
                        {item.ikon}
                      </span>
                      <h3>{item.nama}</h3>
                      <p>
                        {item.nama === "Materi" &&
                          "Pelajari pengertian dan perhitungan pajak."}
                        {item.nama === "Contoh Soal" &&
                          "Pelajari soal dan langkah penyelesaiannya."}
                        {item.nama === "Kuis" &&
                          "Uji pemahamanmu melalui kuis bertingkat."}
                        {item.nama === "Latihan" &&
                          "Asah kemampuan dengan latihan soal."}
                        {item.nama === "Profil" &&
                          "Lengkapi informasi profil belajarmu."}
                      </p>
                      <span className="selengkapnya">
                        Buka bagian →
                      </span>
                    </button>
                  ))}
                </div>
              </section>
            </>
          )}

          {halaman === "Materi" && (
            <section className="materi-halaman">
              <p className="sapaan">MATERI PEMBELAJARAN</p>
              <h1>Pajak</h1>
              <p className="materi-pengantar">
                Pada bagian ini, kita akan mempelajari pengertian
                pajak, jenis pajak yang disebutkan dalam buku,
                serta contoh perhitungan pajak.
              </p>

              <div className="materi-kartu">
                <h2>1. Pengertian Pajak</h2>
                <p>
                  Pajak merupakan suatu kewajiban masyarakat
                  sebagai warga negara untuk menyerahkan sebagian
                  kekayaannya kepada negara menurut peraturan
                  yang telah ditetapkan oleh pemerintah.
                  Hasil dari pajak digunakan untuk kesejahteraan
                  umum.
                </p>
                <div className="catatan-materi">
                  💡 <strong>Ingat:</strong> Pajak digunakan
                  untuk membiayai kebutuhan dan kepentingan umum.
                </div>
              </div>

              <div className="materi-kartu">
                <h2>2. Contoh Pajak dalam Kehidupan Sehari-hari</h2>

                <div className="jenis-pajak">
                  <div className="jenis-ikon">💼</div>
                  <div>
                    <h3>Pajak Penghasilan (PPh)</h3>
                    <p>
                      Dalam buku, pegawai tetap dari perusahaan
                      swasta atau pegawai negeri disebut sebagai
                      contoh orang yang dikenakan pajak penghasilan.
                    </p>
                  </div>
                </div>

                <div className="jenis-pajak">
                  <div className="jenis-ikon">🛒</div>
                  <div>
                    <h3>Pajak Pertambahan Nilai (PPN)</h3>
                    <p>
                      Ketika berbelanja di toko swalayan, grosir,
                      dealer, atau tempat lainnya, harga barang
                      dapat ditambah dengan pajak yang disebut PPN.
                    </p>
                  </div>
                </div>
              </div>

              <div className="materi-kartu">
                <h2>3. Cara Menghitung Pajak</h2>
                <p>
                  Untuk menghitung pajak dari suatu nilai,
                  kita dapat mengalikan nilai tersebut dengan
                  persentase pajak yang diberikan pada soal.
                </p>

                <div className="rumus-box">
                  <span>Besarnya Pajak</span>
                  <strong>
                    = Persentase Pajak × Nilai yang Dikenai Pajak
                  </strong>
                </div>

                <p>
                  Jika yang ditanyakan adalah penghasilan bersih
                  setelah dipotong pajak, maka:
                </p>

                <div className="rumus-box">
                  <span>Penghasilan Bersih</span>
                  <strong>
                    = Penghasilan Awal − Besarnya Pajak
                  </strong>
                </div>

                <div className="catatan-materi">
                  Persentase harus diubah menjadi bentuk desimal
                  sebelum dikalikan. Contoh: 2,5% = 2,5 ÷ 100
                  = 0,025.
                </div>
              </div>

              <div className="materi-kartu contoh-materi">
                <p className="sapaan">CONTOH DARI BUKU</p>
                <h2>4. Menghitung Gaji Bersih Ani</h2>
                <p>
                  Ani menerima gaji setiap bulan sebesar
                  Rp2.500.000,00 dan dikenakan pajak sebesar 2,5%.
                  Berapakah gaji bersih yang diterima Ani?
                </p>

                <h3>Diketahui:</h3>
                <ul>
                  <li>Gaji Ani = Rp2.500.000,00</li>
                  <li>Persentase pajak = 2,5%</li>
                </ul>

                <h3>Ditanyakan:</h3>
                <p>Gaji bersih Ani?</p>

                <h3>Penyelesaian:</h3>
                <p>Langkah 1. Ubah persentase menjadi desimal.</p>
                <div className="langkah-rumus">
                  2,5% = 2,5 ÷ 100 = 0,025
                </div>

                <p>Langkah 2. Hitung besarnya pajak.</p>
                <div className="langkah-rumus">
                  Pajak = 0,025 × Rp2.500.000,00
                  <br />
                  Pajak = Rp62.500,00
                </div>

                <p>Langkah 3. Hitung gaji bersih Ani.</p>
                <div className="langkah-rumus">
                  Gaji bersih = Gaji awal − Pajak
                  <br />
                  = Rp2.500.000,00 − Rp62.500,00
                  <br />
                  = Rp2.437.500,00
                </div>

                <div className="jawaban-akhir">
                  Jadi, gaji bersih yang diterima Ani adalah
                  <strong> Rp2.437.500,00.</strong>
                </div>
              </div>

              <div className="materi-kartu">
                <h2>5. Ayo Pahami!</h2>
                <p>
                  Setelah suatu barang mendapat potongan harga
                  atau diskon, barang tersebut dapat dikenai pajak
                  sesuai informasi yang diberikan dalam soal.
                  Karena itu, perhatikan urutan perhitungannya.
                </p>
                <ol>
                  <li>Hitung harga setelah diskon.</li>
                  <li>Gunakan harga tersebut sebagai dasar perhitungan pajak sesuai soal.</li>
                  <li>Tambahkan pajak untuk memperoleh harga akhir.</li>
                </ol>
                <div className="catatan-materi">
                  Catatan: Besarnya diskon dan pajak harus mengikuti
                  angka yang diberikan dalam setiap soal.
                </div>
              </div>

              <button
                className="tombol-utama"
                onClick={() => setHalaman("Beranda")}
              >
                ← Kembali ke Beranda
              </button>
            </section>
          )}

          {halaman === "Contoh Soal" && (
            <section className="contoh-halaman">
              <p className="sapaan">CONTOH DAN PEMBAHASAN 📝</p>
              <h1>Contoh Soal Pajak</h1>
              <p>
                Pelajari soal, informasi yang diketahui, dan langkah penyelesaiannya.
              </p>

              {contohSoal.map((item) => (
                <article className="kartu-soal" key={item.nomor}>
                  <h3>Soal {item.nomor} — {item.kategori}</h3>
                  <p><strong>Tingkat:</strong> {item.tingkat}</p>
                  <p>{item.soal}</p>
                  <h4>Diketahui:</h4>
                  <ul>
                    {item.diketahui.map((data, i) => (
                      <li key={i}>{data}</li>
                    ))}
                  </ul>
                  <h4>Ditanya:</h4>
                  <p>{item.ditanya}</p>
                  <h4>Penyelesaian:</h4>
                  {item.langkah.map((langkah, i) => (
                    <p key={i}>{i + 1}. {langkah}</p>
                  ))}
                  <p className="jawaban-akhir">
                    <strong>{item.jawaban}</strong>
                  </p>
                </article>
              ))}
            </section>
          )}
                    {halaman === "Latihan" && (
            <section className="contoh-halaman">
              <p className="sapaan">ASAH KEMAMPUANMU ✏️</p>
              <h1>Latihan Pajak</h1>
              <p>Pilih level dan kerjakan soal secara bertahap.</p>

              <div className="daftar-level">
                {Array.from({ length: 10 }, (_, i) => i + 1).map((level) => (
                  <button
                    key={level}
                    onClick={() => setLevelLatihan(level)}
                    className={levelLatihan === level ? "level-aktif" : ""}
                  >
                    Level {level}
                  </button>
                ))}
              </div>

              <h2>Level {levelLatihan}</h2>

              {bankLatihan[levelLatihan] ? (
                bankLatihan[levelLatihan].map((soal) => (
                  <div className="kartu-soal" key={soal.nomor}>
                    <h3>Soal {soal.nomor}</h3>
                    <p>{soal.soal}</p>

                    <p><strong>Petunjuk:</strong> {soal.petunjuk}</p>

                    <input
                      type="text"
                      placeholder="Masukkan jawaban angka saja"
                      value={jawabanLatihan[levelLatihan]?.[soal.nomor] || ""}
                      onChange={(e) =>
                        setJawabanLatihan((lama) => ({
                          ...lama,
                          [levelLatihan]: {
                            ...lama[levelLatihan],
                            [soal.nomor]: e.target.value
                          }
                        }))
                      }
                    />

                    <button
                      onClick={() => {
                        const jawaban = jawabanLatihan[levelLatihan]?.[soal.nomor] || "";
                        const benar = jawaban.replace(/\D/g, "") === soal.jawaban;

                        setHasilLatihan((lama) => ({
                          ...lama,
                          [levelLatihan]: {
                            ...lama[levelLatihan],
                            [soal.nomor]: benar
                          }
                        }));
                      }}
                    >
                      Periksa Jawaban
                    </button>

                    {hasilLatihan[levelLatihan]?.[soal.nomor] !== undefined && (
                      <p>
                        {hasilLatihan[levelLatihan][soal.nomor]
                          ? "Jawaban benar! Hebat! 🎉"
                          : "Jawaban belum tepat. Coba lagi, ya!"}
                      </p>
                    )}

                    <button
                      onClick={() => {
                        const kunciPembahasan = `${levelLatihan}-${soal.nomor}`;
                        setPembahasanLatihan((lama) =>
                          lama.includes(kunciPembahasan)
                            ? lama.filter((n) => n !== kunciPembahasan)
                            : [...lama, kunciPembahasan]
                        );
                      }}
                    >
                      Lihat Langkah Penyelesaian
                    </button>

                    {pembahasanLatihan.includes(`${levelLatihan}-${soal.nomor}`) && (
                      <div className="pembahasan">
                        <h4>Pembahasan</h4>
                        {soal.langkah.map((langkah, i) => (
                          <p key={i}>{i + 1}. {langkah}</p>
                        ))}
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <p>Soal untuk level ini akan segera ditambahkan.</p>
              )}
            </section>
          )}

          {halaman === "Kuis" && (
            <section className="kuis-halaman">
              <p className="sapaan">UJI PEMAHAMANMU</p>
              <h1>Kuis Pajak 🎯</h1>
              <p className="kuis-pengantar">
                Kerjakan 10 soal berikut untuk menguji pemahamanmu
                tentang perhitungan pajak dan persentase.
              </p>

              <div className="level-aktif">
                <span>LEVEL 1</span>
                <strong>Dasar Perhitungan Pajak</strong>
                <p>10 soal pilihan ganda · Tingkat mudah</p>
              </div>

              <div className="progres-kuis">
                <span>Jumlah soal: 10</span>
                <span>Terjawab: {Object.keys(jawabanKuis).length}/10</span>
              </div>

              {bankKuis[1].map((item, index) => (
                <article className="kuis-kartu" key={index}>
                  <div className="kuis-nomor">
                    SOAL {index + 1} DARI 10
                  </div>

                  <h3>{item.soal}</h3>

                  <div className="pilihan-kuis">
                    {item.pilihan.map((pilihan, pilihanIndex) => (
                      <button
                        key={pilihanIndex}
                        disabled={kuisDiperiksa}
                        className={`pilihan-jawaban ${
                          jawabanKuis[index] === pilihanIndex
                            ? "pilihan-dipilih"
                            : ""
                        } ${
                          kuisDiperiksa && pilihanIndex === item.benar
                            ? "pilihan-benar"
                            : ""
                        } ${
                          kuisDiperiksa &&
                          jawabanKuis[index] === pilihanIndex &&
                          pilihanIndex !== item.benar
                            ? "pilihan-salah"
                            : ""
                        }`}
                        onClick={() =>
                          setJawabanKuis((sebelumnya) => ({
                            ...sebelumnya,
                            [index]: pilihanIndex
                          }))
                        }
                      >
                        <span>{String.fromCharCode(65 + pilihanIndex)}.</span>
                        {pilihan}
                      </button>
                    ))}
                  </div>

                  {kuisDiperiksa && (
                    <div className="pembahasan-kuis">
                      <strong>
                        {jawabanKuis[index] === item.benar
                          ? "✓ Jawaban benar!"
                          : "✗ Jawaban belum tepat."}
                      </strong>
                      <p>{item.bahas}</p>
                    </div>
                  )}
                </article>
              ))}

              {!kuisDiperiksa ? (
                <button
                  className="tombol-utama"
                  disabled={Object.keys(jawabanKuis).length !== 10}
                  onClick={() => setKuisDiperiksa(true)}
                >
                  Periksa Jawaban
                </button>
              ) : (
                <div className="hasil-kuis">
                  <h2>Hasil Kuis Level 1</h2>
                  <strong>
                    {bankKuis[1].filter(
                      (item, index) => jawabanKuis[index] === item.benar
                    ).length * 10}/100
                  </strong>
                  <p>
                    Jawaban benar:{" "}
                    {bankKuis[1].filter(
                      (item, index) => jawabanKuis[index] === item.benar
                    ).length} dari 10 soal.
                  </p>
                  <button
                    className="tombol-utama"
                    onClick={() => {
                      setJawabanKuis({});
                      setKuisDiperiksa(false);
                    }}
                  >
                    Ulangi Kuis
                  </button>
                </div>
              )}
            </section>
          )}
                   {halaman === "Profil" && (
  <section className="halaman-kosong">
    <div className="foto-profil">
  {fotoProfil ? (
    <img src={fotoProfil} alt="Foto Profil" />
  ) : (
    <span>👤</span>
  )}
</div>

<label className="tombol-utama pilih-foto">
  Pilih Foto Profil
  <input
    type="file"
    accept="image/*"
    onChange={handleFotoProfil}
    hidden
  />
</label>

    <h1>Profil Pembelajaran</h1>
    <div className="form-profil">
  <h2>Identitas Siswa</h2>

  <label>Nama Lengkap</label>
  <input
    type="text"
    placeholder="Masukkan nama lengkap"
    value={namaSiswa}
    onChange={(e) => setNamaSiswa(e.target.value)}
  />

  <label>Gender</label>
  <select
    value={genderSiswa}
    onChange={(e) => setGenderSiswa(e.target.value)}
  >
    <option value="">Pilih gender</option>
    <option value="Pria">Pria</option>
    <option value="Wanita">Wanita</option>
  </select>

  <label>Asal Sekolah</label>
  <input
    type="text"
    placeholder="Masukkan asal sekolah"
    value={sekolahSiswa}
    onChange={(e) => setSekolahSiswa(e.target.value)}
  />

  <label>Kelas</label>
  <select
    value={kelasSiswa}
    onChange={(e) => setKelasSiswa(e.target.value)}
  >
    <option value="">Pilih kelas</option>
    <option value="VII">VII</option>
    <option value="VIII">VIII</option>
    <option value="IX">IX</option>
  </select>

  <label>Asal Daerah</label>
  <input
    type="text"
    placeholder="Masukkan asal daerah"
    value={daerahSiswa}
    onChange={(e) => setDaerahSiswa(e.target.value)}
  />

  <button
    className="tombol-utama"
    onClick={() => {
      if (!namaSiswa || !genderSiswa || !sekolahSiswa || !kelasSiswa || !daerahSiswa) {
        alert("Lengkapi semua identitas terlebih dahulu!");
        return;
      }

      alert("Profil berhasil disimpan!");
    }}
  >
    Simpan Profil
  </button>
</div>
    

    <p>
      Selamat datang di PajakPintar. Gunakan media ini untuk
      mempelajari konsep pajak, melihat contoh, mengerjakan kuis,
      dan berlatih dari Level 1 sampai Level 10.
    </p>

    <div className="materi-kartu">
      <h2>Petunjuk Penggunaan</h2>

      <ol>
        <li>
          Buka menu Materi untuk membaca ringkasan konsep pajak.
        </li>
        <li>
          Buka Contoh Soal untuk melihat penyelesaian langkah demi langkah.
        </li>
        <li>
          Kerjakan Kuis untuk menguji pemahaman.
        </li>
        <li>
          Pilih salah satu dari 10 level Latihan dan masukkan
          jawaban berupa angka saja.
        </li>
      </ol>
    </div>

    <button
      className="tombol-utama"
      onClick={() => setHalaman("Beranda")}
    >
      ← Kembali ke Beranda
    </button>
  </section>
)}

          {halaman !== "Beranda" &&
            halaman !== "Materi" &&
            halaman !== "Contoh Soal" &&
            halaman !== "Kuis" &&
            halaman !== "Latihan" &&
            halaman !== "Profil" && (
              <section className="halaman-kosong">
                <span className="halaman-ikon">
                  {menu.find((item) => item.nama === halaman)?.ikon}
                </span>
                <h1>{halaman}</h1>
                <p>
                  Bagian ini akan kita bangun pada tahap berikutnya.
                </p>
                <button
                  className="tombol-utama"
                  onClick={() => setHalaman("Beranda")}
                >
                  ← Kembali ke Beranda
                </button>
              </section>
            )}
        </main>
      </div>

      <footer className="footer">
        <p>
          © 2026 PajakPintar | Media Pembelajaran Matematika SMP
        </p>
      </footer>
    </div>
  );
}

export default App;