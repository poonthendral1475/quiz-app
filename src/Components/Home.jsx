import { useNavigate } from "react-router-dom"

export default function Home()
{
    let navigate=useNavigate()
    function handleSubmit(e)
    {
        e.preventDefault();
        navigate("/quize")
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" />
            <button type="submit">Start</button>
        </form>
        </>
    )
}