import {createContext, ReactNode, useState, useEffect } from 'react'
import Axios from 'axios';

interface EfeitosContexteData{
    name: string ;
    gender: string ;
    age: string ;
    email: string ;
    telephone: string ;
    cpf: string ;
    nationality: string ;
    all: any ;
    address: string;
    page: boolean;

    Uname: any;
    Ugender: any ;
    Uage: any ;
    Uemail: any ;
    Utelephone: any ;
    Ucpf: any ;
    Unationality: any ;
    Uall: any ;
    Uaddress: any;
    deleteUser: any;
    ocultarFalse: any;
    ocultarTrue: any;
    
}

interface EfeitosProviderProps {
    children: ReactNode;
}
export const EfeitosContext = createContext({} as EfeitosContexteData);

export function EfeitosProvider({ children }: EfeitosProviderProps ){
   
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [cpf, setCpf] = useState('');
    const [nationality, setNationality] = useState('');
    const [address, setAddress] = useState('');
    const [all, setAll] = useState([]);

   
   const [page, setActive] = useState(false)

   function ocultarFalse() {
        setActive(false)
   }

   function ocultarTrue() {
    setActive(true)
}



    function Uname(name) {
        setName(name)  
    }

    function Ugender(gender){
        setGender(gender)
    }
    function Uage(age){
        setAge(age)
    }
    function Uemail(email){
        setEmail(email)
    }
    function Utelephone(telephone){
        setTelephone(telephone)
    }
    function Ucpf(cpf){
        setCpf(cpf)
    }
    function Unationality(nationality){
        setNationality(nationality)
    }
    function Uall(all){
        setAll(all)
    }
    function Uaddress(address){
        setAddress(address)
    }

    useEffect(()=>{
        Axios.get('http://localhost:3002/api/get').then((response) => {

            Uall(response.data) //array de dados do bd
            
        })  
    }, [deleteUser])

    function deleteUser(movie){
        Axios.delete(`http://localhost:3002/api/delete/${movie}`);
    }

    
    return(
        <EfeitosContext.Provider 
        value={{
            name,
            gender,
            age,
            email,
            telephone,
            cpf,
            nationality,
            all,
            address,
            page,
            Uname,
            Ugender,
            Uage,
            Uemail,
            Utelephone,
            Ucpf,
            Unationality,
            Uall,
            Uaddress,
            deleteUser,
            ocultarFalse,
            ocultarTrue,
            
        }}>
            {children}
        </EfeitosContext.Provider>
    )
}


