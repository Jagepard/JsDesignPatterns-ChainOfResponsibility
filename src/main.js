"use strict";

/**
 * @author  : Jagepard <jagepard@yandex.ru>
 * @license https://mit-license.org/ MIT
 */

import Chain from './Chain';
import Handler from './Handler';

const NoticeHandler = new Handler("NoticeHandler");
const WarningHandler = new Handler("WarningHandler");
const ErrorHandler = new Handler("ErrorHandler");

try {
  Chain.addToChain(NoticeHandler);
  Chain.addToChain(WarningHandler);
  Chain.addToChain(ErrorHandler);
  Chain.execute(NoticeHandler.name);
  Chain.execute(WarningHandler.name);
  Chain.execute(ErrorHandler.name);
} catch (e) {
  console.error(e);
}
