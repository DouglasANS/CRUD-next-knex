
import styles from '../styles/GetUpDel.module.css';
import { Table } from 'react-bootstrap'
import { useContext,  useState } from 'react';
import { EfeitosContext } from "../contexts/ContextEfeitos";
import Axios from 'axios'

export function GetUpDel(){

    const {deleteUser , all} = useContext(EfeitosContext)
    const [newEmail, setNewEmail] = useState('')



    function updateEmail(id){
        if(newEmail == ''){
            
        }else
        {
            Axios.put("http://localhost:3002/api/update", {
            userid: id,
            userEmail: newEmail});
        }
        
    setNewEmail("")
    }




    return( 
        <div className={styles.container}>

        <Table striped bordered hover >
            <thead className={styles.back}>
                <tr>
                <th><h1>Id</h1></th>
                <th><h1>Name</h1></th>
                <th><h1>Email</h1></th>
                <th><h1>Idade</h1></th>
                <th><h1>Delete</h1></th>
                </tr>
            </thead>
            <tbody>
                

            {all.map((val) => {
                    return (
                        
                <tr className={styles.back} key={val.id}>
                <td><h1>{val.id}</h1></td>
                <td><h1>{val.nome}</h1></td>
                
                <td className={styles.get}>
                <h1>{val.email}</h1>
                    <div className={styles.flex}>
                    <input type="text" 
                    onChange={(e)=>{setNewEmail(e.target.value)}}></input>
                    <button onClick={() => {updateEmail(val.id)}}>Update</button>
                    </div>
                </td>

                <td><h1>{val.idade}</h1></td>
                <td className={styles.btnDel}><button onClick={() => {deleteUser(val.id)}}>Delete</button></td>
                
                </tr>

                           
                    )
                })} 
            </tbody>
            </Table>

    </div>
  )
};