import { Link } from "react-router-dom"
import "../sidebar.css"
export const Sidebar = () => {
    return (
        <div className="root">
            <ul className="list">
                <li><Link to={"/dashboard"}>Profile</Link></li>
                <li><Link to={"overview"}>Overview</Link></li>
                <li><Link to={"settings"}>Settings</Link></li>
                <li><Link to={"logs"}>Logs</Link></li>
            </ul>
        </div>
    )
}