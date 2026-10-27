import { Link } from "react-router-dom"


export const PageNotFound = () => {
  return (
    <div>
      <h1>404</h1>
      <h4>PAge not Found, go back to <Link to={"/"}>home</Link>  page </h4>
    </div>
  )
}
