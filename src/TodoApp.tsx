
import {Plus,Trash} from 'lucide-react'
import {useState} from 'react'
import type{ ChangeEvent } from 'react'

export default function TodoApp () {

    const [tasks,setTasks] = useState <string[]>([])
    const [text,setText] = useState <string> ("")
    
    function handleInput (event:ChangeEvent<HTMLInputElement>) {
        setText(event.target.value)
    }

    function adding () {
        if (text.trim()== "") return;
        setTasks ([...tasks,text]);
        setText("");
    }
    
    function deleting (index:number) {
            setTasks(tasks.filter((_, taskIndex) => taskIndex !== index))
    }




    return (
        <div>
            <h1 className='text-7xl ml-24 mb-12 text-[#EDEDED]'>todos</h1>
        <div className='flex relative'>
            <input 
            type="text"
             placeholder="Add todo..." 
             className="bg-gray-50  shadow-sm  rounded-full py-3 w-100 px-2"
             value={text} 
             onChange={handleInput}/>
             
            <Plus onClick={adding}  className=' w-5 h-5 absolute left-90 top-4 bg-[#3BAEA7] text-white rounded-full '/>

            </div>

            <div>
                <ul>
                  {tasks.map((task,index) => (

                    <li key={index} className=' flex ml-3 mt-2   space-y-5 '>
                        {task}
                        <Trash onClick={() => deleting(index)} className='w-5 h-5 absolute  right-98'/>
                    </li>
                  ))}
                </ul>
            </div>
          
        </div>

    )
}