export const Signin = (crds) => {
  return (dispatch, getstate, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(crds.email, crds.password)
      .then(() => {
        dispatch({ type: "login_Succes", crds });
      })
      .catch((err) => {
        dispatch({ type: "login_Error", err });
      });
  };
};
export const signUp = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((resp) => {
        return firestore
          .collection("Users")
          .doc(resp.user.uid)
          .set({
            Name: newUser.fullname,
            UserName: newUser.username,
          });
      })
      .then(() => {
        dispatch({ type: "SignUp_Succes" });
      })
      .catch((err) => {
        dispatch({ type: "SignUp_Error", err });
      });
  };
};
export const signOut = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SignOut_Succes" });
      });
  };
};
export const getUser = (id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const User = [];
    firestore
      .collection("Users")
      .doc(id)
      .get()
      .then(function(doc) {
        if (doc.exists) {
          User.push(doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      })
      .then(() => {
        dispatch({ type: "GetUser_Succes", User });
      });
  };
};

export const getUserNotification = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const UserNotification = [];
    firestore
      .collection("Notification")
      //   .where("TO", "==", id)
      .get()
      .then(function(doc) {
        if (doc.exists) {
          UserNotification.push(doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      })
      .then(() => {
        dispatch({ type: "GetUserNotification_Succes", UserNotification });
      });
  };
};
export const UpdateUser = (User) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();
    var U = firebase.auth().currentUser;
    U.updateEmail(User.email);
    var cityRef = firestore.collection("Users").doc(U.uid);

    cityRef
      .update({
        Email: User.email,
        FirstName: User.firstname,
        LastName: User.lastname,
        Age: User.age,
        phone: User.phone,
        pic: User.pic,
      })
      .then(() => {
        dispatch({ type: "Update_Success", User });
      });
  };
};
