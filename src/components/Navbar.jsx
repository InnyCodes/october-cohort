import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <div>
            <ul style={{ width: "60%", backgroundColor: "black", display: "flex", justifyContent: 'space-between', borderRadius: "16px", color: "white", padding: "10px", margin: "auto", listStyleType: "none", cursor: "pointer" }}>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/contact"}>Contact</Link></li>
                <li><Link to={"/dashboard"}>Dashboard</Link></li>
            </ul>
        </div>
    )
}
