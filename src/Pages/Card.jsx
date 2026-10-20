import appStyle from "./App.module.css"
import Button from "../components/button"

export const Card= ({obj})=> {
    const pstyle = {
        color: 'white',
        fontSize:"20px"
    }

    return(
        <div className="card-container" style={{ padding:"20px" }}>
            <img style={{ width: "100%"}} src={obj.img} alt="" />
            <h1 className={appStyle.header}>A Welcome Card</h1>
            <p style={pstyle}>{obj.para}</p>
            <Button text={obj.buttonContent} bg="orange" color="blue"/>
        </div>
    )
}
