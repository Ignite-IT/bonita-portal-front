// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  //API
  //apiHost: "http://192.168.0.35/bonita-portal-api/",
  apiHost: "http://localhost/bonita-portal-api/",
  //apiHost: "http://200.41.233.251:4423/bonita-portal-api/",
  
  apiHostCaja: "http://localhost/caja-forms-api/",
  //apiHostCaja: "http://200.41.233.251:4423/caja-forms-api/",
    
  apiHostMedicos: "http://localhost/caja-forms-api/cpsmSimulador/",
  
  defaultPage: '/tasks',
  
  tiposPrestamo: [{key: 3, value: 'Personal'}, {key: 4, value: 'Hipotecario'}],
  
  //CACHE
  cachePrefix: "bonita",
  maxCacheItems: 200,
};
