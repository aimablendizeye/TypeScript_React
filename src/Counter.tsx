import {useState} from 'react'


function Counter () {
 
    const [count,setCount] = useState<number>(0)

    

    return (
        <>
         <p className='bg-black text-white rounded-sm w-fit text-2xl font-bold px-2 py-1'>{count}</p>
         <div className='flex gap-2 mt-20 -ml-30'>
            
            <button onClick={()=> setCount(count+1)} className='bg-gray-400 w-fit px-2 py-1 rounded-sm'>Increase</button>
            <button onClick={()=> setCount(0)} className='bg-gray-400 w-fit px-2 py-1 rounded-sm'>Reset</button>
            <button onClick={()=> setCount(count-1)} className='bg-gray-400 w-fit px-2 py-1 rounded-sm'>Decrease</button>
        </div>
        </>
       
          
    )
}

export default Counter;