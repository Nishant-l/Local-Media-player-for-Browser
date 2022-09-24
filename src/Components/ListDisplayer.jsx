export const ListDisplayer = ({listOfVedio}) => {
    return (
        <>
        <h1>Choose vedio from bellow</h1>
        <ul>
            {
                Object.keys(listOfVedio).map((ele)=>{
                    return(
                        <li style={{color:'white'}}>
                            {ele}
                        </li>
                    )
                })
            }
        </ul>
        </>
    )
}