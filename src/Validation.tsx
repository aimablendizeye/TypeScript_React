import React, {useState} from "react"

function Validation () {
   const[email, setEmail] = useState<string> ('')
   const [password,setPassword] = useState<string> ('')

   const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   
    if (!email || !password) {
        alert ("All fields are required")
          return;
    }

    alert("Login successfull!")


   } 


    return (
        <div className="flex flex-col gap-3">
            <h1 className="pl-20 font-bold text-2xl">Sign In</h1> 
         <form onSubmit={handleSubmit}>
              <div className="flex gap-2">
                <p className="pt-1">Email:</p>
                <input type="email" placeholder="Enter your Email" value={email} onChange  = {(e) => setEmail(e.target.value)}className="border-2 border-gray-500 rounded px-3 py-1 ml-10" />

            </div>


            <div className="flex gap-2">
                <p className="pt-1">Password:</p>

                <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} className="border-2 border-gray-500 rounded px-3 py-1 ml-3" />
            </div>

            <button type="submit" className="border-2 borber-white rounded w-fit mt-2 px-2 py-1 ml-30 cursor-pointer">Login</button>

         </form>
           
        </div>
    )
}

export default Validation;