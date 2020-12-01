import React, {useMemo} from "react";
import {Link} from "react-router-dom";
import objectPath from "object-path";
import {Brand} from "../brand/Brand";
import {VardenMenu} from "./aside-menu/VardenMenu";
import {useHtmlClassService} from "../../_core/MetronicLayout";

export function VardenAside() {
  const uiService = useHtmlClassService();

  const layoutProps = useMemo(() => {
    return {
      disableScroll:
          objectPath.get(uiService.config, "aside.menu.dropdown") === "true" ||
          false,
      asideClassesFromConfig: uiService.getClasses("aside", true),
      disableAsideSelfDisplay:
          objectPath.get(uiService.config, "aside.self.display") === false,
      headerLogo: uiService.getLogo()
    };
  }, [uiService]);

  return (
      <>
        {/* begin::Aside */}
        <div id="kt_aside"
             className={`aside aside-left  ${layoutProps.asideClassesFromConfig} d-flex flex-column flex-row-auto`}>
          <Brand/>

          {/* begin::Aside Menu */}
          <div id="kt_aside_menu_wrapper" className="aside-menu-wrapper flex-column-fluid">
            {layoutProps.disableAsideSelfDisplay && (
              <>
                {/* begin::Header Logo */}
                <div className="header-logo">
                  <Link to="">
                    <img alt="logo" src="media\logos\TMC.jpg"/>
                  </Link>
                </div>
                {/* end::Header Logo */}
              </>
            )}
            <VardenMenu disableScroll={layoutProps.disableScroll}/>
          </div>
          {/* end::Aside Menu */}
        </div>
        {/* end::Aside */}
      </>
  );
}
