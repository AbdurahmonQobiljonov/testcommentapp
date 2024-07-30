import { types } from 'mobx-state-tree';
import UserModel from './UserModel';
import ThemeModel from './GeolocationModel';

const RootStore = types.model('RootStore', {
  user: UserModel,
  theme: ThemeModel,
});

export const rootStore = RootStore.create({
  user: {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
  },
  theme: {
    mode: 'light',
  },
});
