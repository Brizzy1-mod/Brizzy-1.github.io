// Contoh: Alert saat halaman dimuat
window.onload = function() {
    alert("Website berhasil dimuat!");
};

// Contoh: Tombol interaktif
document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('#hero');
    heroSection.addEventListener('click', () => {
        heroSection.style.backgroundColor = '#ddd';
    });
});