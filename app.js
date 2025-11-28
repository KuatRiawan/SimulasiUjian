// app.js - VERSI FIX (Mode Latihan + Navigasi Warna)

// Variabel Global
let currentKey = "basisdata"; 
let currentQuestions = [];
let userAnswers = [];
let currentIndex = 0;
let timeLeft = 0;
let timerInterval;

// Konfigurasi Database (Pastikan nama variabel SAMA dengan di file data_soal)
const databases = {
    "basisdata": { name: "Basis Data", data: (typeof bankSoalBasisData !== 'undefined') ? bankSoalBasisData : [], time: 90 },
    "analisisdata": { name: "Analisis & Visualisasi Data", data: (typeof bankSoalAnalisisData !== 'undefined') ? bankSoalAnalisisData : [], time: 120 },
    "algoritma": { name: "Algoritma & Pemrograman", data: (typeof bankSoalAlgoritma !== 'undefined') ? bankSoalAlgoritma : [], time: 60 },
    "prosesbisnis": { name: "Proses Bisnis", data: (typeof bankSoalProsesBisnis !== 'undefined') ? bankSoalProsesBisnis : [], time: 60 },
    "sim": { name: "Sistem Info. Manajemen", data: (typeof bankSoalSIM !== 'undefined') ? bankSoalSIM : [], time: 75 },
    "kewirausahaan": { name: "Kewirausahaan Digital", data: (typeof bankSoalKewirausahaan !== 'undefined') ? bankSoalKewirausahaan : [], time: 75 }
};

// --- FUNGSI UTAMA ---

function selectSubject(key, element) {
    currentKey = key;
    document.querySelectorAll('.subject-card').forEach(el => el.classList.remove('active'));
    if (element) element.classList.add('active');
}

function startQuiz() {
    const selectedDB = databases[currentKey];
    
    if (!selectedDB || selectedDB.data.length === 0) {
        // Fallback Data Dummy jika file belum ada (Supaya tidak error total)
        currentQuestions = [
            { q: "Contoh Soal: Ibukota Indonesia?", o: ["Bandung", "Surabaya", "Jakarta", "Medan"], a: 2, exp: "Jakarta adalah ibukota negara." },
            { q: "Contoh Soal: 2 + 2 = ?", o: ["3", "4", "5", "6"], a: 1, exp: "Hasilnya 4." }
        ];
        alert("⚠️ File data soal belum ditemukan. Menggunakan mode contoh (Dummy Data).");
    } else {
        currentQuestions = selectedDB.data;
    }

    document.getElementById('active-subject-name').innerText = selectedDB.name;
    timeLeft = selectedDB.time * 60;
    userAnswers = new Array(currentQuestions.length).fill(null);
    currentIndex = 0;
    
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.add('hidden');
    
    generateNav();
    loadQuestion(0);
    
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);
}

function generateNav() {
    const grid = document.getElementById('nav-grid');
    grid.innerHTML = "";
    currentQuestions.forEach((_, idx) => {
        const btn = document.createElement('div');
        btn.className = 'nav-item';
        btn.innerText = idx + 1;
        btn.id = 'nav-' + idx;
        btn.onclick = () => loadQuestion(idx);
        grid.appendChild(btn);
    });
}

function loadQuestion(idx) {
    currentIndex = idx;
    const q = currentQuestions[idx];
    
    // Update UI
    document.getElementById('q-number-display').innerText = idx + 1;
    document.getElementById('question-text').innerHTML = q.q; 
    
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    const explanation = document.getElementById('explanation-box');
    
    const savedAnswer = userAnswers[idx];
    const isAnswered = savedAnswer !== null;

    // Tampilkan Pembahasan jika sudah dijawab
    if (isAnswered) {
        explanation.style.display = 'block';
        document.getElementById('explanation-text').innerHTML = q.exp;
    } else {
        explanation.style.display = 'none';
    }

    // Render Pilihan
    q.o.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = opt;
        
        if (isAnswered) {
            btn.disabled = true;
            if (i === q.a) {
                btn.classList.add('actual-correct'); // Kunci Jawaban (Selalu Hijau)
                if (savedAnswer === i) btn.classList.add('user-correct');
            } else if (i === savedAnswer) {
                btn.classList.add('user-wrong'); // Jawaban User Salah (Merah)
            }
        } else {
            btn.onclick = () => submitAnswer(i);
        }
        container.appendChild(btn);
    });

    // Update Navigasi
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('current'));
    document.getElementById('nav-' + idx).classList.add('current');
    
    // Tombol Prev/Next Logic
    document.getElementById('btn-prev').disabled = idx === 0;
    
    const nextBtn = document.getElementById('btn-next');
    if (idx === currentQuestions.length - 1) {
        nextBtn.innerHTML = "Selesai";
        nextBtn.className = "btn btn-finish-main";
        nextBtn.onclick = confirmFinish;
    } else {
        nextBtn.innerHTML = "Selanjutnya ❯";
        nextBtn.className = "btn btn-next"; // Kembali ke warna abu
        nextBtn.onclick = nextQuestion;
    }
}

function submitAnswer(choice) {
    userAnswers[currentIndex] = choice;
    const q = currentQuestions[currentIndex];
    
    // Update Warna Grid Navigasi (Langsung Merah/Hijau)
    const navItem = document.getElementById('nav-' + currentIndex);
    if (choice === q.a) {
        navItem.classList.add('correct');
    } else {
        navItem.classList.add('wrong');
    }
    
    loadQuestion(currentIndex); // Reload untuk tampilkan pembahasan
}

function nextQuestion() {
    if (currentIndex < currentQuestions.length - 1) loadQuestion(currentIndex + 1);
}

function prevQuestion() {
    if (currentIndex > 0) loadQuestion(currentIndex - 1);
}

function updateTimer() {
    timeLeft--;
    if (timeLeft < 0) {
        clearInterval(timerInterval);
        finishQuiz();
        return;
    }
    const m = Math.floor(timeLeft / 60);
    const s = timeLeft % 60;
    document.getElementById('timer').innerText = `${m}:${s<10?'0':''}${s}`;
}

function confirmFinish() {
    if(confirm("Yakin ingin mengakhiri latihan ini?")) {
        finishQuiz();
    }
}

function finishQuiz() {
    clearInterval(timerInterval);
    document.querySelector('.main-container').style.display = 'none';
    document.querySelector('.header-bar').style.display = 'none';
    document.getElementById('result-screen').classList.remove('hidden');
    
    let correct = 0;
    currentQuestions.forEach((q, i) => {
        if(userAnswers[i] === q.a) correct++;
    });
    
    const score = currentQuestions.length === 0 ? 0 : Math.round((correct / currentQuestions.length) * 100);
    
    document.getElementById('result-subject').innerText = document.getElementById('active-subject-name').innerText;
    document.getElementById('final-score').innerText = score;
    document.getElementById('correct-count').innerText = correct;
    document.getElementById('total-count-result').innerText = currentQuestions.length;
    
    let msg = score >= 80 ? "Luar Biasa!" : score >= 60 ? "Cukup Baik" : "Perlu Belajar Lagi";
    document.getElementById('feedback-msg').innerText = msg;
}