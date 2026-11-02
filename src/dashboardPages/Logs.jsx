import { useState } from "react"
import { useNavigate } from "react-router-dom";

export const Logs = () =>{
     const [inpValue, setInputValue] = useState('');
     const navigate = useNavigate()
        const handleSubmit = () => {
            // console.log(inpValue);
            navigate(`/dashboard/log/${inpValue}`)
        }
        
        const handleInputChange = (e) => {
            setInputValue(e.target.value)
        }

    return(
        <div>
            <label htmlFor="name">
                Name<br/>
                <input type="text" value={inpValue} onChange={handleInputChange} name="name" id="name" />
                {/* <input type="text" value={inpValue} onChange={(e) => setInputValue(e.target.value)} name="name" id="name"/> */}
            </label> <br /> <br />
            {/* <button onClick={()=> console.log(inpValue)}>Submit</button> */}
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}