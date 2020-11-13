import React from "react";

import TrafficStatsWidget from "../Widgets/TrafficStatsWidget";
import HourlyTrafficWidget from "../Widgets/HourlyTrafficWidget";
import CurrentCongesstionWidget from "../Widgets/CurrentCongesstionWidget";
import UserWidget from "../Widgets/UserWidget";
import TrafficFlowWidget from "../Widgets/TrafficFlowWidget";


export function Dashboard() {
    return (<>
            <div className="row">
    
                <div className="col-lg-6 col-xxl-4">
                    <TrafficStatsWidget className="card-stretch gutter-b"/>
                </div>
                

                <div className="col-lg-6 col-xxl-4">
                    <HourlyTrafficWidget className="card-stretch card-stretch-half gutter-b"/>
                    <CurrentCongesstionWidget className="card-stretch card-stretch-half gutter-b"/>
                </div>

                <div className="col-lg-4">
                    <UserWidget className="card-stretch gutter-b" />
                </div>
                
            </div>
            <div className="row">
            <div className="col-lg-6">
                    <TrafficFlowWidget className="card-stretch gutter-b" />
                </div>
                
            </div>

    </>);
}
