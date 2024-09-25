import { defineAuth, secret } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: {
      verificationEmailStyle: "LINK",
      verificationEmailSubject: "Bienvenido a rebl",
      verificationEmailBody: (createLink) => `Bienvenido a rebl. Para confirmar tu cuenta, por favor haz click en ${createLink("este enlance")}.`,
    },
    // externalProviders: {
    //   scopes: ['EMAIL', 'PROFILE'],
    //   google: {
    //     clientId: secret('GOOGLE_CLIENT_ID'),
    //     clientSecret: secret('GOOGLE_CLIENT_SECRET')
    //   },
    //   signInWithApple: {
    //     clientId: secret('SIWA_CLIENT_ID'),
    //     keyId: secret('SIWA_KEY_ID'),
    //     privateKey: secret('SIWA_PRIVATE_KEY'),
    //     teamId: secret('SIWA_TEAM_ID')
    //   },
    //   loginWithAmazon: {
    //     clientId: secret('LOGINWITHAMAZON_CLIENT_ID'),
    //     clientSecret: secret('LOGINWITHAMAZON_CLIENT_SECRET')
    //   },
    //   facebook: {
    //     clientId: secret('FACEBOOK_CLIENT_ID'),
    //     clientSecret: secret('FACEBOOK_CLIENT_SECRET')
    //   },
    //   callbackUrls: [
    //     'http://localhost:3000/profile',
    //     'https://rebl.finance/profile'
    //   ],
    //   logoutUrls: ['http://localhost:3000/', 'https://rebl.finance'],
    // }
  },
});
