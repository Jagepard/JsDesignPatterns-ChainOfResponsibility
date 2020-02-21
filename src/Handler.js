/**
 * @author  : Jagepard <jagepard@yandex.ru>
 * @license https://mit-license.org/ MIT
 */

class Handler {
    constructor(name){
        this.name = name;
    }

    execute() {
        console.log(this.name);
    }
}

export default Handler;
