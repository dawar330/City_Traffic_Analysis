import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css";

export const createDuty = (Duty) => {
  return (dispatch, getstate, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();
    firestore
      .collection("VardenDuties")
      .add({
        ...Duty,
      })
      .then((docref) => {
        const id = firebase.auth().currentUser;
        firestore.collection("Notification").add({
          createdAt: Date.now(),
          Message: `Warden ${Duty.FirstName} has been assigned at ${Duty.Area}`,
          type: "success",
          to: "Admin",
        });

        firestore
          .collection("Notification")
          .doc(docref.id)
          .set({
            createdAt: Date.now(),
            Message: `You have been assigned at ${Duty.Area}`,
            type: "success",
            to: `${Duty.Id}`,
          });

        store.addNotification({
          title: "Warden Duty Added",
          message: `${Duty.FirstName} is assigned at ${Duty.Area}`,
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
        dispatch({ type: "ADD_Duty", Duty });
      })
      .catch((err) => {
        dispatch({ type: "ADD_Duty_Error", err });
      });
  };
};

export const DeletevardenDuty = (ID) => {
  return (dispatch, getstate, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("VardenDuties")
      .doc(ID)
      .delete()
      .then(() => {
        dispatch({ type: "Delete_Duty", ID });
      })
      .catch((err) => {
        dispatch({ type: "Delete_Duty_Error", err });
      });
  };
};

export const GetDuties = () => {
  return (dispatch, getstate, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    var Duties = [];

    firestore.collection("VardenDuties").onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({ ...doc.data(), id: doc.id });
      });
      Duties = items;
      dispatch({ type: "Get_Duties", Duties });
    });
  };
};
