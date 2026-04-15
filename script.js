console.log("Site LDT Equipamentos carregado");
document.addEventListener("DOMContentLoaded", function () {

    const imagens = document.querySelectorAll(".catalogo img");
    const modal = document.getElementById("modal");
    const imgExpandida = document.getElementById("imgExpandida");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");

    let index = 0;

    imagens.forEach((img, i) => {
        img.addEventListener("click", () => {
            modal.style.display = "flex";
            imgExpandida.src = img.src;
            index = i;
        });
    });

    document.querySelector(".fechar").onclick = () => {
        modal.style.display = "none";
    };

    next.onclick = () => {
        index = (index + 1) % imagens.length;
        imgExpandida.src = imagens[index].src;
    };

    prev.onclick = () => {
        index = (index - 1 + imagens.length) % imagens.length;
        imgExpandida.src = imagens[index].src;
    };

    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    };

});