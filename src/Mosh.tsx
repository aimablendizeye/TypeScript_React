
import {useState} from "react"

function Displaying ( ) {

    
  const [list,setList] = useState<string>("")
    const items:string[] = ["Kigali","Gasabo","Kicukiro","Nyarugenge"];
    

    function handleClick (event:MouseEvent) {

    }
   
  

    return (
        <div className="flex flex-col gap-3">
            <h2>Hello here is the list</h2>
            {items.length === 0 && <p>Hello the list is empty</p>}

            <ol className="list-group flex flex-col gap-1">
               {items.map ((item,index) => (
                <li key={index} className="list-group-item cursor-pointer bg-gray-400 rounded-sm ">{item}</li>
               ))  }
              
            </ol>
        </div>
    )

}

export default Displaying;
