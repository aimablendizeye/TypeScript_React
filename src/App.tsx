


// import TodoList from './TodoList'
// import Displaying from './Mosh'
//import Counter from './Counter'
//import Validation from './Validation'
//import Users from './Fetching'
// import Search from './Search'
//import { Space } from "lucide-react"

import Calculator from "./Calculator"
import Characters from "./Characters"
import { useState } from "react"


export default function App() {

  const [display, setDisplay] = useState ("0");
  const [firstNumber , setFirstNumber] = useState<number | null>(null)

  const [operator , setOperator] = useState<string | null>(null)

  function handleNumberClick (num :number) {

    setDisplay (display === "0"? String(num): display + num);
  }

  function handleOperatorClick (char:string) {
     setFirstNumber (Number(display));
     setOperator(char);
     setDisplay("0")
  }

  function handleEquals () {
    const secondNumber = Number(display)

    let result : number;

    switch(operator) {
      case '+':
        result = firstNumber! + secondNumber;
        break;
      case '-':
        result = firstNumber! - secondNumber;
        break; 
        
      case '*':
        result = firstNumber! * secondNumber;
        break; 
      case '/':
        result = firstNumber! / secondNumber;
        break; 
      case '%':
        result = firstNumber! % secondNumber;
        break;     
        
       default:
          return; 
    }

    setDisplay(String(result));
  }
 

function handleClear () {
  setDisplay ("0");
  setFirstNumber(null);
  setOperator (null);

}

function handleDecimals () {
  if(!display.includes("."))  {
    setDisplay( display + ".")
  }
}

function handleSign () {
  setDisplay(String(Number(display) * -1));
}


  return (

    <div className="ml-100 mt-20  ">

     < input type="text" 
             value={display}  
             readOnly
             className="w-70 h-12 bg-gray-400 rounded-t-sm text-right text-2xl px-3" />
    <div className="grid grid-cols-4 w-70 *:border *:border-gray-400 *:relative *:text-2xl *:hover:bg-gray-400">

         <Characters  onClick={handleClear} className="text-2xl mt-4 ml-2" char="AC"/>
         <Characters onClick={handleSign} className="text-2xl ml-2 mt-4" char="+/-"/>
         <Characters  onClick={handleOperatorClick} className="text-2xl ml-3 mt-4" char="%"/>
         <Characters  onClick={handleOperatorClick} className="bg-amber-600 w-full h-full absolute -top-2" char="/"/>
         <Calculator onClick={handleNumberClick} className="text-2xl ml-4 mt-4" num ={7}/>
         <Calculator onClick={handleNumberClick} className="text-2xl ml-4 mt-4" num ={8}/>
         <Calculator onClick={handleNumberClick} className="text-2xl ml-4 mt-4" num ={9}/>
         <Characters  onClick={handleOperatorClick} className="bg-amber-600 w-full h-full absolute -top-2" char="*"/>
         <Calculator onClick={handleNumberClick} className="text-2xl ml-4 mt-4" num ={4}/>
         <Calculator onClick={handleNumberClick} className="text-2xl ml-4 mt-4" num ={5}/>
         <Calculator onClick={handleNumberClick} className="text-2xl ml-4 mt-4" num ={6}/>
         <Characters  onClick={handleOperatorClick} className="bg-amber-600 w-full h-full absolute -top-2" char="-"/>
         <Calculator onClick={handleNumberClick} className="text-2xl ml-4 mt-4" num ={1}/>
         <Calculator onClick={handleNumberClick} className="text-2xl ml-4 mt-4" num ={2}/>
         <Calculator onClick={handleNumberClick} className="text-2xl ml-4 mt-4" num ={3}/>
         <Characters  onClick={handleOperatorClick} className="bg-amber-600 w-full h-full absolute -top-2" char="+"/>
         <Calculator onClick={handleNumberClick} className="text-2xl mt-4 w-full col-span-2" num ={0} />
         <Characters char=""/>
         
         <Characters onClick={handleDecimals} className="text-3xl ml-4 mb-5" char="."/>
         <Characters onClick={handleEquals}  className="text-3xl mb-5 bg-amber-600 w-full h-full absolute -top-2" char="="/>

           
         
    </div>

    </div>
 
  )
}