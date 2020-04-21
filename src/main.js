/**
 * @author  : Jagepard <jagepard@yandex.ru>
 * @license https://mit-license.org/ MIT
 */

import NoticeHandler from './NoticeHandler';
import WarningHandler from './WarningHandler';
import ErrorHandler from './ErrorHandler';

const noticeHandler = new NoticeHandler("NoticeHandler");
const warningHandler = new WarningHandler("WarningHandler");
const errorHandler = new ErrorHandler("ErrorHandler");

try {
    noticeHandler.setNext(warningHandler).setNext(errorHandler);
    noticeHandler.execute("NoticeHandler");
    noticeHandler.execute("WarningHandler");
    noticeHandler.execute("ErrorHandler");
} catch (e) {
    console.error(e);
}
