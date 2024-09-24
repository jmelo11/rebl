import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
const backend = defineBackend({
  auth
});

const { cfnUserPool } = backend.auth.resources.cfnResources;
// modify cfnUserPool policies directly
cfnUserPool.policies = {
  passwordPolicy: {
    minimumLength: 10,
    requireLowercase: true,
    requireNumbers: true,
    requireSymbols: true,
    requireUppercase: true,
  },
};