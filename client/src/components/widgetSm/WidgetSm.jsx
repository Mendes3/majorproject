import "./widgetSm.css";
import {Face, Visibility} from '@material-ui/icons'

export default function WidgetSm() {
    return (
        <div className="widgetSm" >
            <span className="widgetSmTitle">Members Rank</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <Face />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Jai Singh</span>
                        <span className="widgetSmUserDevice">Smartphone</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <Face />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Jai Singh</span>
                        <span className="widgetSmUserDevice">Smartphone</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <Face />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Jai Singh</span>
                        <span className="widgetSmUserDevice">Smartphone</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <Face />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Jai Singh</span>
                        <span className="widgetSmUserDevice">Smartphone</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <Face />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Jai Singh</span>
                        <span className="widgetSmUserDevice">Smartphone</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}