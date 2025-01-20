import { articlesEn } from './en/articles';
import { articlesTr } from './tr/articles';
import { articlesRu } from './ru/articles';
import { articlesHr } from './hr/articles';
import { articlesBs } from './bs/articles';
import { resumeDataEn } from './en/resume';
import { resumeDataTr } from './tr/resume';
import { resumeDataRu } from './ru/resume';
import { resumeDataHr } from './hr/resume';
import { resumeDataBs } from './bs/resume';
import { translationsEn } from './en/translations';
import { translationsTr } from './tr/translations';
import { translationsRu } from './ru/translations';
import { translationsHr } from './hr/translations';
import { translationsBs } from './bs/translations';

export const content = {
  en: {
    articles: articlesEn,
    resume: resumeDataEn,
    translations: translationsEn
  },
  tr: {
    articles: articlesTr,
    resume: resumeDataTr,
    translations: translationsTr
  },
  ru: {
    articles: articlesRu,
    resume: resumeDataRu,
    translations: translationsRu
  },
  hr: {
    articles: articlesHr,
    resume: resumeDataHr,
    translations: translationsHr
  },
  bs: {
    articles: articlesBs,
    resume: resumeDataBs,
    translations: translationsBs
  }
};

export default content; 