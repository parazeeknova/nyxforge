import { keys as analytics } from '@forge/analytics/keys';
// import { keys as auth } from '@forge/auth/keys';
// import { keys as collaboration } from '@forge/collaboration/keys';
// import { keys as database } from "@forge/database/keys";
// import { keys as email } from "@forge/email/keys";
// import { keys as flags } from "@forge/feature-flags/keys";
import { keys as core } from '@forge/next/keys';
// import { keys as notifications } from "@forge/notifications/keys";
import { keys as observability } from '@forge/observability/keys';
// import { keys as security } from "@forge/security/keys";
// import { keys as webhooks } from "@forge/webhooks/keys";
import { createEnv } from '@t3-oss/env-nextjs';

export const env = createEnv({
  extends: [
    // 		auth(),
    analytics(),
    //		collaboration(),
    core(),
    // 		database(),
    // 	  email(),
    // 		flags(),
    // 		notifications(),
    observability(),
    //		security(),
    //		webhooks(),
  ],
  server: {},
  client: {},
  runtimeEnv: {},
});
