<script>
  const canvas = document.getElementById("petalsCanvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let petals = [];
  for (let i = 0; i < 50; i++) {
    petals.push({
      x: Math.random() * canvas.width,
      y: Math.random() * -canvas.height,
      r: Math.random() * 4 + 2,
      speed: Math.random() * 1.5 + 0.5,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let petal of petals) {
      ctx.beginPath();
      ctx.fillStyle = "rgba(255, 182, 193, 0.7)";
      ctx.arc(petal.x, petal.y, petal.r, 0, Math.PI * 2);
      ctx.fill();
      petal.y += petal.speed;
      petal.x += Math.sin(petal.y * 0.01);
      if (petal.y > canvas.height) {
        petal.y = -10;
        petal.x = Math.random() * canvas.width;
      }
    }
    requestAnimationFrame(draw);
  }

  draw();

  function revealNote() {
    document.getElementById("note").style.display = "block";
    const flowerPopup = document.getElementById("flowers-popup");
    flowerPopup.classList.add("show-flowers");

    setTimeout(() => {
      flowerPopup.classList.remove("show-flowers");
    }, 5000); // hide flowers after 5 seconds
  }

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
</script>
