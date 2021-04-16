
exports.seed = function(knex) {
  
  return knex('users').del()
    .then(function () {

      return knex('users').insert([
        {nome: 'Douglas', 
        cpf: '123456789', 
        telefone:'12345678', 
        idade:25, 
        sexo:'masculino', 
        nacionalidade: 'Brasileira', 
        email:'douglasans@hotmail.com'},

        {nome: 'ade', 
        cpf: '98754321', 
        telefone:'12345678', 
        idade:11, 
        sexo:'masculino', 
        nacionalidade: 'Brasileira', 
        email:'ade@hotmail.com'},

        {nome: 'Cam', 
        cpf: 'swsswdasd', 
        telefone:'1565858', 
        idade:52, 
        sexo:'feminino', 
        nacionalidade: 'Brasileira', 
        email:'cam@hotmail.com'},

        {nome: 'La', 
        cpf: 'rojuyikuyj1', 
        telefone:'12555558', 
        idade:43, 
        sexo:'feminino', 
        nacionalidade: 'Brasileira', 
        email:'la@hotmail.com'},

      ]);
    });
};
