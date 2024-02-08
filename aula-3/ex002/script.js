const biblioteca = []

const registrarContato = (nome, telefone, email) => {
    contato = {
        "nome": nome,
        "telefone": telefone,
        "email": email
    }

    biblioteca.push(contato)
}

registrarContato('Jonathan', '+55 62 3200-0000', 'teste@teste.io')
registrarContato('Joseph', '+55 62 3200-0000', 'teste@teste.io')
registrarContato('Jotaro', '+55 62 3200-0000', 'teste@teste.io')
registrarContato('Giorno', '+55 62 3200-0000', 'teste@teste.io')
registrarContato('Jolyne', '+55 62 3200-0000', 'teste@teste.io')
registrarContato('Johnny', '+55 62 3200-0000', 'teste@teste.io')

console.log(biblioteca)
