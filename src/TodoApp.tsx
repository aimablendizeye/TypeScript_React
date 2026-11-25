
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

            <div className='mt-6'>
                <ul>
                  {tasks.map((task,index) => (

                    <li key={index} className=' flex items-center gap-3 w-full '>
                        <input type="checkbox" />
                        <span className='flex-1 min-w-0 wrap-break-words'>{task}</span>
                      
                        <Trash onClick={() => deleting(index)} className=' shrink-0 w-4 h-4 text-[#FE2500] absolute bg-[#F1F3F4] cursor-pointer  rounded-full   right-98'/>
                    </li>
                  ))}
                </ul>
            </div>
          
        </div>

    )
}