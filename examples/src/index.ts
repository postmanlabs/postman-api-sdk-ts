import { PostmanApiSdk } from 'postman-api-sdk';

(async () => {
  const postmanApiSdk = new PostmanApiSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApiSdk.billing.getAccounts();

  console.log(data);
})();
