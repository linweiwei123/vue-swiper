var bindEvent = function (element, event, handler) {
    if (element && event && handler) {
        if (document.addEventListener) {
            element.addEventListener(event, handler, false);
        }
        else{
            element.attachEvent('on' + event, handler);
        }
    }
};


var unbindEvent = function (element, event, handler) {
    if (element && event) {
        if (document.removeEventListener) {
            element.removeEventListener(event, handler, false);
        }
        else element.detachEvent('on' + event, handler);
    }
};


var bindOnce = function(el, event, fn) {
    var listener = function() {
        if (fn) {
            fn.apply(this, arguments);
        }
        unbindEvent(el, event, listener);
    };
    bindEvent(el, event, listener);
};

module.exports = {
    on: bindEvent,
    off: unbindEvent,
    once: bindOnce
};

