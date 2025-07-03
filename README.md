body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #1e1e1e;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  text-align: center;
}

.wheel {
  position: relative;
  width: 300px;
  height: 300px;
  border: 10px solid #fff;
  border-radius: 50%;
  margin: 20px auto;
  overflow: hidden;
  transform: rotate(0deg);
  transition: transform 4s cubic-bezier(0.33, 1, 0.68, 1);
}

.segment {
  position: absolute;
  width: 50%;
  height: 50%;
  background: hsl(calc(var(--i) * 60), 70%, 50%);
  transform-origin: 100% 100%;
  transform: rotate(calc(var(--i) * 60deg)) skewY(-30deg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-weight: bold;
  clip-path: polygon(0 0, 100% 0, 100% 100%);
}

button {
  padding: 10px 30px;
  font-size: 18px;
  cursor: pointer;
  background: #00ff99;
  color: #000;
  border: none;
  border-radius: 10px;
}

#resultText {
  margin-top: 20px;
  font-size: 20px;
}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Spin to Win</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="container">
    <div class="wheel" id="wheel">
      <div class="segment" style="--i:0;">Prize 1</div>
      <div class="segment" style="--i:1;">Prize 2</div>
      <div class="segment" style="--i:2;">Prize 3</div>
      <div class="segment" style="--i:3;">Prize 4</div>
      <div class="segment" style="--i:4;">Prize 5</div>
      <div class="segment" style="--i:5;">Prize 6</div>
    </div>
    <button id="spinBtn">SPIN</button>
    <p id="resultText"></p>
  </div>
  <script src="script.js"></script>
</body>
</html>
const spinBtn = document.getElementById('spinBtn');
const wheel = document.getElementById('wheel');
const resultText = document.getElementById('resultText');

let isSpinning = false;

spinBtn.addEventListener('click', () => {
  if (isSpinning) return;

  isSpinning = true;
  const randomDegree = Math.floor(3600 + Math.random() * 720);
  const actualDeg = randomDegree % 360;

  wheel.style.transition = 'transform 4s cubic-bezier(0.33, 1, 0.68, 1)';
  wheel.style.transform = `rotate(${randomDegree}deg)`;

  setTimeout(() => {
    const segmentAngle = 360 / 6;
    const index = Math.floor((360 - actualDeg + segmentAngle / 2) % 360 / segmentAngle);
    const prizes = ['Prize 1', 'Prize 2', 'Prize 3', 'Prize 4', 'Prize 5', 'Prize 6'];

    resultText.textContent = `🎉 You won: ${prizes[index]}!`;
    isSpinning = false;
  }, 4200);
});
