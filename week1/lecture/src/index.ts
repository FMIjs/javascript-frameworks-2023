import express from 'express';
import { UserRole } from './enums';
import { IUser } from './types-and-interfaces';

const app = express();

const user: IUser = {
  name: 'Ivan',
  role: UserRole.Admin
}

app.get<string, { param1: string }, { data: number }, IUser>('/', (req, res) => {
  let user = req.body;
  console.log(user, 123);
  res.send({ data: 213 })
});

app.listen(8080, () => {
  console.log('Server is listening on :8080');
})