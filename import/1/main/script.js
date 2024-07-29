// main.js

import "/import/1/main/style.scss"
import "/import/1/main/rwd.scss"
import { background } from "/import/3/background/script.js";
import { screen } from "/import/1/screen/script.js";

const app = document.getElementById("app");
app.appendChild(background);
app.appendChild(screen);

