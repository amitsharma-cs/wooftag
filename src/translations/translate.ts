import {I18n} from 'i18n-js';
import {getDefaultLanguage} from '../common/utils/translation/DefaultLanguage';

import en from './en';
import pt from './pt';

const i18n = new I18n({en, pt});
i18n.defaultLocale = getDefaultLanguage();
i18n.locale = getDefaultLanguage();

export function translate(key: string, dynamicText?: object) {
  return i18n.t(key, dynamicText);
}
