import { default as http } from './HttpConnection'

const httpClient = http.client;
const httpAuthClient = http.authClient;

export { httpClient, httpAuthClient }