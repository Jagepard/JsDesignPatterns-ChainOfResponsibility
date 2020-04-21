/**
 * @author  : Jagepard <jagepard@yandex.ru>
 * @license https://mit-license.org/ MIT
 */

class AbstractHandler {
    constructor(name){
        this.name = name;
    }

    execute(request)
    {
        if (request === this.name) {
            console.log(this.name + "has handle an error");
            return;
        }

        if (this.nextHandler === null) {
            throw new Exception(request + " does not exist in the chain");
        }

        this.nextHandler.execute(request);
    }

    setNext(handler)
    {
        this.nextHandler = handler;
        return handler;
    }
}

export default AbstractHandler;
