/**
 * @author  : Jagepard <jagepard@yandex.ru>
 * @license https://mit-license.org/ MIT
 */

class Chain{
    constructor() {
        this.chain = {};
    }

    addToChain(handler) {
        if (handler.name in this.chain) {
            throw "Handler already exists";
        }

        this.chain[handler.name] = handler;
    }

    execute(handlerName) {
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

export default Chain;
