// PREDICT, THEN RUN.   node predict/references.js

// ---- 1. Same contents, different objects ---------------------------------
console.log("1:", [1, 2] === [1, 2], { a: 1 } === { a: 1 });
// Prediction: 1: false false. === on objects checks same object, not contents.

// ---- 2. Two names, one array ---------------------------------------------
const planner = [4, 10];
const alias = planner;
alias.push(18);
console.log("2:", planner, planner === alias);
// Prediction: 2: [4, 10, 18] true. Both names point to one array.

// ---- 3. const stops reassignment, not change -----------------------------
const ids = [1];
ids.push(2);
console.log("3:", ids);
// Prediction: 3: [1, 2]. const stops reassignment only.

// ---- 4. Spread copies ONE level -------------------------------------------
const plan = { student: "Asha", semesters: { odd: [4], even: [] } };
const copy = { ...plan };
copy.semesters.odd.push(10);
console.log("4:", plan.semesters.odd, copy === plan, copy.semesters === plan.semesters);
// Prediction: 4: [4, 10] false true. New outer object, same inner semesters.

// ---- 5. structuredClone copies every level --------------------------------
const deep = structuredClone(plan);
deep.semesters.even.push(2);
console.log("5:", plan.semesters.even);
// Prediction: 5: []. structuredClone copied every level.

// ---- 6. Object.is — the check React uses ----------------------------------
const before = [4];
const after = before;
after.push(10);
console.log("6:", Object.is(before, after));
// Prediction: 6: true. Same reference, so React would NOT re-render.
