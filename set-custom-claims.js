const argv = require("yargs").argv;
var admin = require("firebase-admin");

const preDefinedClaims = ["admin", "teacher", "author", "student"];
const claims = preDefinedClaims.reduce(
  (acc, claim) => ({
    ...acc,
    ...(argv[claim] && { [claim]: true }),
  }),
  {}
);

const { uid } = argv;

var serviceAccount = require("./firebase-service-account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://joie-app.firebaseio.com",
});

admin
  .auth()
  .setCustomUserClaims(uid, claims)
  .then(() => {
    console.log(`user ${uid} claims updated successfuly:`, claims);
    process.exit();
  })
  .catch((error) => {
    console.log({ error });
    process.exit();
  });

// node set-custom-claims.js --uid=[uid] --[claim1] --[claim2]
