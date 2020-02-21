"use strict";

/**
 * @author  : Jagepard <jagepard@yandex.ru>
 * @license https://mit-license.org/ MIT
 */

export default function (name) {
    return {
        name: name,
        execute: function() {
            console.log(this.name);
        }
    };
};
