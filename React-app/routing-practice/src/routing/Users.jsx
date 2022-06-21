import {Link, useParams} from 'react-router-dom';

const Users = () => {
    const {id} = useParams(); 
return (
    <>
    <h1> List of Users here </h1>
    <h3> Tyron, Niki, Michal, Calum, Molly</h3>
    <strong>Select a user:</strong>
             <ul>
                 <li>
                     <Link to="/users/Tyron">User 1</Link>
                 </li>
                 <li>
                     <Link to="/users/Niki">User 2</Link>
                 </li>
                 <li>
                     <Link to="/users/Michal">User 3</Link>
                 </li>
             </ul>
             <p>{id}</p>
         </>
)

}
export default Users