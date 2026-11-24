interface CalProps {
    num : number;
    className? : string;
    onClick : (num :number) => void;
    
}

function Calculator ({num,className,onClick}: CalProps)  {

    return (
    <div >
        <button  
          onClick = {() => onClick(num)}
          className={"  px-2 py-1 mt-2 mb-2 " +className }> 

          {num}

          </button>
    </div>
       
    )
}

export default Calculator;