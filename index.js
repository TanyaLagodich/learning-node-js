import fs from 'fs/promises';
import _ from 'lodash';

import makeServer from './server.js';

export default async (port, callback = () => {}) => {
  const data = await fs.readFile('phonebook.txt', 'utf-8');

  // BEGIN (write your solution here)
  // console.log(data.split('\n').map(str => str.split(' | ')));
  const usersById = 1;
  // END

  const server = makeServer(usersById);
  server.listen(port, () => callback(server));
};
