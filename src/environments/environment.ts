// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
	production: false,
	firebaseConfig : {
    apiKey: "AIzaSyBuxj69xfMzIEAuYWWLH0utcvuezl2SIeU",
    authDomain: "drivercard-bab35.firebaseapp.com",
    databaseURL: "https://drivercard-bab35.firebaseio.com",
    projectId: "drivercard-bab35",
    storageBucket: "drivercard-bab35.appspot.com",
    messagingSenderId: "932261724636"
  }
};
