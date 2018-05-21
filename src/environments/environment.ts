// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  //API
  apiHost: "http://localhost/bonita-portal-api/",
  //apiHost: "http://200.41.233.251:4423/bonita-portal-api/",
  
  defaultPage: '/tasks',
  
  //CACHE
  cachePrefix: "bonita",
  maxCacheItems: 200,
};
