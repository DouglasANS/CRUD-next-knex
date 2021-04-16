import  styles  from "../styles/Home.module.css"
import { FormularioUsuario } from "../components/Formulariousuario";
import { GetUpDel } from "../components/GetUpDel";
import { ButtonDown } from "../components/ButtonDown";
import { useContext } from "react";
import { EfeitosContext } from "../contexts/ContextEfeitos";



export default function Usuario() {

  const { page} = useContext(EfeitosContext)



  return (
    <div className={styles.fundo}>
    <div className={styles.container}>
      <div className={styles.user}>
        <FormularioUsuario />
      </div>
      <div className={styles.gud}>
      { page ? (
          <GetUpDel />
          ) : (
            <div></div>
          )} 
        
      </div>
      
    </div>

    <div>
      <ButtonDown />
    </div>


    </div>
  )
}
