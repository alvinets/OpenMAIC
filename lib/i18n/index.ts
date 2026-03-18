import { defaultLocale } from './types';
export { type Locale, defaultLocale } from './types';
import { commonZhCN, commonZhTW, commonEnUS } from './common';
import { stageZhCN, stageZhTW, stageEnUS } from './stage';
import { chatZhCN, chatZhTW, chatEnUS } from './chat';
import { generationZhCN, generationZhTW, generationEnUS } from './generation';
import { settingsZhCN, settingsZhTW, settingsEnUS } from './settings';

export const translations = {
  'zh-CN': {
    ...commonZhCN,
    ...stageZhCN,
    ...chatZhCN,
    ...generationZhCN,
    ...settingsZhCN,
  },
  'zh-TW': {
    ...commonZhTW,
    ...stageZhTW,
    ...chatZhTW,
    ...generationZhTW,
    ...settingsZhTW,
  },
  'en-US': {
    ...commonEnUS,
    ...stageEnUS,
    ...chatEnUS,
    ...generationEnUS,
    ...settingsEnUS,
  },
} as const;

export type TranslationKey = keyof (typeof translations)[typeof defaultLocale];
