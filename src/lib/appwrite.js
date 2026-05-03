import { Client, Account, ID } from 'appwrite';

const client = new Client()
    .setEndpoint('https://apw.simplemsg.net.br/v1')
    .setProject('69b40f1f001acd444805');

export const account = new Account(client);
export { ID };
