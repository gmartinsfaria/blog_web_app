document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todas as imagens com a classe 'img-btn'
    const images = document.querySelectorAll(".img-btn");
    
    // Adiciona um event listener para cada imagem
    images.forEach(image => {
        image.addEventListener("click", function() {
            // Remove a classe 'bordered' de todas as imagens
            images.forEach(img => img.classList.remove("bordered"));
            // Adiciona a classe 'bordered' à imagem clicada
            this.classList.add("bordered");
        });
    });
});

