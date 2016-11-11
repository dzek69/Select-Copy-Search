import { getRect } from "./helpers/selection";
import { create, removeAll } from "./tooltip/tooltip";

document.addEventListener("mouseup", e => {
    const rect = getRect();
    if (!rect.width || !rect.height) {
        removeAll();
        return;
    }

    const buttonClicking = e.target.parentNode.classList.contains("scs-tooltip");
    if (buttonClicking) {
        return;
    }

    removeAll();
    create({
        x: (rect.right - rect.left) / 2 + rect.left,
        y: rect.top,
    });
});
