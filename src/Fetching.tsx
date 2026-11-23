
import {useState, useEffect} from 'react'


interface User {
  id :number;
  name : string;
  email: string;
}




function Users () {

  const [users,setUsers] = useState<User[]>([])
  const [loading , setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string> ('')



useEffect (() => {
  const fetchUsers = async () => {

    try {
         const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error ("Failed to fetch user")
    }
    const data:User[] = await response.json();

    setUsers (data)

  
  } catch(err) {
     setError ("Something went wrong")
  } finally {
    setLoading(false);
  }
 }
 fetchUsers();

},[]);

if (loading)  {
  return  <p>Loading</p>
}

if (error) {
  return <p>{error}</p>
}

 return (
      <div>
        <p className='font-bold text-2xl ml-10'>Users list</p>


        {users.map ((user) => (
          
          <div key={user.id} className='pt-2 flex gap-5'>
            <h3 className='font-bold'>{user.name} :</h3>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
  
 )
   
}


export default Users;

