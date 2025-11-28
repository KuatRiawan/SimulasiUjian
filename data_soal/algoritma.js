const bankSoalAlgoritma = [
  {
    q: "Bahasa Pemrograman Java, pertama kali dikembangkan oleh ...",
    o: ["Edsger W. Dijkstra", "James Watt", "James Gosling", "Blaise Pascal"],
    a: 2,
    exp: "James Gosling (Sun Microsystems) adalah bapak bahasa pemrograman Java."
  },
  {
    q: "Perhatikan potongan kode program berikut:<br><pre>public class Main {\n  public static void main(String[] args) {\n    int x = 10;\n    if (x >= 10) {\n      x += 7;\n    } else {\n      x -= 2;\n    }\n    System.out.println(x);\n  }\n}</pre>Output dari program di atas adalah...",
    o: ["10", "8", "17", "Error"],
    a: 2,
    exp: "Nilai awal x=10. Kondisi (x>=10) bernilai TRUE. Maka x = 10 + 7 = 17."
  },
  {
    q: "Algoritma adalah deskripsi dari suatu prosedur yang berakhir dengan sebuah output. Definisi tersebut dikemukakan oleh...",
    o: ["Abu Ja'far Muhammad Ibnu Musa Al-Khawarizmi", "Donald E. Knuth", "David Bolton", "Stone dan Knuth"],
    a: 1,
    exp: "Donald E. Knuth adalah pakar ilmu komputer yang mendefinisikan algoritma secara formal."
  },
  {
    q: "Bahasa pemrograman yang berkembang dari generasi ke-3 hingga ke-5, kecenderungan sintaksnya sudah menggunakan pendekatan bahasa manusia, diklasifikasikan sebagai...",
    o: ["Bahasa Tingkat Rendah", "Bahasa Tingkat Menengah", "Bahasa Tingkat Tinggi", "Bahasa Visual"],
    a: 2,
    exp: "High-Level Language (Tingkat Tinggi) menggunakan bahasa yang mudah dimengerti manusia (seperti Java, Python)."
  },
  {
    q: "Perhatikan tabel logika berikut:<br>A = true, B = false.<br>Hasil dari <code>A && B</code> adalah...",
    o: ["true", "false", "null", "error"],
    a: 1,
    exp: "Operator AND (&&) hanya bernilai true jika KEDUA operan bernilai true."
  },
  {
    q: "Perhatikan kode berikut:<br><pre>String sepeda[] = new String[4];\nsepeda[0] = \"Sepeda Santai\";\n...\ntry {\n  System.out.println(sepeda[4]);\n} catch (Exception e) {\n  System.out.println(\"Awas!\");\n} finally {\n  System.out.println(\"Selesai\");\n}</pre>Apa yang terjadi jika kita mengakses indeks ke-4?",
    o: ["Mencetak 'Sepeda Ontel'", "Mencetak 'Awas!' lalu 'Selesai'", "Hanya mencetak 'Awas!'", "Program berhenti total"],
    a: 1,
    exp: "Array size 4 memiliki indeks 0-3. Mengakses indeks 4 menyebabkan Exception. Blok `catch` dieksekusi ('Awas!'), lalu `finally` dieksekusi ('Selesai')."
  },
  {
    q: "Yang BUKAN termasuk operator Bitwise adalah...",
    o: ["^", "|", "&", "||"],
    a: 3,
    exp: "<code>||</code> adalah operator Logika OR, bukan Bitwise."
  },
  {
    q: "Variabel yang dideklarasikan di dalam class tetapi di luar method, dan memiliki nilai default 0, disebut...",
    o: ["Variabel Instance", "Variabel Lokal", "Variabel Statis", "Variabel Konstanta"],
    a: 0,
    exp: "Variabel Instance (milik objek) diinisialisasi otomatis dengan nilai default (0 untuk int)."
  },
  {
    q: "Pernyataan berikut merupakan kekurangan bahasa Java, KECUALI...",
    o: ["Tidak kompatibel dengan beberapa platform", "Terlalu boros memori", "Mudah didekompilasi", "Penggunaan variabel tidak terlalu ketat"],
    a: 3,
    exp: "Java adalah <i>strongly typed language</i>, penggunaan variabelnya justru SANGAT ketat. Jadi opsi D bukan sifat Java."
  },
  {
    q: "Untuk membuat subclass (turunan) dari sebuah SuperClass dalam Java, kata kunci yang digunakan adalah...",
    o: ["implements", "extends", "super", "this"],
    a: 1,
    exp: "Keyword <code>extends</code> digunakan untuk pewarisan (inheritance)."
  },
  {
    q: "Cara mengelola sekelompok class atau interface berdasarkan kemiripan fungsinya dalam folder tertentu disebut...",
    o: ["Package", "Library", "Import", "Method"],
    a: 0,
    exp: "Package adalah mekanisme pengelompokan class/interface."
  },
  {
    q: "Perhatikan kode array berikut:<br><pre>int[] numbers = {1, 4, 5, 8};\nfor(int i=0; i<numbers.length; i++) {\n  if(numbers[i] % 2 == 0) {\n    System.out.println(numbers[i]);\n  }\n}</pre>Outputnya adalah...",
    o: ["1, 5", "4, 8", "1, 4, 5, 8", "Error"],
    a: 1,
    exp: "Kode mencetak bilangan genap (modulus 2 == 0). Angka genap adalah 4 dan 8."
  },
  {
    q: "Fungsi untuk mencari nilai mutlak (absolute) pada library Math Java adalah...",
    o: ["cbrt", "sqrt", "abs", "min"],
    a: 2,
    exp: "<code>Math.abs()</code> mengembalikan nilai positif."
  },
  {
    q: "Perhatikan loop berikut:<br><pre>int i = 12;\ndo {\n  i += 3;\n  System.out.println(i);\n  i++;\n} while (i < 20);</pre>Jika batas while adalah 20, berapa kali loop berjalan?",
    o: ["1 kali", "2 kali", "3 kali", "Infinite loop"],
    a: 1,
    exp: "i=12 -> +3=15 (Cetak), i++=16. (16<20 True).<br>i=16 -> +3=19 (Cetak), i++=20. (20<20 False). Stop. Total 2 kali."
  },
  {
    q: "Fungsi untuk menggabungkan dua string pada Java adalah...",
    o: ["charAt()", "valueOf()", "concat()", "length()"],
    a: 2,
    exp: "<code>concat()</code> atau operator <code>+</code> digunakan untuk penggabungan string."
  },
  {
    q: "Untuk mengetahui jumlah karakter (panjang) dalam sebuah String, fungsi yang digunakan adalah...",
    o: ["len", "length()", "size()", "count()"],
    a: 1,
    exp: "Pada String Java menggunakan method <code>.length()</code>."
  },
  {
    q: "Class StringBuffer memiliki berapa konstruktor utama?",
    o: ["1", "2", "3", "4"],
    a: 2,
    exp: "Tiga konstruktor: StringBuffer(), StringBuffer(int capacity), StringBuffer(String str)."
  },
  {
    q: "Metode pada StringBuffer untuk menyisipkan string di posisi tertentu adalah...",
    o: ["append", "delete", "insert", "replace"],
    a: 2,
    exp: "<code>insert(offset, str)</code> menyisipkan string."
  },
  {
    q: "Simbol flowchart belah ketupat (diamond) digunakan untuk...",
    o: ["Proses", "Pengambilan Keputusan (Decision)", "Input/Output", "Terminator"],
    a: 1,
    exp: "Belah ketupat melambangkan kondisi percabangan (Ya/Tidak)."
  },
  {
    q: "Kelemahan utama dari penggunaan Flowchart untuk program kompleks adalah...",
    o: ["Sulit dibaca programmer", "Memakan banyak tempat/halaman", "Tidak ada standar simbol", "Hanya bisa untuk bahasa C"],
    a: 1,
    exp: "Untuk logika yang sangat rumit, flowchart menjadi sangat panjang dan terpecah-pecah di banyak halaman."
  },
  {
    q: "Bahasa pemrograman yang disebut sebagai Bahasa Mesin (Machine Language) digolongkan dalam...",
    o: ["Bahasa Tingkat Tinggi", "Bahasa Tingkat Menengah", "Bahasa Tingkat Rendah", "Bahasa Visual"],
    a: 2,
    exp: "Low-Level Language (Bahasa mesin/Assembly) berhubungan langsung dengan hardware."
  },
  {
    q: "Perhatikan kode:<br><pre>String s1 = \"Java\";\nString s2 = \"java\";\nboolean b = s1.equals(s2);</pre>Nilai b adalah...",
    o: ["true", "false", "error", "null"],
    a: 1,
    exp: "Method <code>equals</code> bersifat Case Sensitive. 'Java' tidak sama dengan 'java'."
  },
  {
    q: "Perhatikan kode:<br><pre>int x=0;\ndo {\n  System.out.print(x);\n  x += 2;\n} while (x < 8);</pre>Berapa kali loop berjalan?",
    o: ["3", "4", "5", "6"],
    a: 1,
    exp: "x=0 (Cetak), x=2.<br>x=2 (Cetak), x=4.<br>x=4 (Cetak), x=6.<br>x=6 (Cetak), x=8. (Stop). Total 4 kali."
  },
  {
    q: "Fungsi <code>Math.round(float a)</code> pada Java digunakan untuk...",
    o: ["Mencari nilai mutlak", "Mencari akar kuadrat", "Membulatkan nilai", "Mencari nilai minimum"],
    a: 2,
    exp: "Round = Membulatkan ke bilangan bulat terdekat."
  },
  {
    q: "Untuk menghapus spasi di awal dan akhir String, gunakan fungsi...",
    o: ["trim()", "split()", "strip()", "cut()"],
    a: 0,
    exp: "<code>trim()</code> menghapus whitespace di ujung string."
  },
  {
    q: "Apa yang dimaksud dengan konsep OOP pada Java?",
    o: ["Pemrograman berbasis fungsi", "Pemrograman menggunakan objek dan kelas", "Pemrograman skrip", "Pemrograman prosedural"],
    a: 1,
    exp: "OOP (Object Oriented Programming) berbasis pada Class dan Object."
  },
  {
    q: "Manakah pernyataan yang benar tentang Pseudocode?",
    o: ["Harus sesuai sintaks Java", "Hanya untuk profesional", "Tidak perlu sintaks ketat, fokus logika", "Tidak bisa untuk program kompleks"],
    a: 2,
    exp: "Pseudocode adalah kode semu yang bebas sintaks untuk merancang logika."
  },
  {
    q: "Simbol flowchart persegi panjang digunakan untuk...",
    o: ["Input", "Output", "Proses", "Decision"],
    a: 2,
    exp: "Persegi panjang = Proses (perhitungan/aksi)."
  },
  {
    q: "Tipe data yang paling cocok untuk menampung nilai Logika (Benar/Salah) adalah...",
    o: ["int", "char", "boolean", "float"],
    a: 2,
    exp: "Boolean hanya bernilai true atau false."
  },
  {
    q: "Pada array 2D <code>int arr[][] = {{2,7}, {3,6}};</code>, bagaimana cara mencetak angka 7?",
    o: ["arr[0][0]", "arr[0][1]", "arr[1][0]", "arr[1][1]"],
    a: 1,
    exp: "Baris ke-0, Kolom ke-1."
  }
];