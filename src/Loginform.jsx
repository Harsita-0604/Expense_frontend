import React from 'react'

function Loginform(){
    const [data , setData ] = React.useState("")
    const [data2 , setData2 ] = React.useState("")
    function submit(e){
        e.preventDefault()
        setData2(data)
     }
    return (
        <div>
            <form onSubmit={submit}>
            <input value ={data}
            onChange={(e) => setData(e.target.value)} />
            <button>Enter</button>
        </form>
        <p>{data2}</p>

        </div>
    )
}
export default Loginform