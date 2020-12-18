const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
});

exports.addAdminRole = functions.https.onCall((data, context) => {
  // get user and add admin custom claim
  if (context.auth.token.admin !== true) {
    return { error: "Only admins can add other admins" };
  }
  return admin
    .auth()
    .getUserByEmail(data.email)
    .then((user) => {
      return admin.auth().setCustomUserClaims(user.uid, {
        admin: true,
      });
    })
    .then(() => {
      return {
        message: `Success! ${data.email} has been made an admin.`,
      };
    })
    .catch((err) => {
      return err;
    });
});
exports.delAdminRole = functions.https.onCall((data, context) => {
  // check request is made by an admin
  if (context.auth.token.admin !== true) {
    return { error: "Only admins can remove other admins" };
  }
  // get user and add admin custom claim
  return admin
    .auth()
    .getUserByEmail(data.email)
    .then((user) => {
      return admin.auth().setCustomUserClaims(user.uid, {
        admin: false,
      });
    })
    .then(() => {
      return {
        message: `Success! ${data.email} has been removed of all admin claim.`,
      };
    })
    .catch((err) => {
      return err;
    });
});

exports.CreateUser = functions.https.onCall((data, response) => {
  admin
    .auth()
    .createUser({
      email: data.Email,
      emailVerified: false,
      password: "hello123",
    })
    .then((userRecord) => {
      // See the UserRecord reference doc for the contents of userRecord.

      return admin
        .firestore()
        .collection("Users")
        .doc(userRecord.uid)
        .set({
          FirstName: data.FirstName,
          LastName: data.LastName,
          Email: data.Email,
          Age: data.Age,
          Rank: data.Rank,
          Designation: data.Designation,
          isadmin: false,
        });
    })

    .catch((err) => {
      return err;
    });
});

exports.DeleteUser = functions.https.onCall((data, response) => {
  admin
    .auth()
    .deleteUser(data.uid)
    .then(() => {
      // See the UserRecord reference doc for the contents of userRecord.

      return admin
        .firestore()
        .collection("Users")
        .doc(data.uid)
        .delete();
    })

    .catch((err) => {
      return err;
    });
});
