import { Client, Account, ID } from 'appwrite';

const client = new Client()
    .setEndpoint('https://apw.simplemsg.net.br/v1')
    .setProject('69f87aa20030b41f3860');

export const account = new Account(client);
export { ID };
