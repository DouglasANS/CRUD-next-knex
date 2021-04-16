import styles from '../styles/Inicio.module.css';


export function Primeiro(){

    return(
    <div className={styles.container}>
        <div className={styles.center}>
            <h1>CRUD</h1>
            <div className={styles.botao}>
                <a href="/usuario"><button>Usuário</button></a> 
            </div>

        </div>

    </div>

  )
};