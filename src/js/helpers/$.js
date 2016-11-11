import _forOwn from "lodash/forOwn";

const $ = (selector, root) => (root || document).querySelector(selector);
const $$ = (selector, root) => [... (root || document).querySelectorAll(selector)];
const create = (type, attrs, props) => {
    const elem = document.createElement(type);
    _forOwn(attrs, (val, key) => elem.setAttribute(key, val));
    _forOwn(props, (val, key) => {
        if (val === false) { return; }
        elem[key] = val
    });
    return elem;
};

export default $;
export {
    $, $$, create
};
