export const environment = {
  production: true,
  //API
//  apiHost: "http://localhost/bonita-portal-api/",
//  es la url de test del usuario
apiHost: "http://200.41.233.251:4423/bonita-portal-api/",
//  es la url de test nuestra
//apiHost: "http://200.41.233.251:4433/bonita-portal-api/",
  
//  apiHostCaja: "http://localhost/caja-forms-api/",
//  es la url de test del usuario
  apiHostCaja: "http://200.41.233.251:4423/caja-forms-api/",
//	es la url de test nuestra
//apiHostCaja: "http://200.41.233.251:4433/caja-forms-api/",

// es la url de test del usuario    
apiHostMedicos: "http://200.41.233.251:4423/caja-forms-api/cpsmProxy/",
//apiHostMedicos: "http://200.41.233.251:4433/caja-forms-api/cpsmProxy/",
  
  defaultPage: '/tasks',
  
  tiposPrestamo: [{key: 3, value: 'Personal'}, {key: 4, value: 'Hipotecario'}],
  
  //CACHE
  cachePrefix: "bonita",
  maxCacheItems: 200,
};
