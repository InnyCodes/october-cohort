import "./Button.css"

function Button({bg,color,text,click}) {
    const pstyle ={
        backgroundColor: bg,
        color: color,
        padding: "10px 20px"
    }
    const dStyle = {
        marginTop: "10px",
    }
    return (
        <div style={dStyle}>
            <button className="but" style={pstyle} onClick={click}>{text}</button>
        </div>
    )
}

export default Button