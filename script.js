document.getElementById('year').textContent = new Date().getFullYear();
  window.addEventListener('load', function() {
            setTimeout(function() {
                const logoOverlay = document.getElementById('logoOverlay');
                logoOverlay.classList.add('fade-out');
                
                setTimeout(function() {
                    logoOverlay.remove();
                }, 1500);
            }, 2000);
        });
        
        const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".carousel-slide");
const dotsContainer = document.querySelector(".carousel-dots");

let index = 0;
let startX = 0;
let moveX = 0;

// ширина одного слайда (с учётом отступов)
const slideWidth = slides[0].offsetWidth + 20; // slide + gap

// создаём точки
slides.forEach((_, i) => {
    const dot = document.createElement("div");
    if (i === 0) dot.classList.add("active");
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".carousel-dots div");

function updateSlider() {
    track.style.transform = `translateX(-${index * slideWidth}px)`;
    
    dots.forEach(d => d.classList.remove("active"));
    dots[index].classList.add("active");
}

// свайп начало
track.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
});

// движение
track.addEventListener("touchmove", e => {
    moveX = e.touches[0].clientX - startX;
});

// свайп завершён
track.addEventListener("touchend", () => {
    if (moveX < -50 && index < slides.length - 1) index++;
    if (moveX > 50 && index > 0) index--;
    
    updateSlider();
    moveX = 0;
});


fetch("https://autoservice-backend.onrender.com/send", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value
  })
})
.then(() => alert("Заявка отправлена!"))
.catch(() => alert("Ошибка!"));
