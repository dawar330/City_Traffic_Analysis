/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import React from "react";
import {Layout} from "../_metronic/layout";
import BasePage from "./BasePage";
import Authpage from "./pages/auth/AuthPage"

export function Routes() {
    

    return (
        
                <Layout>
                    <Authpage/>
                </Layout>
            
    );
}
