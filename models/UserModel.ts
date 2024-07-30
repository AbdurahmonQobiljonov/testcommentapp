import { types } from 'mobx-state-tree';

const UserModel = types
  .model('User', {
    id: types.identifier,
    name: types.string,
    email: types.string,
  })
  .actions((self) => ({
    setName(newName: string) {
      self.name = newName;
    },
    setEmail(newEmail: string) {
      self.email = newEmail;
    },
  }));

export default UserModel;
