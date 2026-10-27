export const Scard = ({obj}) => {
    const divStyle ={
        padding: "10px 20px",
        marginTop: "10px 20px"
    }
  return (
        <div style={divStyle}>
            <img src={obj.img} alt="" />
            <h1>{obj.header}</h1>
            <div>{obj.paras.map((text,i)=>(
                <p key={i}>{text}</p>
            ))}</div>
            <a href="">Read More</a>
            {/* <p>{obj.paras[0]}</p> */}
        </div>
    )
  
}
