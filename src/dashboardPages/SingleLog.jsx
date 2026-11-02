import { useParams } from "react-router-dom"

export const SingleLog = () => {
    const param = useParams()
    console.log(param);
    
  return (
    <div>
        <ul>
            <li>{param.id}</li>
        </ul>
    </div>
  )
}
