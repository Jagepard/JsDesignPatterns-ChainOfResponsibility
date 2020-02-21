"use strict";

require("core-js/modules/web.dom.iterable");

/**
 * @author  : Jagepard <jagepard@yandex.ru>
 * @license https://mit-license.org/ MIT
 */

export default {
    chain: {},
    addToChain: function(handler) {
        if (handler.name in this.chain) {
            throw "Handler already exists";
        }

        this.chain[handler.name] = handler;
    },
    execute: function(handlerName) {
        if (!Object.keys(this.chain).length) {
            throw "The chain is empty";
        }

        if (this.chain.hasOwnProperty(handlerName)) {
            for (var i in this.chain) {
                let handler = this.chain[i];
                handler.execute();

                if (handler.name === handlerName) {
                    return;
                }
            }
        }
    }
};
