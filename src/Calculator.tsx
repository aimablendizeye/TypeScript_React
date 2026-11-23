interface CalProps {
    num : number;
    className? : string;
    
}

function Calculator ({num,className}: CalProps)  {

    return (
    <div >
        <button className={"px-2 py-1 mt-2 mb-2 " +className }>{num}</button>
    

    </div>
       

    )
}

export default Calculator;