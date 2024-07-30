import { types as t } from 'mobx-state-tree';

const ThemeModel = t
  .model('Theme', {
    mode: t.optional(t.union(t.literal('light'), t.literal('dark')), 'light'),
  })
  .actions((self) => ({
    setMode(mode: 'light' | 'dark') {
      self.mode = mode;
    },
  }));

export default ThemeModel;
