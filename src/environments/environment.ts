// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    // apiKey - permite acesso a sua conta no firebase - cuidado para nao commitar em repositorio publico
    apiKey: "AIzaSyBqzpvg5UUqR2NAR4o4fyWTy0YZXBQBr0I",
    authDomain: "caf-shopping-list.firebaseapp.com",
    databaseURL: "https://caf-shopping-list.firebaseio.com",
    projectId: "caf-shopping-list",
    storageBucket: "caf-shopping-list.appspot.com",
    messagingSenderId: "653892492647"
  }
};
