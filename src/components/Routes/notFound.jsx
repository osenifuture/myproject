import { useNavigate } from "react-router-dom"
import { useEffect } from "react"


const NotFound = () => {

    const Navigate = useNavigate()

    useEffect(()=>{
        Navigate('/notfound')
    },[Navigate] )

    return(
        <div>
            oooooops an error occured
        </div>
    )


}
export default NotFound;