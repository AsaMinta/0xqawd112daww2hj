const passwordInput = document.getElementById('password-input');
const loginBtn = document.getElementById('login-btn');
const errorMsg = document.getElementById('error-msg');
const lockScreen = document.getElementById('lock-screen');
const mainContent = document.getElementById('main-content');
const lockBtn = document.getElementById('lock-btn');
const bgVideo = document.getElementById('bg-video');
const overlay = document.querySelector('.overlay');

const correctPassword = "LL0x310109LainIwaku";

function checkPassword() {
    if (passwordInput.value === correctPassword) {
        lockScreen.style.display = 'none';
        mainContent.classList.remove('hidden');
        errorMsg.style.display = 'none';
        passwordInput.value = '';
        
        // Tampilkan dan mainkan video
        bgVideo.classList.remove('hidden');
        overlay.classList.remove('hidden');
        bgVideo.play();
    } else {
        errorMsg.style.display = 'block';
    }
}

loginBtn.addEventListener('click', checkPassword);
passwordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkPassword();
});

// Tombol kunci kembali
lockBtn.addEventListener('click', () => {
    mainContent.classList.add('hidden');
    lockScreen.style.display = 'flex';
    
    // Sembunyikan dan pause video
    bgVideo.classList.add('hidden');
    overlay.classList.add('hidden');
    bgVideo.pause();
    bgVideo.currentTime = 0; // Reset ke awal
});