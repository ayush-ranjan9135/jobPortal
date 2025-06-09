// Import with if you are using ES
import * as Sentry from "@sentry/node"
import {nodeProfilingIntegration} from "@sentry/profiling-node";

Sentry.init({
  dsn: "https://2bffd0a5da94536efdb8da3c4324ccb1@o4509462851944448.ingest.us.sentry.io/4509463024697344",

  integrations:[
    nodeProfilingIntegration(),
    Sentry.mongooseIntegration(),
  ],
  //tracing
//   tracesSampleRate:1.0,

});

Sentry.profiler.startProfiler();

Sentry.startSpan({
    name:"My First Transaction",
}, () =>{

});

Sentry.profiler.stopProfiler();
