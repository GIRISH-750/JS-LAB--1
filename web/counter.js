// Section 15 exercise: a counter, three ways.
// Run it:  npm run web   → open http://localhost:5500/web/counter.html
// Follow section 15 of the lab doc: stage 1 → 2 → 3 → 4.

const countEl = document.querySelector("#count");
const parityEl = document.querySelector("#parity");
const inc = document.querySelector("#inc");
const dec = document.querySelector("#dec");
const reset = document.querySelector("#reset");
const stepInput = document.querySelector("#step");

// Stage 2 — every handler updates every place by hand.
let count = 0;

inc.addEventListener("click", () => {
  count += 1;
  countEl.textContent = count;
  parityEl.textContent = count % 2 === 0 ? "even" : "odd";
  dec.disabled = count - 1 < 0;
  document.title = `Count: ${count}`;
});

dec.addEventListener("click", () => {
  count -= 1;
  countEl.textContent = count;
  parityEl.textContent = count % 2 === 0 ? "even" : "odd";
  dec.disabled = count - 1 < 0;
  document.title = `Count: ${count}`;
});

reset.addEventListener("click", () => {
  count = 0;
  countEl.textContent = count;
  parityEl.textContent = count % 2 === 0 ? "even" : "odd";
  dec.disabled = count - 1 < 0;
  document.title = `Count: ${count}`;
});
