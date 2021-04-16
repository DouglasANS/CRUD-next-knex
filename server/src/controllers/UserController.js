const knex = require('../database')  

module.exports = {
    async index(req, res) { 

        const results = await knex.select('*').from('users')
        
        return res.json(results)
    },
    async create(req, res, next){
        try {

            const { usuarioName } = req.body
            const { usuarioGender } = req.body
            const { usuarioAge } = req.body
            const { usuarioEmail } = req.body
            const { usuarioTelephone } = req.body
            const { usuarioCpf } = req.body
            const { usuarioNationality } = req.body
        
            await knex('users').insert([
                {nome: usuarioName, 
                cpf: usuarioCpf, 
                telefone:usuarioTelephone, 
                idade:usuarioAge, 
                sexo:usuarioGender, 
                nacionalidade: usuarioNationality, 
                email:usuarioEmail},
                ])

            return res.status(201).send()
        } catch (error) {
            next(error)
        }    
    },
    async update(req, res, next){
        try {

            
            const { userid } = req.body
            const { userEmail } = req.body

            console.log(userid)
            console.log(userEmail)
        
            await knex('users')
            .where('id','=' , userid )
            .update({ email:userEmail })
            

            return res.send()

            
        } catch (error) {
            next(error)
        }

    },
    async delete(req, res, next){
        try{
            const { idUsuario } = req.params
            console.log(idUsuario)

            await knex('users')
            .where('id', idUsuario).del()
            
            

            return res.send()

        }catch (error){
            next(error)
        }
    }
}