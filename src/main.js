/**
 * @author  : Jagepard <jagepard@yandex.ru>
 * @license https://mit-license.org/ MIT
 */

import NoticeHandler from './NoticeHandler';
import WarningHandler from './WarningHandler';
import ErrorHandler from './ErrorHandler';

const noticeHandler = new NoticeHandler("NoticeHandler");

try {
    noticeHandler.setNext(new WarningHandler("WarningHandler")).setNext(new ErrorHandler("ErrorHandler"));
    noticeHandler.execute("NoticeHandler");
    noticeHandler.execute("WarningHandler");
    noticeHandler.execute("ErrorHandler");
} catch (e) {
    console.error(e);
}
