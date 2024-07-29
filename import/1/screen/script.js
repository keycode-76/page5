// screen.js

import "/import/1/screen/style.scss";
import { createDiv, listenEvent } from "/import/3/func.js";
import { btn_gmst, renderGmst, gmst_continue, removeGmst } from "/import/1/gmst/script.js";
import { btn_left, btn_right, renderView } from "/import/2/view/script";
import { SD_1 } from "/import/3/sound.js";

const clickBtn = (btn, func) => {
    btn.classList.add("btn_click_anim");
    const timer = setTimeout(() => {
        btn.className = "";
        func();
        SD_1.play();
        clearTimeout(timer);
    }, 500);
};
const screen = createDiv("screen");
const scence = createDiv("scence");
const test = createDiv("test");

screen.appendChild(scence)
scence.appendChild(test)
export { screen }


screen.appendChild(btn_gmst);
renderView(screen);

listenEvent(btn_gmst, "click", () => {
    clickBtn(btn_gmst, () => renderGmst(screen));
});
listenEvent(gmst_continue, "click", () => {
    clickBtn(gmst_continue, () => removeGmst(screen));
});
listenEvent(btn_left, "click", () => {
    clickBtn(btn_left, () => {console.log("left")});
});
listenEvent(btn_right, "click", () => {
    clickBtn(btn_right, () => {console.log("right")});
});
