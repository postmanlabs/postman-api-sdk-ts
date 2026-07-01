import { PostmanPostmanApiSdk } from 'postman-postman-api-sdk';

(async () => {
  const postmanPostmanApiSdk = new PostmanPostmanApiSdk({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanPostmanApiSdk.billing.getAccounts();

  console.log(data);
})();
