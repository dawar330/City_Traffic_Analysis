import { db } from "../../config/fbConfig";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css";

export const createvarden = (newUser) => {
  return (dispatch, getstate, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.Email, "hello123")
      .then((resp) => {
        return firestore
          .collection("Users")
          .doc(resp.user.uid)
          .set({
            FirstName: newUser.FirstName,
            LastName: newUser.LastName,
            Email: newUser.Email,
            Age: newUser.Age,
            Rank: newUser.Rank,
            Designation: newUser.Designation,
            isadmin: false,
          });
      })
      .then(() => {
        store.addNotification({
          title: "Varden Added",
          message: `${newUser.FirstName} ${newUser.LastName} is added to the System !`,
          type: "success",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated animate__fadeIn"], // `animate.css v4` classes
          animationOut: ["animate__animated animate__fadeOut"],
          dismiss: {
            duration: 5000,
            onScreen: true,
          },
        });

        dispatch({ type: "ADD_Varden" });
      })
      .catch((err) => {
        dispatch({ type: "ADD_varden_Error", err });
      });
  };
};
export const deletevarden = (id) => {
  return (dispatch, getstate, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    firestore
      .collection("Users")
      .doc(id)
      .delete()
      .then(() => {
        dispatch({ type: "Delete_Varden" });
      })
      .catch((err) => {
        dispatch({ type: "Delete_Varden_Error", err });
      });
  };
};

export const GetVarden = () => {
  return (dispatch, getstate, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    var Vardens = [];

    const items = firestore
      .collection("Users")
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          Vardens.push({ ...doc.data(), id: doc.id });
        });
      })

      .then(() => {
        dispatch({ type: "Get_Varden", Vardens });
      })
      .catch((err) => {
        dispatch({ type: "Get_Varden_Error", err });
      });
  };
};

export const GetVardenNameid = () => {
  return (dispatch, getstate, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    var Vardens = [];

    const items = firestore
      .collection("Users")
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          Vardens.push({
            value: doc.id,
            label: doc.data().FirstName + " " + doc.data().LastName,
          });
        });
      })

      .then(() => {
        dispatch({ type: "GetVardenNameid", Vardens });
      })
      .catch((err) => {
        dispatch({ type: "GetVardenNameid_Error", err });
      });
  };
};
export const MakeAdmin = (Varden) => {
  return (dispatch) => {
    const User = db.collection("Users").doc(Varden.value);
    User.update({
      isadmin: true,
    })
      .then(() => {
        dispatch({ type: "Admin_Added" });
      })
      .catch((err) => {
        dispatch({ type: "Admin_Added_Error" });
      });
  };
};
export const DeleteAdmin = (Varden) => {
  return (dispatch) => {
    const User = db.collection("Users").doc(Varden.value);
    User.update({
      isadmin: false,
    })
      .then(() => {
        dispatch({ type: "Admin_Removed" });
      })
      .catch((err) => {
        dispatch({ type: "Admin_Removed_Error" });
      });
  };
};
