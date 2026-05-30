const text = "Hello, I'm Souh Xin (Carina)";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    document.querySelector(".typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 120);
  }
}

typeEffect();