/**
 * @author  : Jagepard <jagepard@yandex.ru>
 * @license https://mit-license.org/ MIT
 */

module.exports = {
    chain : {},

    addToChain : function (handler)
    {
        if (handler.name in this.chain) {
            throw "Handler already exists"
        }

        this.chain[handler.name] = handler
    },

    execute : function(handlerName)
    {
        if (!Object.keys(this.chain).length) {
            throw "The chain is empty"
        }

        if (this.chain.hasOwnProperty(handlerName)) {
            for (var i in this.chain) {
                handler = this.chain[i]
                handler.execute()

                if (handler.name === handlerName) {
                    return
                }
            }
        }
    }
}
