import EventEmitter from "eventemitter3";
import _throttle from "lodash/throttle";

const EE = new EventEmitter();

const notify = _throttle(event => EE.emit("mm", event), 50);

document.addEventListener("mousemove", event => notify(event));

const addListener = fn => EE.on("mm", fn);
const removeListener = fn => EE.removeListener("mm", fn);

export {
    addListener,
    removeListener,
}
