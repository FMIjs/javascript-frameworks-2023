import { UserGroupNamesPipe } from './user-group-names.pipe';

describe('UserGroupNamesPipe', () => {
  it('create an instance', () => {
    const pipe = new UserGroupNamesPipe();
    expect(pipe).toBeTruthy();
  });
});
