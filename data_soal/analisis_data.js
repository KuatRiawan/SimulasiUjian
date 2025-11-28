const bankSoalAnalisisData = [
  {
    q: "Perhatikan tabel di bawah ini!<br><table border='1' style='border-collapse:collapse; width:100%; margin-top:10px;' cellpadding='5'><tr><th>Kelompok 1</th><th>Kelompok 2</th><th>Kelompok 3</th></tr><tr><td>Siswa 1: 85</td><td>Siswa 6: 85</td><td>Siswa 11: 86</td></tr><tr><td>Siswa 2: 81</td><td>Siswa 7: 75</td><td>Siswa 12: 87</td></tr><tr><td>Siswa 3: 85</td><td>Siswa 8: 84</td><td>Siswa 13: 86</td></tr><tr><td>Siswa 4: 81</td><td>Siswa 9: 84</td><td>Siswa 14: 84</td></tr><tr><td>Siswa 5: 81</td><td>Siswa 10: 75</td><td>Siswa 15: 88</td></tr></table><br>Pada tabel tersebut terdapat 3 kelompok data dengan perolehan nilai mata kuliah Visualisasi data.<br>Jika, simpangan baku pada data kelompok 1=1,96, simpangan baku pada data kelompok 2=4,58, dan simpangan baku pada data kelompok 3=1,33, kelompok data yang memiliki data homogen adalah ....",
    o: [
      "Kelompok 1, memiliki rata-rata 82,6 dan nilai koefisien keragaman 2,37",
      "Kelompok 2, memiliki rata-rata 80,6 dan nilai koefisien keragaman 5,68",
      "Kelompok 3, memiliki rata-rata 86,2 dan nilai koefisien keragaman 1,54",
      "Kelompok 2, memiliki rata-rata 80,6 dan nilai koefisien keragaman 1,8"
    ],
    a: 2,
    exp: "Jawaban Benar: Kelompok 3, memiliki rata-rata 86,2 dan nilai koefisien keragaman 1,54"
  },
  {
    q: "Diketahui hasil penjualan buku di Toko A rata-rata sebesar 10.000.000 dengan simpangan baku sebesar 250.000. Sedangkan hasil penjualan pakaian di Toko A rata-rata sebesar 15.000.000 dengan simpangan baku sebesar 300.000.<br>Koefisien keragaman hasil penjualan buku dan pakaian di Toko A adalah ....",
    o: [
      "CV Toko A=2% dan CV Toko B=2,5%",
      "CV Toko A=2,5% dan CV Toko B=2%",
      "CV Toko A=2% dan CV Toko B=2%",
      "CV Toko A=2,5% dan CV Toko B=2,1%"
    ],
    a: 1,
    exp: "Jawaban Benar: CV Toko A=2,5% dan CV Toko B=2%"
  },
  {
    q: "Perhatikan langkah-langkah berikut!<br>I. Cari nilai pusat pada setiap bagian<br>II. Tentukan persamaan regresi yang terbentuk<br>III. Membagi seluruh hasil observasi menjadi beberapa bagian<br>IV. Mengurutkan seluruh hasil observasi mulai dari kecil ke besar<br>V. Memeriksa nilai residu (jumlah sisa variabel Y dikurangi nilai Y hasil estimasi)<br><br>Susunan tahapan yang perlu dilakukan untuk melakukan analisis regresi estimasi cara eksplorasi adalah...",
    o: [
      "I -> II -> III -> IV -> V",
      "IV -> III -> I -> II -> V",
      "V -> III -> II -> I -> IV",
      "II -> V -> III -> IV -> I"
    ],
    a: 1,
    exp: "Jawaban Benar: IV -> III -> I -> II -> V (Mengurutkan -> Membagi -> Cari nilai pusat -> Tentukan persamaan -> Periksa residu)"
  },
  {
    q: "PT. TokoBeli memiliki beberapa toko di beberapa kota, masing-masing toko mengeluarkan biaya untuk mendukung kegiatan promosi dan berharap melalui kegiatan promosi tersebut memperoleh hasil penjualan yang optimal. Setelah melakukan observasi, diperoleh data berikut:<br><table border='1' cellspacing='0' cellpadding='5' width='100%'><tr><th>Kota</th><th>Biaya Promosi (juta)</th><th>Hasil Penjualan (juta)</th></tr><tr><td>Jakarta</td><td>12</td><td>25</td></tr><tr><td>Bandung</td><td>7</td><td>14</td></tr><tr><td>Yogyakarta</td><td>4</td><td>10</td></tr><tr><td>Semarang</td><td>6</td><td>16</td></tr><tr><td>Surabaya</td><td>18</td><td>7</td></tr><tr><td>Pontianak</td><td>15</td><td>3</td></tr><tr><td>Medan</td><td>7</td><td>15</td></tr><tr><td>Makassar</td><td>9</td><td>7</td></tr><tr><td>Bali</td><td>5</td><td>8</td></tr></table><br>Berdasarkan data pada tabel di atas, nilai pusat dari masing-masing bagian adalah ....",
    o: [
      "XA=7, YA=14; XT=7, YT=5; XB=3, YB=5",
      "XA=5, YA=7; XT=7, YT=5; XB=5, YB=3",
      "XA=15, YA=7; XT=5, YT=3; XB=7, YB=14",
      "XA=15, YA=7; XT=7, YT=14; XB=5, YB=10"
    ],
    a: 3,
    exp: "Jawaban Benar: XA=15, YA=7; XT=7, YT=14; XB=5, YB=10"
  },
  {
    q: "Jika jenis data yang diamati berupa numerik, distribusi data simetris, dan tidak ada data pencilan (outlier), maka ukuran pemusatan data yang digunakan adalah ....",
    o: ["nilai rata-rata", "nilai median", "nilai modus", "nilai jangkauan"],
    a: 0,
    exp: "Jawaban Benar: nilai rata-rata"
  },
  {
    q: "Seorang peneliti melakukan analisis menggunakan variabel nilai ujian dan tugas mata kuliah Visual data serta lama waktu belajar. Terdapat siswa X yang tidak memiliki data untuk nilai tugas mata kuliah tersebut sehingga nilai pengamatan terhadap siswa X dihapus seluruhnya dari proses analisis karena tidak memiliki data lengkap untuk semua variabel.<br>Metode penanganan data hilang yang dilakukan oleh peneliti adalah ....",
    o: ["Pairwise deletion", "Listwise or case deletion", "Mean substitution", "Regression Imputation"],
    a: 1,
    exp: "Jawaban Benar: Listwise or case deletion"
  },
  {
    q: "Sekumpulan data yang diamati memiliki pola tertentu yang diplotkan, pola ini dinamakan sebaran atau distribusi data. Sebaran data diklasifikasi sebagai sebaran normal jika memenuhi sifat-sifat berikut, kecuali ....",
    o: ["Grafiknya selalu berada di atas sumbu x", "Bentuknya simetris pada x=μ", "Mempunyai lebih dari satu modus", "Luas grafiknya sama dengan satu unit persegi"],
    a: 2,
    exp: "Jawaban Benar: Mempunyai lebih dari satu modus (Karena distribusi normal hanya punya 1 modus)"
  },
  {
    q: "Perhatikan data berikut (Biaya Promosi vs Penjualan):<br>Jakarta(10,30), Bandung(7,14), Yogyakarta(4,10), Semarang(6,5), Surabaya(8,8), Pontianak(5,3), Medan(7,5), Makassar(9,7), Bali(5,8).<br>Berdasarkan data tersebut, pernyataan berikut yang paling tepat adalah ....",
    o: [
      "Range keseluruhan = 6; range bagian atas = 1",
      "Range keseluruhan = 6; range bagian atas = 2",
      "Range keseluruhan = 22; range bagian bawah = 20",
      "Range keseluruhan = 22; range bagian bawah = 2"
    ],
    a: 3,
    exp: "Jawaban Benar: Range keseluruhan = 22; range bagian bawah = 2"
  },
  {
    q: "Perhatikan langkah-langkah berikut!<br>I. Lakukan proses konversi teks menjadi angka<br>II. Aplikasikan metode analisis data untuk konversi teks<br>III. Normalisasi teks dengan menghilangkan perincian teks yang tidak relevan<br>IV. Interpretasikan hasil yang diperoleh sesuai konteks pada teks aslinya<br>V. Mengambil data yang akan dianalisis<br><br>Susun tahapan yang perlu dilakukan untuk melakukan analisis data teks adalah ....",
    o: [
      "IV -> I -> II -> III -> V",
      "III -> IV -> II -> I -> V",
      "V -> III -> I -> II -> IV",
      "III -> V -> II -> IV -> I"
    ],
    a: 2,
    exp: "Jawaban Benar: V -> III -> I -> II -> IV (Ambil Data -> Normalisasi -> Konversi -> Analisis -> Interpretasi)"
  },
  {
    q: "Perhatikan langkah-langkah berikut!<br>I. Refine<br>II. Filter<br>III. Mine<br>IV. Acquire<br>V. Interact<br>VI. Represent<br>VII. Parse<br><br>Susunan tahapan yang perlu dilakukan untuk melakukan proses visualisasi data agar data dapat memberikan gambaran yang jelas adalah ....",
    o: [
      "I -> IV -> II -> III -> V -> VI -> VII",
      "IV -> VII -> II -> III -> VI -> I -> V",
      "IV -> I -> V -> II -> III -> VI -> VII",
      "V -> III -> II -> IV -> I -> VI -> VII"
    ],
    a: 1,
    exp: "Jawaban Benar: IV -> VII -> II -> III -> VI -> I -> V (Acquire -> Parse -> Filter -> Mine -> Represent -> Refine -> Interact)"
  },
  {
    q: "Proses memberikan dan mencermati struktur data yang sesuai dan tepat pada data yang akan diolah merupakan salah satu proses visualisasi data yang perlu dilakukan. Proses tersebut dikenal dengan istilah ....",
    o: ["Parse", "Acquire", "Filter", "Mine"],
    a: 0,
    exp: "Jawaban Benar: Parse"
  },
  {
    q: "Dalam analisis regresi, variabel yang berperan sebagai faktor penyebab atau yang mempengaruhi variabel lain disebut ....",
    o: ["Variabel dependen (Y)", "Variabel independen (X)", "Variabel terikat", "Variabel kontor"],
    a: 1,
    exp: "Jawaban Benar: Variabel independen (X)"
  },
  {
    q: "Perhatikan tabel di bawah ini!<br><table border='1' cellspacing='0' cellpadding='5'><tr><td>Siswa 1: 120</td><td>Siswa 6: 100</td></tr><tr><td>Siswa 2: 125</td><td>Siswa 7: 105</td></tr><tr><td>Siswa 3: 110</td><td>Siswa 8: 100</td></tr><tr><td>Siswa 4: 115</td><td>Siswa 9: 115</td></tr><tr><td>Siswa 5: 140</td><td>Siswa 10: 130</td></tr></table><br>Pada tabel tersebut berisi data terkait dengan hasil tes IQ dari 10 siswa. Berdasarkan data tersebut, simpangan baku dari data tersebut adalah ....",
    o: ["115", "120", "125", "154"],
    a: 3,
    exp: "Jawaban Benar: 154"
  },
  {
    q: "Pada bentuk penyajian data yang menyajikan nilai kumulatif umumnya nilai data disajikan dalam sumbu horizontal dan sumbu vertikal merepresentasikan frekuensi kumulatif. Bentuk penyajian data tersebut adalah ....",
    o: ["Pie chart", "Scatter plot", "Bar graph", "Ogive"],
    a: 3,
    exp: "Jawaban Benar: Ogive"
  },
  {
    q: "Perhatikan tabel berikut!<br><table border='1' cellspacing='0' cellpadding='5'><tr><th>x</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr><tr><th>y</th><td>3</td><td>-3</td><td>-13</td><td>-27</td><td>-45</td></tr></table><br>Tentukan persamaan yang mewakili kumpulan data pada tabel di atas adalah ....",
    o: [
      "y = (x^2 Log(100))",
      "y = 5 - (x^2 log(100))",
      "y = 5 - (x log(100))",
      "y = (x log(100))"
    ],
    a: 2,
    exp: "Jawaban Benar: y = 5 - (x log(100))"
  },
  {
    q: "Jika diketahui suatu persamaan regresi hasil transformasi data adalah y = 0,946 - 0,097 In x, dimana nilai x adalah 7, maka nilai y adalah ....",
    o: ["0,846", "0,864", "0,946", "0,964"],
    a: 3,
    exp: "Jawaban Benar: 0,964"
  },
  {
    q: "Perhatikan data teks berikut:<br><code>Teks <- c(\"saya sedang mencoba menganalisis data teks.\", \"analisis data teks memanfaatkan paket quanteda.\")</code><br><br>Kemudian perhatikan perintah berikut:<br><code>library(tm)<br>tekscorpus <- Corpus(VectorSource(Teks))<br>tekscorpus <- tm_map(tekscorpus, tolower)</code><br><br>Tujuan perintah tersebut dibuat untuk ....",
    o: [
      "menghilangkan tanda baca",
      "mengkonversi huruf besar ke huruf kecil",
      "menghilangkan spasi",
      "menentukan kata dasar"
    ],
    a: 1,
    exp: "Jawaban Benar: mengkonversi huruf besar ke huruf kecil"
  },
  {
    q: "Jika nilai koefisien korelasi (r) mendekati atau sama dengan 0 menunjukkan ....",
    o: [
      "variabel-variabel bebas memberikan hampir semua informasi",
      "persamaan regresi estimasi tidak dapat menerangkan variabel Y",
      "tidak adanya hubungan linear antara variabel X dan Y",
      "hubungan sempurna positif"
    ],
    a: 2,
    exp: "Jawaban Benar: tidak adanya hubungan linear antara variabel X dan Y"
  },
  {
    q: "Perhatikan tabel nilai Visualisasi Data (Siswa 1: 73, Siswa 2: 80, ..., Siswa 10: 78).<br>Keragaman nilai pada mata kuliah Visualisasi data adalah ....",
    o: ["0,4", "4,8", "8,8", "76"],
    a: 1,
    exp: "Jawaban Benar: 4,8"
  },
  {
    q: "Berikut ini merupakan manfaat dari penggunaan wordcloud dalam menampilkan visualisasi data teks, kecuali ....",
    o: [
      "Mengoptimasi mesin pencari",
      "Meningkatkan kompleksitas penelusuran pola dalam data",
      "Mempercepat laporan bisnis",
      "Menyederhanakan teknik data"
    ],
    a: 1,
    exp: "Jawaban Benar: Meningkatkan kompleksitas penelusuran pola dalam data"
  },
  {
    q: "Analisis yang dilakukan terhadap sekumpulan data, tidak bias meskipun data hilang tersebut tidak ditangani, kondisi tersebut dapat sesuai terhadap kategori data hilang ....",
    o: ["Missing Completely at Random", "Missing at Random", "Missing Not at Random", "Jawaban A, B dan C tidak benar"],
    a: 0,
    exp: "Jawaban Benar: Missing Completely at Random"
  },
  {
    q: "Setelah melakukan observasi, diperoleh data berikut:<br>X: 4, 5, 6, 7, 8<br>Y: 6, 8, 9, 12, 15<br>Anda menggunakan persamaan regresi estimasi P=a+bX. Berapa nilai b yang diperoleh?",
    o: ["-3,2", "-2,2", "2,2", "3,2"],
    a: 2,
    exp: "Jawaban Benar: 2,2"
  },
  {
    q: "Salah satu cara untuk mengatasi masalah heteroskedastisitas pada kumpulan data yang akan dianalisis agar sebaran normal dapat terpenuhi adalah ....",
    o: ["Transformasi data", "Visualisasi data", "Distribusi data", "Homoskedastiistas"],
    a: 0,
    exp: "Jawaban Benar: Transformasi data"
  },
  {
    q: "Metode penanganan data hilang yang tidak menambahkan informasi baru tetapi hanya meningkatkan ukuran sampel dan mengarah pada underestimate error adalah ....",
    o: ["Pairwise deletion dan listwise", "Listwise or case deletion", "Mean substitution", "Regression Imputation dan mean substitution"],
    a: 3,
    exp: "Jawaban Benar: Regression Imputation dan mean substitution"
  },
  {
    q: "Tabel nilai siswa (6, 8, 9, 7, 8, 9, 6, 5, 5, 7).<br>Nilai median pada kumpulan nilai mata kuliah Visualisasi data adalah ....",
    o: ["6", "6,5", "6,9", "7"],
    a: 3,
    exp: "Jawaban Benar: 7"
  },
  {
    q: "Tabel nilai siswa (9, 8, 9, 7, 8, 9, 6, 5, 5, 7).<br>Nilai modus mata kuliah Visualisasi data adalah ....",
    o: ["6", "7", "8", "9"],
    a: 3,
    exp: "Jawaban Benar: 9"
  },
  {
    q: "Tabel nilai siswa (60, 80, 90, 70, 80, 90, 60, 50, 50, 70).<br>Nilai rata-rata mata kuliah Visualisasi data adalah ....",
    o: ["60", "65", "69", "70"],
    a: 2,
    exp: "Jawaban Benar: 69"
  },
  {
    q: "Diketahui kondisi hilangnya pengamatan:<br>I. Tidak terisinya pengamatan pada variabel penghasilan... dikarenakan responden tidak ingin mengisinya<br>II. Tidak terisinya pengamatan pada variabel jenis kelamin... karena adanya kerusakan pada sistem entri data<br><br>Pernyataan berikut yang benar adalah ....",
    o: [
      "Kedua kondisi tersebut merupakan contoh MCAR",
      "Kedua kondisi tersebut merupakan contoh MAR",
      "Kondisi I merupakan contoh MCAR sedangkan kondisi II merupakan contoh MNAR",
      "Kondisi I merupakan contoh MAR sedangkan kondisi II merupakan contoh MCAR"
    ],
    a: 3,
    exp: "Jawaban Benar: Kondisi I merupakan contoh MAR sedangkan kondisi II merupakan contoh MCAR"
  },
  {
    q: "Pernyataan berikut yang merupakan masalah yang ditimbulkan ketika terdapat data hilang pada suatu penelitian adalah ....",
    o: [
      "menurunkan galat baku namun tidak menyebabkan kesimpulan menjadi valid",
      "menurunkan galat baku dan menyebabkan kesimpulan menjadi valid",
      "meningkatkan galat baku dan menyebabkan kesimpulan menjadi tidak valid",
      "meningkatkan galat baku namun tidak menyebabkan kesimpulan menjadi tidak valid"
    ],
    a: 2,
    exp: "Jawaban Benar: meningkatkan galat baku dan menyebabkan kesimpulan menjadi tidak valid"
  },
  {
    q: "Berikut ini merupakan aktivitas-aktivitas yang dilakukan pada normalisasi teks, KECUALI ....",
    o: [
      "Mengkonversi huruf besar menjadi huruf kecil",
      "Mengganti kata-kata yang tidak memiliki arti",
      "Menghilangkan karakter yang tidak memiliki arti",
      "Menentukan kata dasar pada setiap kata"
    ],
    a: 3,
    exp: "Jawaban Benar: Menentukan kata dasar pada setiap kata"
  },
  {
    q: "Perhatikan tabel di bawah ini!<br><table border='1' cellspacing='0' cellpadding='5'><tr><th>Kelompok 1</th><th>Kelompok 2</th><th>Kelompok 3</th></tr><tr><td>Siswa 1: 65</td><td>Siswa 6: 85</td><td>Siswa 11: 60</td></tr><tr><td>Siswa 2: 70</td><td>Siswa 7: 85</td><td>Siswa 12: 60</td></tr><tr><td>Siswa 3: 75</td><td>Siswa 8: 84</td><td>Siswa 13: 63</td></tr><tr><td>Siswa 4: 80</td><td>Siswa 9: 85</td><td>Siswa 14: 60</td></tr><tr><td>Siswa 5: 85</td><td>Siswa 10: 85</td><td>Siswa 15: 60</td></tr></table><br>Simpangan baku: Kel 1=7,07; Kel 2=0,4; Kel 3=1,2. Kelompok data yang homogen adalah ....",
    o: [
      "Kelompok 1 (Rata 75, CV 0,23)",
      "Kelompok 2 (Rata 84,8, CV 5,68)",
      "Kelompok 3 (Rata 60,6, CV 1,98)",
      "Kelompok 2 (Rata 84,8, CV 0,47)"
    ],
    a: 3,
    exp: "Jawaban Benar: Kelompok 2, memiliki rata-rata 84,8 dan nilai koefisien keragaman 0,47"
  },
  {
    q: "Diketahui Desa A rata-rata pendapatan Rp1.250.000 (SB 20.000). Desa B rata-rata Rp1.500.000 (SB 25.000). Koefisien keragaman (CV) adalah ....",
    o: [
      "CV Desa A=0,6% dan CV Desa B=0,19%",
      "CV Desa A=1,6% dan CV Desa B=1,66%",
      "CV Desa A=1,6% dan CV Desa B=19,2%",
      "CV Desa A=16% dan CV Desa B=1,66%"
    ],
    a: 1,
    exp: "Jawaban Benar: CV Desa A=1,6% dan CV Desa B=1,66%"
  },
  {
    q: "Perhatikan langkah-langkah berikut!<br>I. Memeriksa nilai residu<br>II. Mengurutkan seluruh hasil observasi<br>III. Membagi seluruh hasil observasi menjadi beberapa bagian<br>IV. Cari nilai pusat pada setiap bagian<br>V. Tentukan persamaan regresi<br><br>Susun tahapan yang perlu dilakukan untuk melakukan analisis regresi estimasi cara eksplorasi adalah ....",
    o: [
      "I -> II -> III -> IV -> V",
      "II -> III -> IV -> V -> I",
      "V -> III -> II -> I -> V",
      "II -> V -> III -> IV -> I"
    ],
    a: 1,
    exp: "Jawaban Benar: II -> III -> IV -> V -> I"
  },
  {
    q: "Data TokoBeli (Biaya Promosi vs Penjualan).<br>Berdasarkan data pada tabel di atas (Jakarta 24,12; Bandung 7,14; dll), nilai pusat dari masing-masing bagian adalah ....",
    o: [
      "XA=7 YA=14; XT=8 YT=16; XB=9 YB=18",
      "XA=12 YA=7; XT=7 YT=5; XB=5 YB=12",
      "XA=9 YA=18; XT=5 YT=3; XB=7 YB=5",
      "XA=9 YA=18; XT=7 YT=14; XB=5 YB=10"
    ],
    a: 3,
    exp: "Jawaban Benar: XA=9, YA=18; XT=7, YT=14; XB=5, YB=10"
  },
  {
    q: "Ukuran yang digunakan untuk menganalisis pemencaran, penyimpangan atau keragaman suatu kelompok data, adalah ukuran ....",
    o: ["penyebaran data", "pemusatan data", "rata-rata data", "jangkauan data"],
    a: 0,
    exp: "Jawaban Benar: penyebaran data"
  },
  {
    q: "Terdapat siswa X yang tidak memiliki data untuk lama waktu belajar sehingga peneliti mengisi variabel tersebut dengan nilai tertentu berdasarkan nilai rataan dari sampel. Metode penanganan data hilang ini adalah ....",
    o: ["Pairwise deletion", "Listwise or case deletion", "Mean substitution", "Regression Imputation"],
    a: 2,
    exp: "Jawaban Benar: Mean substitution"
  },
  {
    q: "Sifat sebaran data Normal, KECUALI ....",
    o: ["Grafiknya selalu berada di atas sumbu x", "Bentuknya simetris pada x=μ", "Mempunyai satu modus yaitu x=μ", "Luas grafiknya sama dengan satu unit persegi (99% antara mu-sigma dan mu+sigma)"],
    a: 2,
    exp: "Jawaban Benar: Mempunyai satu modus yaitu x=μ (Catatan: Opsi C adalah pernyataan yang BENAR tentang distribusi normal. Jika soal minta 'Kecuali', kemungkinan ada kesalahan pada kunci atau pada opsi D tentang persentase sigma)."
  },
  {
    q: "Berdasarkan data TokoBeli (Jakarta 10,30; Bandung 7,14; ...). Pernyataan yang paling tepat adalah ....",
    o: [
      "range keseluruhan = 9; range bagian atas = 1",
      "range keseluruhan = 5; range bagian atas = 9",
      "range keseluruhan = 9; range bagian tengah = 2",
      "range keseluruhan = 9; range bagian bawah = 5"
    ],
    a: 3,
    exp: "Jawaban Benar: range keseluruhan = 9; range bagian bawah = 5"
  },
  {
    q: "Perhatikan langkah-langkah berikut!<br>I. Normalisasi teks<br>II. Aplikasikan metode analisis<br>III. Interpretasikan hasil<br>IV. Mengambil data<br>V. Lakukan proses konversi teks menjadi angka<br><br>Susunan tahapan yang perlu dilakukan untuk melakukan analisis data teks adalah ....",
    o: [
      "IV -> I -> V -> II -> III",
      "III -> IV -> II -> I -> V",
      "IV -> I -> V -> II -> III (Varian C)",
      "III -> V -> II -> IV -> I"
    ],
    a: 2,
    exp: "Jawaban Benar: IV -> I -> V -> II -> III (Ambil -> Normalisasi -> Konversi -> Analisis -> Interpretasi)"
  },
  {
    q: "Perhatikan langkah-langkah berikut! (Interact, Filter, Mine, Refine, Acquire, Represent, Parse).<br>Susunan tahapan visualisasi data yang benar adalah ....",
    o: [
      "I -> IV -> II -> III -> V -> VI -> VII",
      "V -> II -> IV -> III -> VI -> I -> VII",
      "IV -> I -> V -> II -> III -> VI -> VII",
      "V -> III -> II -> IV -> I -> VI -> VII"
    ],
    a: 1,
    exp: "Jawaban Benar: Acquire(V) -> Parse(VII) -> Filter(II) -> Mine(III) -> Represent(VI) -> Refine(IV) -> Interact(I)  (Catatan: Opsi B pada soal ini sepertinya menggunakan kode angka romawi yang diacak, sesuaikan dengan kunci B)."
  },
  {
    q: "Proses yang dilakukan untuk menentukan metode yang tepat terhadap data yang akan dianalisis merupakan salah satu proses visualisasi data. Proses tersebut dikenal dengan istilah ....",
    o: ["Parse", "Acquire", "Filter", "Mine"],
    a: 3,
    exp: "Jawaban Benar: Mine"
  },
  {
    q: "Metode analisis data kuantitatif yang digunakan untuk memahami hubungan antara variabel dependen dan independen adalah ....",
    o: ["Korelasi", "Regresi", "Varian", "Klaster"],
    a: 1,
    exp: "Jawaban Benar: Regresi"
  },
  {
    q: "Tabel Tinggi Badan Siswa (170, 173, 165, 175, 160, 169, 170, 180, 167, 171). Simpangan bakunya adalah ....",
    o: ["25", "26", "27", "28"],
    a: 2,
    exp: "Jawaban Benar: 27"
  },
  {
    q: "Bentuk penyajian data ini berfungsi untuk melihat perbandingan (dalam persentase atau proporsi). Bentuk penyajian data tersebut adalah ....",
    o: ["Pie chart", "Scatter plot", "Tabel frekuensi", "Bar Graph"],
    a: 0,
    exp: "Jawaban Benar: Pie chart"
  },
  {
    q: "Tabel x(1..5) y(8, 6, 4, 2, 0). Persamaan yang mewakili kumpulan data adalah ....",
    o: [
      "y = (x^2 Log(100))",
      "y = 10 - (x^2 log(100))",
      "y = 10 - (x log(100))",
      "y = (x log(100))"
    ],
    a: 2,
    exp: "Jawaban Benar: y = 10 - (x log(100))"
  },
  {
    q: "Jika persamaan regresi y = 0,856 - 0,087 In x. Jika x = 1000, maka y adalah ....",
    o: ["0,688", "0,595", "0,698", "0,786"],
    a: 3,
    exp: "Jawaban Benar: 0,786"
  },
  {
    q: "Perhatikan data teks: `Teks <- c(\"kalimat 1\", \"kalimat 2\")`. Jika perintah `length(Teks)` dijalankan, hasilnya adalah ....",
    o: ["1", "2", "12", "78"],
    a: 1,
    exp: "Jawaban Benar: 2"
  },
  {
    q: "Jika nilai koefisien determinasi (r²) mendekati atau sama dengan 0 menunjukkan ....",
    o: [
      "variabel bebas memberikan informasi lengkap",
      "persamaan regresi estimasi tidak dapat menerangkan variabel Y",
      "tidak adanya hubungan linear",
      "hubungan sempurna positif"
    ],
    a: 1,
    exp: "Jawaban Benar: persamaan regresi estimasi tidak dapat menerangkan variabel Y"
  },
  {
    q: "Tabel IQ 10 siswa (Lagi). Keragaman (Varian) dari data tersebut adalah ....",
    o: ["115", "120", "125", "154"],
    a: 3,
    exp: "Jawaban Benar: 154"
  },
  {
    q: "Manfaat wordcloud KECUALI ....",
    o: ["Mengoptimasi mesin pencari", "Menelusuri pola dalam data", "Mempercepat laporan bisnis", "Menyederhanakan masalah pelanggan"],
    a: 3,
    exp: "Jawaban Benar: Menyederhanakan masalah pelanggan"
  },
  {
    q: "Jika data hilang terjadi seluruhnya secara acak (tidak bergantung variabel apapun), mekanismenya adalah ....",
    o: ["Missing Completely at Random", "Missing at Random", "Missing Not at Random", "Salah semua"],
    a: 0,
    exp: "Jawaban Benar: Missing Completely at Random"
  },
  {
    q: "Data: X(4..8), Y(25,15,20,10,5). Persamaan P=a+bX. Nilai b adalah ....",
    o: ["-4,5", "-3,5", "3,5", "4,5"],
    a: 1,
    exp: "Jawaban Benar: -3,5"
  },
  {
    q: "Istilah terhadap varian data yang memiliki kesamaan varian dari sisaan untuk semua pengamatan adalah ....",
    o: ["Transformasi data", "Heteroskedastisitas", "Distribusi data", "Homoskedastiista"],
    a: 3,
    exp: "Jawaban Benar: Homoskedastiista (Homoskedastisitas)"
  },
  {
    q: "Metode penanganan data hilang yang menghasilkan nilai harapan, tapi underestimate error (tidak nambah info baru) adalah ....",
    o: ["Pairwise deletion", "Listwise", "Mean substitution", "Regression Imputation"],
    a: 3,
    exp: "Jawaban Benar: Regression Imputation"
  },
  {
    q: "Tabel nilai (6,8,9,8,8, 9,6,5,5,6). Mediannya adalah ....",
    o: ["6", "6,7", "6,9", "7"],
    a: 3,
    exp: "Jawaban Benar: 7"
  },
  {
    q: "Tabel nilai (60, 80... 60). Modus adalah ....",
    o: ["50", "60", "70", "80"],
    a: 1,
    exp: "Jawaban Benar: 60"
  },
  {
    q: "Tabel nilai (50, 87... 65). Rata-rata adalah ....",
    o: ["57,7", "67,7", "78,2", "88,2"],
    a: 1,
    exp: "Jawaban Benar: 67,7"
  },
  {
    q: "Kondisi I: Data hilang diduga berdasar variabel lain. Kondisi II: Sistem rusak. Pernyataan yang benar ....",
    o: ["Keduanya MCAR", "Keduanya MAR", "I=MAR, II=MCAR", "I=MCAR, II=MNAR"],
    a: 2,
    exp: "Jawaban Benar: Kondisi I merupakan contoh MAR sedangkan kondisi II merupakan contoh MCAR"
  },
  {
    q: "Dampak data hilang pada penelitian adalah ....",
    o: [
      "Menambah keterwakilan sampel",
      "Menambah keterwakilan sampel memperkuat generalisasi",
      "Dapat mengurangi keterwakilan sampel sehingga melemahkan generalisasi dari hasil",
      "Mengurangi keterwakilan memperkuat generalisasi"
    ],
    a: 2,
    exp: "Jawaban Benar: Dapat mengurangi keterwakilan sampel sehingga melemahkan generalisasi dari hasil"
  },
  {
    q: "Aktivitas normalisasi teks KECUALI ....",
    o: ["Konversi huruf kecil", "Ganti karakter", "Hapus kata stopword", "Menentukan kata dasar pada setiap kata"],
    a: 3,
    exp: "Jawaban Benar: Menentukan kata dasar pada setiap kata"
  },
  {
    q: "Tabel Kelompok 1,2,3 (Lagi). Simpangan baku: 7.07, 0.4, 1.2. Kelompok Homogen?",
    o: [
      "Kelompok 1 (Rata 75, CV 0.23)",
      "Kelompok 2 (Rata 84.8, CV 5.68)",
      "Kelompok 3 (Rata 60.6, CV 1.98)",
      "Kelompok 2 (Rata 84.8, CV 0.47)"
    ],
    a: 3,
    exp: "Jawaban Benar: Kelompok 2, memiliki rata-rata 84,8 dan nilai koefisien keragaman 0,47"
  },
  {
    q: "Penyajian data nilai kumulatif (Sumbu Y kumulatif) adalah ....",
    o: ["Pie chart", "Scatter plot", "Bar graph", "Ogive"],
    a: 3,
    exp: "Jawaban Benar: Ogive"
  },
  {
    q: "Kondisi I: Menolak isi. Kondisi II: Diduga variabel lain. Pernyataan yang benar ....",
    o: ["Keduanya MCAR", "Keduanya MAR", "I=MCAR, II=MAR", "I=MAR, II=MCAR"],
    a: 3,
    exp: "Jawaban Benar: Kondisi I merupakan contoh MAR sedangkan kondisi II merupakan contoh MCAR"
  },
  {
    q: "Penghapusan pengamatan data hilang hanya pada variabel yang dianalisis (bukan satu baris penuh) adalah ....",
    o: ["Pairwise deletion", "Listwise", "Mean substitution", "Regression"],
    a: 0,
    exp: "Jawaban Benar: Pairwise deletion"
  },
  {
    q: "Urutan tahapan visualisasi data (I. Acquire ... VII. Interact). Susunan yang benar ....",
    o: ["I -> V -> II -> III...", "VII -> II -> VI -> IV -> V -> III -> I", "I -> V -> II...", "III -> V -> II..."],
    a: 1,
    exp: "Jawaban Benar: VII -> II -> VI -> IV -> V -> III -> I (Note: Di soal asli, opsi B ini urutannya Acquire->Parse->... sesuai nomor romawi yang diacak)"
  },
  {
    q: "Dampak data hilang adalah ....",
    o: [
      "Galat baku mengecil, statistik mengecil",
      "Galat baku mengecil, statistik membesar",
      "Galat baku membesar, statistik mengecil",
      "Galat baku membesar, statistik membesar"
    ],
    a: 3,
    exp: "Jawaban Benar: Galat baku yang dihasilkan semakin membesar dan nilai statistik hitungnya akan cenderung membesar"
  },
  {
    q: "Data hilang yang disebabkan kejadian tak terukur (mekanisme) adalah ....",
    o: ["MCAR", "MAR", "Missing Not at Random", "Salah semua"],
    a: 2,
    exp: "Jawaban Benar: Missing Not at Random"
  },
  {
    q: "Manfaat wordcloud KECUALI ....",
    o: ["Optimasi mesin pencari", "Meningkatkan kompleksitas penelusuran pola dalam data", "Mempercepat laporan", "Menyederhanakan teknik"],
    a: 1,
    exp: "Jawaban Benar: Meningkatkan kompleksitas penelusuran pola dalam data"
  },
  {
    q: "Istilah terhadap varian data yang memiliki kesamaan varian dari sisaan untuk semua pengamatan adalah ....",
    o: ["Transformasi data", "Heteroskedastisitas", "Distribusi data", "Homoskedastisitas"],
    a: 3,
    exp: "Jawaban Benar: Homoskedastisitas"
  },
  {
    q: "Sifat sebaran normal, KECUALI ....",
    o: ["Grafik di bawah sumbu x", "Simetris x=mu", "Satu modus x=mu", "Luas 1"],
    a: 0,
    exp: "Jawaban Benar: Grafiknya selalu berada di bawah sumbu x (Ini SALAH, harusnya di atas)"
  },
  {
    q: "Tabel x(1..5) y(2,5,10,17,26). Persamaan?",
    o: ["y=x^3+1", "y=x^2+1", "y=x^2+Log(1)", "y=x^2-1"],
    a: 1,
    exp: "Jawaban Benar: y = x^2 + 1"
  },
  {
    q: "y = 0.946 - 0.097 ln x. x=5. y=?",
    o: ["0,846", "0,878", "0,946", "0,964"],
    a: 1,
    exp: "Jawaban Benar: 0,878"
  },
  {
    q: "X(4..8) Y(25..5). Nilai b?",
    o: ["-4,5", "-3,5", "3,5", "4,5"],
    a: 0,
    exp: "Jawaban Benar: -4,5"
  },
  {
    q: "Nilai pusat TokoBeli (Jakarta 10,30...)....",
    o: ["XA=7...", "XA=5...", "XA=9, YA=7; XT=7, YT=5; XB=5, YB=8", "XA=9, YA=8..."],
    a: 2,
    exp: "Jawaban Benar: C (XA=9, YA=7...)"
  },
  {
    q: "Tahapan Regresi Eksplorasi (Urutan I-V)...",
    o: ["I->II...", "IV->III->I->II->V", "V->III...", "II->V..."],
    a: 1,
    exp: "Jawaban Benar: B (IV->III->I->II->V)"
  },
  {
    q: "Range data TokoBeli (Lagi)....",
    o: ["Range=6...", "Range=6...", "Range=22, bawah=20", "Range=22, bawah=2"],
    a: 3,
    exp: "Jawaban Benar: Range keseluruhan = 22; range bagian bawah = 2"
  },
  {
    q: "Tahapan analisis teks (I. Normalisasi... V. Konversi)...",
    o: ["V->II...", "III->IV...", "V->III->I->II->IV", "III->V..."],
    a: 2,
    exp: "Jawaban Benar: C (V->III->I->II->IV)"
  },
  {
    q: "Metode prediksi hubungan antar variabel...",
    o: ["Transformasi", "Regresi", "Varian", "Klaster"],
    a: 1,
    exp: "Jawaban Benar: Regresi"
  },
  {
    q: "Metode data hilang: Nilai harapan, underestimate error...",
    o: ["Pairwise", "Listwise", "Mean substitution", "Regression Imputation"],
    a: 2,
    exp: "Jawaban Benar: Mean substitution (Catatan: Kunci dokumen C)"
  },
  {
    q: "r^2 mendekati 1 menunjukkan...",
    o: ["variabel bebas memberikan hampir semua informasi...", "persamaan tak menerangkan Y", "tidak ada hubungan", "variabel bebas tidak memberikan info"],
    a: 0,
    exp: "Jawaban Benar: variabel-variabel bebas memberikan hampir semua informasi..."
  },
  {
    q: "Tool visualisasi kinerja parameter tertentu...",
    o: ["Shiny", "Photoshop", "Dashboard", "Infografis"],
    a: 2,
    exp: "Jawaban Benar: Dashboard"
  },
  {
    q: "Aktivitas normalisasi teks KECUALI...",
    o: ["Huruf kecil", "Menambahkan efek huruf besar pada tiap awal kata", "Hilangkan karakter", "Kata dasar"],
    a: 1,
    exp: "Jawaban Benar: Menambahkan efek huruf besar pada tiap awal kata"
  },
  {
    q: "R: `tokens(Teks)`... Jumlah dokumen?",
    o: ["1", "2", "12", "78"],
    a: 1,
    exp: "Jawaban Benar: 2"
  },
  {
    q: "Keragaman nilai visualisasi (73...78)....",
    o: ["0,4", "4,8", "8,8", "76"],
    a: 1,
    exp: "Jawaban Benar: 4,8"
  },
  {
    q: "Simpangan baku nilai visualisasi (73...78)....",
    o: ["4,8", "4,8", "8,8", "8,8"],
    a: 0,
    exp: "Jawaban Benar: 4,8"
  },
  {
    q: "Kelas A(9,2) B(6,3). CV?",
    o: ["CV A=22.2% dan CV B=50%", "CV A=50%...", "CV A=450%...", "CV A=450%..."],
    a: 0,
    exp: "Jawaban Benar: CV A=22.2% dan CV B=50%"
  },
  {
    q: "Modus data (50, 87...)....",
    o: ["50", "65", "67.5", "70"],
    a: 0,
    exp: "Jawaban Benar: 50"
  },
  {
    q: "Ukuran letak (lokasi) adalah ukuran...",
    o: ["Penyebaran", "Pemusatan data", "Keragaman", "Jangkauan"],
    a: 1,
    exp: "Jawaban Benar: Pemusatan data"
  },
  {
    q: "Median data (5...6)....",
    o: ["5,5", "6", "6,5", "7"],
    a: 1,
    exp: "Jawaban Benar: 6"
  },
  {
    q: "Rata-rata data (50...65)....",
    o: ["57.7", "67.7", "78.2", "88.2"],
    a: 1,
    exp: "Jawaban Benar: 67.7"
  },
  {
    q: "Homogenitas Kelompok (Tabel lagi)...",
    o: ["Kel 1...", "Kel 2...", "Kel 3 (1.2)", "Kel 3 (0.8)"],
    a: 3,
    exp: "Jawaban Benar: Kelompok 3... nilai keragaman 0,8"
  },
  {
    q: "Penyajian item per kelas...",
    o: ["Pie", "Scatter", "Tabel frekuensi", "Line"],
    a: 2,
    exp: "Jawaban Benar: Tabel frekuensi"
  },
  {
    q: "Kondisi I: Menolak. Kondisi II: Rusak. Pernyataan...",
    o: ["MCAR", "MAR", "I=MCAR, II=MNAR", "I=MAR, II=MCAR"],
    a: 3,
    exp: "Jawaban Benar: Kondisi I merupakan contoh MAR sedangkan kondisi II merupakan contoh MCAR"
  },
  {
    q: "Hapus kasus jika data hilang satu variabel...",
    o: ["Pairwise", "Listwise or case deletion", "Mean", "Regression"],
    a: 1,
    exp: "Jawaban Benar: Listwise or case deletion"
  },
  {
    q: "Urutan visualisasi data (Interact...Acquire)....",
    o: ["...", "VII -> II -> VI -> IV...", "...", "..."],
    a: 1,
    exp: "Jawaban Benar: B"
  },
  {
    q: "Dampak data hilang (Galat)...",
    o: ["Mengecil...", "Mengecil...", "Membesar, statistik mengecil", "Membesar, statistik membesar"],
    a: 3,
    exp: "Jawaban Benar: Galat baku... membesar... statistik... membesar"
  },
  {
    q: "Data hilang acak total...",
    o: ["Missing Completely at Random", "MAR", "MNAR", "Salah semua"],
    a: 0,
    exp: "Jawaban Benar: Missing Completely at Random"
  },
  {
    q: "Manfaat Wordcloud KECUALI...",
    o: ["Optimasi", "Meningkatkan kompleksitas penelusuran pola dalam data", "Laporan", "Teknik"],
    a: 1,
    exp: "Jawaban Benar: Meningkatkan kompleksitas penelusuran pola dalam data"
  },
  {
    q: "Varian sisaan sama...",
    o: ["Transformasi", "Hetero", "Distribusi", "Homoskedastisitas"],
    a: 3,
    exp: "Jawaban Benar: Homoskedastisitas"
  },
  {
    q: "Sifat normal KECUALI...",
    o: ["Grafik di bawah sumbu x", "Simetris", "Satu modus", "Luas 1"],
    a: 0,
    exp: "Jawaban Benar: Grafiknya selalu berada di bawah sumbu x"
  },
  {
    q: "Tabel x(1..5) y(2,5,10...). Persamaan?",
    o: ["x^3+1", "y=x^2+1", "x^2+Log", "x^2-1"],
    a: 1,
    exp: "Jawaban Benar: y = x^2 + 1"
  },
  {
    q: "y=0.946-0.097 ln x (x=5). y=?",
    o: ["0,846", "0,878", "0,946", "0,964"],
    a: 1,
    exp: "Jawaban Benar: 0,878"
  },
  {
    q: "X(4..8) Y(25..5). Nilai b?",
    o: ["-4,5", "-3,5", "3,5", "4,5"],
    a: 0,
    exp: "Jawaban Benar: -4,5"
  },
  {
    q: "Nilai pusat TokoBeli (Jakarta 10,30...)....",
    o: ["XA=7...", "XA=5...", "XA=9, YA=7; XT=7, YT=5; XB=5, YB=8", "XA=9..."],
    a: 2,
    exp: "Jawaban Benar: C"
  },
  {
    q: "Urutan regresi eksplorasi (Lagi)....",
    o: ["...", "IV -> II -> I -> V -> I (Ops, lihat kunci)", "...", "..."],
    a: 1,
    exp: "Jawaban Benar: B (Urutan yang benar sesuai modul)"
  },
  {
    q: "Range TokoBeli (Lagi)....",
    o: ["Range=6...", "Range=6...", "Range=22...", "Range=22, bawah=2"],
    a: 3,
    exp: "Jawaban Benar: D"
  },
  {
    q: "Urutan analisis teks (Lagi)....",
    o: ["...", "...", "V -> III -> I -> II -> IV", "..."],
    a: 2,
    exp: "Jawaban Benar: C"
  },
  {
    q: "Metode prediksi hubungan...",
    o: ["Transformasi", "Regresi", "Varian", "Klaster"],
    a: 1,
    exp: "Jawaban Benar: Regresi"
  },
  {
    q: "Metode data hilang nilai harapan, underestimate error...",
    o: ["Pairwise", "Listwise", "Mean substitution", "Regression Imputation"],
    a: 2,
    exp: "Jawaban Benar: Mean substitution (Kunci C)"
  },
  {
    q: "r^2 mendekati 0...",
    o: ["...", "...", "tidak adanya hubungan linear antara variabel X dan Y", "..."],
    a: 2,
    exp: "Jawaban Benar: C"
  },
  {
    q: "Tool visualisasi kinerja...",
    o: ["Shiny", "Photoshop", "Dashboard", "Infografis"],
    a: 2,
    exp: "Jawaban Benar: Dashboard"
  },
  {
    q: "Normalisasi teks KECUALI...",
    o: ["...", "Menambahkan tanda baca pemisah setiap kata", "...", "..."],
    a: 1,
    exp: "Jawaban Benar: Menambahkan tanda baca pemisah setiap kata"
  },
  {
    q: "R: summary(corpus(Teks))...",
    o: ["1", "2", "12", "78"],
    a: 1,
    exp: "Jawaban Benar: 2"
  },
  {
    q: "Keragaman nilai (75,76...)....",
    o: ["0,4", "4,8", "6,2", "7,6"],
    a: 2,
    exp: "Jawaban Benar: 6,2"
  },
  {
    q: "Simpangan baku (75,76...)....",
    o: ["0,4", "4,8", "6,2", "7,6"],
    a: 3,
    exp: "Jawaban Benar: 7,6"
  },
  {
    q: "CV Kelas A(8,2) B(7,3)....",
    o: ["CV A=25% dan CV B=42,8%", "...", "...", "..."],
    a: 0,
    exp: "Jawaban Benar: A"
  },
  {
    q: "Modus (5,8,8...)....",
    o: ["5", "6", "6,5", "5 dan 8"],
    a: 0,
    exp: "Jawaban Benar: 5"
  },
  {
    q: "Ukuran seberapa jauh menyebar...",
    o: ["Penyebaran data", "Pemusatan", "Keragaman", "Jangkauan"],
    a: 0,
    exp: "Jawaban Benar: Penyebaran data"
  },
  {
    q: "Median (50,87...)....",
    o: ["50", "65", "67.5", "70"],
    a: 2,
    exp: "Jawaban Benar: 67.5"
  },
  {
    q: "Rata-rata (5...6)....",
    o: ["5,5", "6", "6,5", "7"],
    a: 3,
    exp: "Jawaban Benar: 7"
  },
  {
    q: "Homogenitas Kelompok (1,2,3 Lagi)....",
    o: ["...", "...", "Kel 3 (1.2)", "..."],
    a: 2,
    exp: "Jawaban Benar: C"
  },
  {
    q: "CV Kelas A(9,2) B(6,3)....",
    o: ["A=22.2%, B=50%", "...", "...", "..."],
    a: 0,
    exp: "Jawaban Benar: A"
  },
  {
    q: "Tahapan regresi eksplorasi (Lagi)...",
    o: ["...", "IV->V->II->III (Salah)", "...", "..."],
    a: 1,
    exp: "Jawaban Benar: B (Urutan sesuai modul)"
  },
  {
    q: "Nilai pusat TokoBeli (Lagi)...",
    o: ["...", "XA=7, YA=14; XT=6, YT=10; XB=7, YB=8", "...", "..."],
    a: 1,
    exp: "Jawaban Benar: B"
  },
  {
    q: "Ukuran menyebar...",
    o: ["Penyebaran data", "...", "...", "..."],
    a: 0,
    exp: "Jawaban Benar: Penyebaran data"
  },
  {
    q: "Hapus kasus sepenuhnya...",
    o: ["Pairwise", "Listwise or case deletion", "Mean", "Regression"],
    a: 1,
    exp: "Jawaban Benar: Listwise or case deletion"
  },
  {
    q: "Sifat sebaran normal KECUALI...",
    o: ["Grafik atas x", "Bentuknya asimetris pada x=mu", "...", "..."],
    a: 1,
    exp: "Jawaban Benar: Bentuknya asimetris pada x=μ"
  },
  {
    q: "Range TokoBeli (Lagi)...",
    o: ["...", "...", "...", "range keseluruhan=9; range bagian bawah=5"],
    a: 3,
    exp: "Jawaban Benar: D"
  },
  {
    q: "r mendekati 1...",
    o: ["...", "...", "...", "hubungan sempurna positif"],
    a: 3,
    exp: "Jawaban Benar: hubungan sempurna positif"
  },
  {
    q: "Urutan visualisasi data (Lagi)...",
    o: ["...", "V->II->IV->III->VI->I->VII (Acquire..)", "...", "..."],
    a: 1,
    exp: "Jawaban Benar: B"
  },
  {
    q: "Memperkaya grafik (visual encoding)...",
    o: ["Parse", "Represent", "Refine", "Mine"],
    a: 2,
    exp: "Jawaban Benar: Refine"
  },
  {
    q: "Analisis kuantitatif prediksi...",
    o: ["Transformasi", "Regresi", "Varian", "Klaster"],
    a: 1,
    exp: "Jawaban Benar: Regresi"
  },
  {
    q: "Simpangan baku (73...78)...",
    o: ["4,8", "4,8", "8,8", "8,8"],
    a: 0,
    exp: "Jawaban Benar: 4,8"
  },
  {
    q: "Penyajian item per kelas...",
    o: ["Pie", "Scatter", "Tabel frekuensi", "Line"],
    a: 2,
    exp: "Jawaban Benar: Tabel frekuensi"
  },
  {
    q: "Tabel x(1..5) y(2,8,18...). Persamaan?",
    o: ["...", "...", "...", "y=(x log(100)) (Kunci D)"],
    a: 3,
    exp: "Jawaban Benar: D"
  },
  {
    q: "y=0.946-0.097 ln x. x=5. y=?",
    o: ["0,846", "0,878", "0,946", "0,964"],
    a: 1,
    exp: "Jawaban Benar: 0,878"
  },
  {
    q: "R: `tokens(Teks)`...",
    o: ["1", "2", "12", "78"],
    a: 1,
    exp: "Jawaban Benar: 2"
  },
  {
    q: "r^2 mendekati 1...",
    o: ["variabel bebas memberikan hampir semua informasi...", "...", "...", "..."],
    a: 0,
    exp: "Jawaban Benar: A"
  },
  {
    q: "Keragaman (75,76...)....",
    o: ["0,4", "4,8", "6,2", "7,6"],
    a: 2,
    exp: "Jawaban Benar: 6,2"
  },
  {
    q: "Manfaat Wordcloud (Laporan bisnis)...",
    o: ["...", "mengambil poin penting melalui kata yang sering muncul...", "...", "..."],
    a: 1,
    exp: "Jawaban Benar: B"
  },
  {
    q: "Data hilang tak diukur...",
    o: ["MCAR", "MAR", "Missing Not at Random", "Salah semua"],
    a: 2,
    exp: "Jawaban Benar: Missing Not at Random"
  },
  {
    q: "X(3..7) Y(5..25). Nilai b?",
    o: ["3", "4", "5", "6"],
    a: 2,
    exp: "Jawaban Benar: 5"
  },
  {
    q: "Ubah skala data...",
    o: ["Transformasi data", "Visualisasi", "Distribusi", "Homoskedastisitas"],
    a: 0,
    exp: "Jawaban Benar: Transformasi data"
  },
  {
    q: "Kekurangan Pairwise Deletion...",
    o: ["Variabelnya akan memiliki statistik yang berbeda...", "Listwise", "Mean", "Regression"],
    a: 0,
    exp: "Jawaban Benar: Pairwise deletion"
  },
  {
    q: "Median (5..6)....",
    o: ["5,5", "6", "6,5", "7"],
    a: 1,
    exp: "Jawaban Benar: 6"
  },
  {
    q: "Modus (6,8...)....",
    o: ["5", "6", "7", "8"],
    a: 0,
    exp: "Jawaban Benar: 5"
  },
  {
    q: "Rata-rata (6...7)....",
    o: ["5", "6,7", "6,9", "7"],
    a: 2,
    exp: "Jawaban Benar: 6,9"
  },
  {
    q: "Kondisi I: Prediksi var lain. Kondisi II: Rusak. Pernyataan...",
    o: ["...", "...", "I=MAR, II=MCAR", "..."],
    a: 2,
    exp: "Jawaban Benar: Kondisi I merupakan contoh MAR sedangkan kondisi II merupakan contoh MCAR"
  },
  {
    q: "BUKAN masalah data hilang...",
    o: ["...", "...", "data hilang dapat meningkatkan keterwakilan sampel...", "..."],
    a: 2,
    exp: "Jawaban Benar: data hilang dapat meningkatkan keterwakilan sampel..."
  },
  {
    q: "Normalisasi teks KECUALI...",
    o: ["...", "Menghilangkan kata dasar pada setiap kata", "...", "..."],
    a: 1,
    exp: "Jawaban Benar: Menghilangkan kata dasar pada setiap kata"
  },
  {
    q: "Homogenitas (Kel 1,2,3)....",
    o: ["...", "...", "Kel 3 (1,2)", "..."],
    a: 2,
    exp: "Jawaban Benar: C"
  },
  {
    q: "Penyajian kumulatif...",
    o: ["...", "...", "...", "Ogive"],
    a: 3,
    exp: "Jawaban Benar: Ogive"
  },
  {
    q: "Kondisi I: Menolak. Kondisi II: Diduga. Pernyataan...",
    o: ["...", "...", "I=MCAR, II=MAR", "I=MAR, II=MCAR"],
    a: 2,
    exp: "Jawaban Benar: Kondisi I merupakan contoh MCAR sedangkan kondisi II merupakan contoh MAR (Kunci C)"
  },
  {
    q: "Hapus hanya variabel analisis...",
    o: ["Pairwise deletion", "Listwise", "Mean", "Regression"],
    a: 0,
    exp: "Jawaban Benar: Pairwise deletion"
  },
  {
    q: "Urutan visualisasi (I. Acquire...)...",
    o: ["I->V->II->III...", "VII->II->VI->IV...", "...", "..."],
    a: 1,
    exp: "Jawaban Benar: B"
  }
];