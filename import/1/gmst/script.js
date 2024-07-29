// gmst

import "/import/1/gmst/style.scss";
import { createDiv } from "/import/3/func";
export { btn_gmst, gmst_div, renderGmst, gmst_continue, removeGmst }

const btn_gmst = createDiv("btn_gmst");
const gmst_div = createDiv("gmst_div");
const gmst_continue = createDiv("gmst_continue", "gmst_btn");
const gmst_volume = createDiv("gmst_volume", "gmst_btn");
const gmst_credit = createDiv("gmst_credit", "gmst_btn");

const renderGmst = (app) => {
    gmst_div.innerHTML = "";
    gmst_div.append(gmst_continue, gmst_volume, gmst_credit);
    gmst_continue.textContent = "繼續"
    return app.appendChild(gmst_div);
};
const removeGmst = (app) => {
    gmst_continue.className = "gmst_btn";
    return app.removeChild(gmst_div);
};