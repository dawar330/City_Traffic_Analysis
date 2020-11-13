import React, { useMemo } from "react";
import objectPath from "object-path";

import { useHtmlClassService } from "../../_core/MetronicLayout";

import { UserNotificationsDropdown } from "../extras/dropdowns/UserNotificationsDropdown";


export function Topbar() {
  const uiService = useHtmlClassService();

  const layoutProps = useMemo(() => {
    return {
      viewSearchDisplay: objectPath.get(
        uiService.config,
        "extras.search.display"
      ),
      viewNotificationsDisplay: objectPath.get(
        uiService.config,
        "extras.notifications.display"
      ),
    };
  }, [uiService]);

  return (
    <div className="topbar">


      {layoutProps.viewNotificationsDisplay && <UserNotificationsDropdown />}

      






     
    </div>
  );
}
