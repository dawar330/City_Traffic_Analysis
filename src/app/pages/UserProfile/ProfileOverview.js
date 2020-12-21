import { isToday, parseISO } from "date-fns";
import React, { useEffect, useState } from "react";
import { auth, db } from "../../../config/fbConfig";
import {
  AdvanceTablesWidget7,
  ListsWidget10,
  ListsWidget14,
} from "../../../_metronic/_partials/widgets";
// import { toAbsoluteUrl } from "../../../_metronic/_helpers";

export function ProfileOverview(props) {
  const [Duties, setDuites] = useState();

  useEffect(() => {
    db.collection("VardenDuties")
      .orderBy("StartTime", "desc")
      .limit(10)
      .get()
      .then(function(querySnapshot) {
        const Duties = [];
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          Duties.push({ ...doc.data(), ID: doc.id });
        });
        setDuites(Duties);
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
  }, []);
  const { User } = props;
  const { UserNotification } = props;
  const Dutys = [];

  {
    Duties &&
      Duties.forEach((Duty) => {
        if (
          Duty.Id == User.ID &&
          isToday(parseISO(Duty.EndTime.substring(0, 10)))
        ) {
          Dutys.push(Duty);
        }
      });
  }
  console.log(Dutys);
  return (
    <div className="row">
      <div className="col-lg-6">
        <ListsWidget14
          Duties={Dutys}
          className="card-stretch gutter-b"
        ></ListsWidget14>
      </div>
      <div className="col-lg-6">
        <ListsWidget10
          User={User}
          UserNotification={UserNotification}
        ></ListsWidget10>
      </div>
      {/* <div className="col-lg-12">
        <AdvanceTablesWidget7 className="card-stretch gutter-b"></AdvanceTablesWidget7>
      </div> */}
    </div>
  );
}
