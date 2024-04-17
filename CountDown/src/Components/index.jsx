import Count from "./Count"

function Countdown(){
    function handletime(){
        console.log("hurray hurray")
    }




    return(
        <>
            <p>Countdown</p>
            <Count intial={100} end={handletime} />

        </>
    )

}
export default Countdown