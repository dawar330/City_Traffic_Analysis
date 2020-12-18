import { db, functions } from "../../config/fbConfig";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css";

export const createvarden = (newUser) => {
  return (dispatch, getstate, { getFirebase, getFirestore }) => {
    const CreateUser = functions.httpsCallable("CreateUser");
    if (newUser) {
      console.log("calling create user", newUser);
      CreateUser({
        FirstName: newUser.FirstName,
        LastName: newUser.LastName,
        Email: newUser.Email,
        Age: newUser.Age,
        Rank: newUser.Rank,
        Designation: newUser.Designation,
        isadmin: false,
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
    }
  };
};
export const deletevarden = (id) => {
  return (dispatch, getstate, { getFirebase, getFirestore }) => {
    const DeleteUser = functions.httpsCallable("DeleteUser");
    DeleteUser({
      uid: id,
    })
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
    const firestore = getFirestore();
    var Vardens = [];

    db.collection("Users").onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({ ...doc.data(), id: doc.id });
      });
      Vardens = items;
      dispatch({ type: "Get_Varden", Vardens });
    });
  };
};

export const GetVardenNameid = () => {
  return (dispatch, { getFirestore }) => {
    var Vardens = [];

    db.collection("Users").onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({
          value: doc.id,
          label: doc.data().FirstName + " " + doc.data().LastName,
        });
      });
      Vardens = items;
      dispatch({ type: "GetVardenNameid", Vardens });
    });
  };
};
export const MakeAdmin = (Varden) => {
  const addAdminRole = functions.httpsCallable("addAdminRole");
  return (dispatch) => {
    addAdminRole({ email: Varden.email })
      .then((res) => {
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
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const DeleteAdmin = (Varden) => {
  const delAdminRole = functions.httpsCallable("delAdminRole");
  return (dispatch) => {
    delAdminRole({ email: Varden.email })
      .then((res) => {
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
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
