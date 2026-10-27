import { Outlet } from "react-router-dom"
import { Sidebar } from "../components/sidebar"

export const Dashboard = () => {
    return (
        <div style={{ display:"flex", gap: "30px" }}>
            <Sidebar/>
            <div style={{ width:"80" }}><Outlet /></div>
        </div>
    )
}
