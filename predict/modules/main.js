// PREDICT, THEN RUN.   node predict/modules/main.js
import { headerClick } from "./header.js";
import { footerClick } from "./footer.js";

headerClick();
headerClick();
console.log("footer sees:", footerClick());
// Prediction: footer sees: 3. A module runs once, so clicks is shared.
