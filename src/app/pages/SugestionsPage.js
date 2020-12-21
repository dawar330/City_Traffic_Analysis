import React from "react";
import { SuggestionsWidget } from "../Components/Widgets/SuggestionsWidget";
import firebase from "../../config/fbConfig";

export function SugestionsPage() {
  const [Suggestions, setSuggestions] = React.useState([]);

  const ref = firebase.firestore().collection("Suggestions");
  React.useEffect(() => {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({ ...doc.data(), id: doc.id });
      });
      setSuggestions(items);
    });
  });
  return (
    <>
      <div className="row">
        <div className="col-xxl-12 order-2 order-xxl-1">
          <SuggestionsWidget
            Suggestions={Suggestions}
            className="card-stretch gutter-b"
          />
        </div>
      </div>
    </>
  );
}
