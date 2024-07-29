// viewmove

import "/import/2/view/style.scss";
import { createDiv } from "/import/3/func.js";
export { btn_left, btn_right, renderView }

// const view_div = createDiv("view_div")
const btn_left = createDiv("btn_left");
const btn_right = createDiv("btn_right");

const renderView = (app) => {
    // view_div.append(btn_left, btn_right)
    return app.append(btn_left, btn_right)
};