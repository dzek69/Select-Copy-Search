import $, { create as createElem } from "../helpers/$";
import { getSelectionText } from "../helpers/selection";
// import { addListener, removeListener } from "../helpers/mousemove";
// import distance from "euclidean-distance";

const store = [];

const MAX_DISTANCE = 300;

const getGoogleURL = query => `https://www.google.pl/search?q=${encodeURIComponent(query)}`;

const handleCopy = e => e.preventDefault() || document.execCommand("copy") && removeAll();
const handleSearch = e => e.preventDefault() || (document.location = getGoogleURL(getSelectionText()));

const getTooltipContent = () => {
    const copy = createElem("button", null, {
        textContent: "Copy",
        onclick: handleCopy,
    });
    const search = createElem("button", null, {
        textContent: "Search",
        onclick: handleSearch,
    });
    return [copy, search];
};

const create = center => {
    const tt = createElem("div", null, {
        className: "scs-tooltip",
    });
    getTooltipContent().forEach(item => tt.appendChild(item));
    tt.style.left = `${center.x}px`;
    tt.style.top = `${center.y}px`;

    // tt.listener = event => distance([event.clientX, event.clientY], [center.x, center.y]) > MAX_DISTANCE && tt.stop();
    // tt.listener.stop = () => removeListener(tt.listener) || true;
    tt.stop = () => remove(tt);
    // addListener(tt.listener);
    store.push(tt);
    document.body.appendChild(tt);
    return tt;
};

const remove = (item) => {
    // item.listener.stop();
    item.remove();
};

const removeAll = () => {
    store.forEach(item => /*item.listener.stop() &&*/ item.remove());
    store.length = 0;
};

export {
    create,
    removeAll,
}
