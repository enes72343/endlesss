// Devamını Oku Butonu
document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        const fullContent = this.previousElementSibling;
        fullContent.classList.toggle('visible');

        // Buton metnini değiştir
        if (fullContent.classList.contains('visible')) {
            this.innerHTML = 'Daha Az Göster <i class="fas fa-arrow-up"></i>';
        } else {
            this.innerHTML = 'Devamını Oku <i class="fas fa-arrow-right"></i>';
        }
    });
});
