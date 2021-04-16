import styles from '../styles/formularioUsuario.module.css';
import { Form, Col, Button } from 'react-bootstrap'
import { useContext } from 'react';
import { EfeitosContext } from "../contexts/ContextEfeitos";
import Axios from 'axios';

export function FormularioUsuario(){

    const { 
        name, 
        gender, 
        age,
        email,
        telephone,
        cpf,
        nationality,
        address,
        Uname,
        Ugender,
        Uage,
        Uemail,
        Utelephone,
        Ucpf,
        Unationality,
     } = useContext(EfeitosContext)
    
    function submitBd(){

        Axios.post('http://localhost:3002/api/insert', 
        {
        usuarioName: name, 
        usuarioGender:gender,
        usuarioAge:age,
        usuarioEmail:email,
        usuarioTelephone:telephone,
        usuarioCpf:cpf,
        usuarioNationality:nationality,
        usuarioAddress: address,
        
    })

        //setAll([...all, {name: name, review: review}]) necessário. elimina bug de adicionar
        }



    return(
            <Form className={styles.form}>
            <h1 className={styles.titulo}>Usuário</h1>
                <Form.Row className={styles.row1}>
                <Form.Group controlId="formGridAddress1" className={styles.row}>
                    <Form.Label className={styles.th1}>Nome</Form.Label>
                    <Form.Control  className={styles.back} 
                    onChange={(e)=>{Uname(e.target.value)}}
                    />
                </Form.Group>

                    <Form.Group as={Col}>
                    <Form.Label className={styles.th1}>Sexo</Form.Label>
                    <Form.Control as="select"  className={styles.back}
                    onChange={(e)=>{Ugender(e.target.value)}}
                    >   <option>---</option>
                        <option>masculino</option>
                        <option>feminino</option>
                    </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col}  >
                    <Form.Label className={styles.th1}>Idade</Form.Label>
                    <Form.Control type="number" className={styles.back} 
                    onChange={(e)=>{Uage(e.target.value)}}
                    />
                    </Form.Group>
                </Form.Row>

                

                <Form.Group className={styles.row2}>
                    <Form.Label className={styles.th1}>Email</Form.Label>
                    <Form.Control type="email"  className={styles.back}  
                    onChange={(e)=>{Uemail(e.target.value)}}
                    />
                </Form.Group>

                <Form.Row className={styles.row}>
                    <Form.Group as={Col} >
                    <Form.Label className={styles.th1}>Telefone</Form.Label>
                    <Form.Control  className={styles.back} 
                    onChange={(e)=>{Utelephone(e.target.value)}}
                    />
                    </Form.Group>

                    <Form.Group as={Col} >
                    <Form.Label className={styles.th1}>CPF</Form.Label>
                    <Form.Control type="number" className={styles.back} 
                    onChange={(e)=>{Ucpf(e.target.value)}}
                    />
                    </Form.Group>

                    <Form.Group as={Col} >
                    <Form.Label className={styles.th1}>Nacionalidade</Form.Label>
                    <Form.Control className={styles.back} 
                    onChange={(e)=>{Unationality(e.target.value)}}/>
                    </Form.Group>

                                       
                </Form.Row>

                

                <Button 
                variant="primary" 
                type="submit" 
                className={styles.btn_Cadastrar}
                onClick={submitBd}
                >
                    Cadastrar
                </Button>
            </Form>

    )
};