// Kullanıcının ismini sor, konsola yazdır
const visitorName = prompt("What's your name?");
console.log("Visitor's name is: " + visitorName);

// Arka plan rengini değiştirme fonksiyonu
const colors = ["#ff6b6b", "#6bc5ff", "#6bff95", "#ffe66b", "#c56bff", "#ffb56b"];
let index = 0;

function changeBackgroundColor() {
  document.body.style.backgroundColor = colors[index];
  index = (index + 1) % colors.length;
}
