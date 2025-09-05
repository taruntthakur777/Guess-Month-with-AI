const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const nextBtn = document.getElementById('nextBtn');
const monthSelector = document.getElementById('monthSelector');
const outputDiv = document.getElementById('output');

nextBtn.addEventListener('click', () => {
  let currentMonth = parseInt(monthSelector.value);
  let nextMonth = (currentMonth + 1) % 12;
  
  const texts = [
    "Guess with AI",
    "Find in Calendar",
    "Ask to Astrologer",
    "Check Zomoto discount",
    "Call Narender Modi Chaiwala",
    "Bolo BharatMata Ki Jai"
  ];

  outputDiv.innerText = ""; // Clear before start
  let index = 0;

  function showTextSequentially() {
    if(index < texts.length) {
      outputDiv.innerText = texts[index];
      index++;
      setTimeout(showTextSequentially, 1000); // 1 second delay per text
    } else {
      outputDiv.innerText = "Successfully guessed! Next month is:Monday";
    }
  }

  showTextSequentially();
});
