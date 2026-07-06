import { PostmanApiSdkSourceOverlayed } from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApiSdkSourceOverlayed.billing.getAccounts();

  console.log(data);
})();
