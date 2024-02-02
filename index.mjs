import words from "./words.mjs";

const word = words[~~(Math.random() * words.length)].toUpperCase(),
  usedletters = [],
  el = (e) => document.querySelector(e),
  add = (word) => [...word].forEach((letter) => (el("#letters").innerHTML += `<div><p>${letter}</p></div>`));

add(word);
let errors = -1,
  won = 0;

document.addEventListener(
  "keypress",
  (e, guess = el("#used-letters")) => (
    (e = e.key.toUpperCase()),
    /^[a-zA-Z]$/.test(e)
      ? (errors < 4 && !won
          ? (!usedletters.includes(e) && word.includes(e) && [...word].forEach((letter, i) => letter == e && (el("#letters").getElementsByTagName("p")[i].style.visibility = "visible")),
            !usedletters.includes(e) && !word.includes(e) && (guess.innerHTML += `<p>${e}</p>`) && errors++,
            !word.includes(e) && (el("#p" + errors).style.visibility = "visible"),
            !usedletters.includes(e) && usedletters.push(e),
            [...word].every((w) => usedletters.includes(w)) && won++)
          : null,
        errors >= 4 && (el("#gamestatus").innerHTML = `YOU LOSE! THE WORD WAS <b>${word}</b>!`) && (el("button").style.visibility = "visible"),
        won && (el("#gamestatus").innerText = "YOU WON, WELL PLAYED!") && (el("button").style.visibility = "visible"))
      : 0
  )
);
