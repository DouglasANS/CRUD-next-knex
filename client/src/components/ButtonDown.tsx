import { useContext } from "react"
import { EfeitosContext } from "../contexts/ContextEfeitos"
import styles from "../styles/ButtonDown.module.css"

export function ButtonDown(){


    const { page, ocultarFalse, ocultarTrue } = useContext(EfeitosContext)
   
    
    return(
        <div className={styles.container}>
          <div>


          { page ? (
            <button className={styles.show} onClick={ocultarFalse}>Hide</button> 
          ) : (
            <button className={styles.show} onClick={ocultarTrue}>Show</button>  
          )} 



          </div>
        </div>
        
        
       
    )
};