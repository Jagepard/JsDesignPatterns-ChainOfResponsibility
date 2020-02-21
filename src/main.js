/**
 * @author  : Jagepard <jagepard@yandex.ru>
 * @license https://mit-license.org/ MIT
 */

import Chain from './Chain';
import NoticeHandler from './NoticeHandler';
import WarningHandler from './WarningHandler';
import ErrorHandler from './ErrorHandler';

const chain = new Chain();
const noticeHandler = new NoticeHandler("NoticeHandler");
const warningHandler = new WarningHandler("WarningHandler");
const errorHandler = new ErrorHandler("ErrorHandler");

try {
    chain.addToChain(noticeHandler);
    chain.addToChain(warningHandler);
    chain.addToChain(errorHandler);
    chain.execute(noticeHandler.name);
    chain.execute(warningHandler.name);
    chain.execute(errorHandler.name);
} catch (e) {
    console.error(e);
}
