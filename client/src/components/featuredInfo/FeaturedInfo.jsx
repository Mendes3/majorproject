import "./featuredInfo.css";
import {ArrowDownward, ArrowUpward} from "@material-ui/icons";

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Registered</span>
                <div className="featuredRegisteredContainer">
                    <span className="featuredRegistered">40,000</span>
                    <span className="featuredRegisteredRate">
                        +500 <ArrowUpward className="featuredIcon" />
                    </span>
                </div>
                <div>
                    <span className="featuredSub">Compared to Yesterday</span>
                </div>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Active</span>
                <div className="featuredRegisteredContainer">
                    <span className="featuredRegistered">30,000</span>
                    <span className="featuredRegisteredRate">
                        -300 <ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>
                <div>
                    <span className="featuredSub">Compared to Last Hour</span>
                </div>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">InUse</span>
                <div className="featuredRegisteredContainer">
                    <span className="featuredRegistered">10,000</span>
                    <span className="featuredRegisteredRate">
                        +500 <ArrowUpward className="featuredIcon" />
                    </span>
                </div>
                <div>
                    <span className="featuredSub">Compared to Last Hour</span>
                </div>
            </div>
        </div>
    )
}
