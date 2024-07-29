// func.js

const createDiv = (nameId, nameClass, text) => {
    const itemModel = document.createElement("div");
    itemModel.id = nameId;
    if (nameClass) { itemModel.className = nameClass; }
    if (text) { itemModel.textContent = text; }
    return itemModel;
};
const listenEvent = (listenModel, move ,func) => {
    if (func) { listenModel.addEventListener(move, func)}
    return listenModel;
};
export {createDiv, listenEvent}