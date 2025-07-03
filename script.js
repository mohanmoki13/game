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
