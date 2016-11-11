const getSelection = () => {
    return window.getSelection().getRangeAt(0);
};

const getRect = () => {
    return getSelection().getBoundingClientRect();
};

const getSelectionText = () => {
    return window.getSelection().toString();
};

export {
    getSelectionText,
    getRect,
};
