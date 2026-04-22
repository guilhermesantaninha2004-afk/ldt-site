console.log("Site LDT Equipamentos carregado");
document.addEventListener("DOMContentLoaded", function () {

    const imagens = document.querySelectorAll(".catalogo img:not(.nao-expandir)");
    const modal = document.getElementById("modal");
    const imgExpandida = document.getElementById("imgExpandida");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");

    let index = 0;

    imagens.forEach((img, i) => {
        img.addEventListener("click", () => {

            if (img.classList.contains("nao-expandir")) return;
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
    document.addEventListener("keydown", (e) => {

        // só funciona se o modal estiver aberto
        if (modal.style.display !== "flex") return;

        if (e.key === "ArrowRight") {
            index = (index + 1) % imagens.length;
            imgExpandida.src = imagens[index].src;
        }

        if (e.key === "ArrowLeft") {
            index = (index - 1 + imagens.length) % imagens.length;
            imgExpandida.src = imagens[index].src;
        }

        if (e.key === "Escape") {
            modal.style.display = "none";
        }

    });
});
