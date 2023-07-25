const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    person: "Steve Jobs"
  },
  {
    quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    person: "Martin Luther King Jr."
  },
  {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    person: "Winston Churchill"
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    person: "John Lennon"
  },
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    person: "Nelson Mandela"
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    person: "Eleanor Roosevelt"
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    person: "Thomas Edison"
  },
  {
    quote: "The only limit to our realization of tomorrow will be our doubts of today.",
    person: "Franklin D. Roosevelt"
  },
  {
    quote: "The best way to predict the future is to create it.",
    person: "Peter Drucker"
  },
  {
    quote: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
    person: "Jordan Belfort"
  },
  {
    quote: "Your time is limited, don't waste it living someone else's life.",
    person: "Steve Jobs"
  },
  {
    quote: "The only person you are destined to become is the person you decide to be.",
    person: "Ralph Waldo Emerson"
  },
  {
    quote: "Believe you can and you're halfway there.",
    person: "Theodore Roosevelt"
  },
  {
    quote: "The future rewards those who press on. I don't have time to feel sorry for myself. I don't have time to complain. I'm going to press on.",
    person: "Barack Obama"
  },
  {
    quote: `"You miss 100% of the shots you don't take."`,
    person: "Wayne Gretzky"
  }
];
let q=document.querySelector('.quote-q')
let generator=document.querySelector('.generator');
generator.addEventListener('click',function() {
    let rand=Math.floor(Math.random()*quotes.length);
    q.innerText=quotes[rand].quote;
    document.querySelector('.person').innerText='-'+quotes[rand].person;
});
