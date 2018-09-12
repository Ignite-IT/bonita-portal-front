export const environment = {
  production: true,
  //API
//  apiHost: "http://localhost/bonita-portal-api/",
  apiHost: "http://200.41.233.251:4423/bonita-portal-api/",
  
  //apiHostCaja: "http://localhost/caja-forms-api/",
  apiHostCaja: "http://200.41.233.251:4423/caja-forms-api/",
    
  apiHostMedicos: "http://200.41.233.251:4423/caja-forms-api/cpsmProxy/",
  
  defaultPage: '/tasks',
  
  tiposPrestamo: [{key: 3, value: 'Personal'}, {key: 4, value: 'Hipotecario'}],
  
  //CACHE
  cachePrefix: "bonita",
  maxCacheItems: 200,
};
