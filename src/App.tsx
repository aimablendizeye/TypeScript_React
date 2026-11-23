


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
  const [getValue,setGetValue] = useState("")
  
  return (
    <div className="ml-120 mt-20 ">

     < input type="text"  className="w-70 h-12 bg-gray-300 rounded-t-sm" />
      <div className="grid grid-cols-4 w-70 *:border *:border-gray-500 *:relative *:text-2xl *:hover:bg-gray-500">

         <Characters className=" text-2xl mt-4 ml-2" char="AC"/>
         <Characters className="text-2xl ml-2 mt-4" char="+/-"/>
         <Characters className="text-2xl ml-3 mt-4" char="%"/>
         <Characters className="bg-amber-600 w-full h-full absolute -top-2" char="/"/>
         <Calculator className="text-2xl ml-4 mt-4" num ={7}/>
         <Calculator className="text-2xl ml-4 mt-4" num ={8}/>
         <Calculator className="text-2xl ml-4 mt-4" num ={9}/>
         <Characters className="bg-amber-600 w-full h-full absolute -top-2" char="*"/>
         <Calculator className="text-2xl ml-4 mt-4" num ={4}/>
         <Calculator className="text-2xl ml-4 mt-4" num ={5}/>
         <Calculator className="text-2xl ml-4 mt-4" num ={6}/>
         <Characters className="bg-amber-600 w-full h-full absolute -top-2" char="-"/>
         <Calculator className="text-2xl ml-4 mt-4" num ={1}/>
         <Calculator className="text-2xl ml-4 mt-4" num ={2}/>
         <Calculator className="text-2xl ml-4 mt-4" num ={3}/>
         <Characters className="bg-amber-600 w-full h-full absolute -top-2" char="+"/>
         <div className="grid grid-cols-3 w-70  ">
         <Calculator className="text-2xl ml-4 mt-4" num ={0} />
         <Characters className="text-3xl ml-4 mb-5" char="."/>
         <Characters className="text-3xl ml-3 mb-5" char="="/>
         </div>
        
         
    </div>

    </div>
 
  )
}