import words from './words.mjs';
const word = words[~~(Math.random()*words.length)].toUpperCase(), usedletters = [], el = (e) => (document.querySelector(e)); let errors = -1, won = 0;
const add = (word) => ( console.log(word), [...word].forEach((letter) => el('#letters').innerHTML+=`<div><p>${letter}</p></div>`));add(word);
document.addEventListener("keypress", (e, guess=el('#used-letters')) =>(
e = e.key.toUpperCase(), /^[a-zA-Z]$/.test(e) ? (errors < 4 && !won ? (!usedletters.includes(e) && word.includes(e) && 
[...word].forEach((letter, i) => letter==e && (el('#letters').getElementsByTagName('p')[i].style.visibility = 'visible')),
!usedletters.includes(e) && !word.includes(e) && (guess.innerHTML += `<p>${e}</p>`) && (errors++),
!word.includes(e) && (el('#p'+errors).style.visibility = 'visible'),
!usedletters.includes(e) && usedletters.push(e), [...word].every(w=> usedletters.includes(w)) && won++) : null,
errors >= 4 && (el('#gamestatus').innerText = 'YOU LOST! SORRY!') && (el('button').style.visibility = 'visible'),
won && (el('#gamestatus').innerText = 'YOU WON, WELL PLAYED!') && (el('button').style.visibility = 'visible')) : 0));



