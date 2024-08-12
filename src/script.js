const stars = document.querySelectorAll(".star");
const starRating = document.querySelector(".star-rating");

let ratingAmount = 0;

stars.forEach((star) => {
  star.addEventListener("click", () => {
    ratingAmount = star.dataset.value;
    updateStars();
    showMessage(star.dataset.value);
  });

  star.addEventListener("mouseover", () => {
    updateHighlight(star.dataset.value);
  });

  star.addEventListener("mouseout", () => {
    updateStars();
  });
});

function updateStars() {
  stars.forEach((star) => {
    star.classList.remove("selected", "highlighted");
    if (star.dataset.value <= ratingAmount) {
      star.classList.add("selected");
    }
  });
}

function updateHighlight(rating) {
  stars.forEach((star) => {
    if (star.dataset.value <= rating) {
      star.classList.add("highlighted");
    }
  });
}

function showMessage(rating) {
  if (rating === "1") {
    starRating.innerHTML =
      "Lamentamos saber que você teve uma experiência ruim. Gostaríamos de saber mais sobre o que aconteceu e como podemos consertar as coisas.";
  }

  if (rating === "2") {
    starRating.innerHTML =
      "Pedimos desculpas pelo inconveniente que você experimentou. Agradecemos seu feedback e gostaríamos de trabalhar com você para resolver quaisquer problemas.";
  }

  if (rating === "3") {
    starRating.innerHTML =
      "Obrigado pelo seu feedback. Lamentamos saber que sua experiência não foi perfeita. Gostaríamos de saber mais sobre suas preocupações para ver como podemos melhorar.";
  }

  if (rating === "4") {
    starRating.innerHTML =
      "Obrigado pelo seu feedback positivo! Ficamos felizes em saber que você teve uma ótima experiência e agradecemos seu apoio.";
  }

  if (rating === "5") {
    starRating.innerHTML =
      "Excelente! Ficamos felizes em saber que você teve uma experiência tão positiva. Obrigado por escolher nosso produto/serviço.";
  }
}
