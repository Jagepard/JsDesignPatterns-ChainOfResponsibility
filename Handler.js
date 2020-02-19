/**
 * @author  : Jagepard <jagepard@yandex.ru>
 * @license https://mit-license.org/ MIT
 */

module.exports = {
    create: function(name) {
        return {
            name : name, 

            execute : function() {
                console.log(this.name)
            }
        }
    }
}
