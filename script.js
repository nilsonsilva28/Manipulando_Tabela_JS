class Pessoa{
    constructor() {
        this.id = 1;
        this.arrayPessoas = [];
    }

    salvar(){
        let pessoa = this.lerDados();
       
        if (this.validaCampo(pessoa)){
            this.adicionar(pessoa);
            
            
        }
        
        
        this.listaTabela();
    }

    listaTabela(){
        let tbody = document.getElementById('tbody');
        
        tbody.innerText = '';
        
        for(let i = 0; i < this.arrayPessoas.length; i++){

            let tr = tbody.insertRow();
            
            let td_id = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_sobrenome = tr.insertCell();
            let td_email = tr.insertCell();
            let td_altura = tr.insertCell();
            let td_sexo = tr.insertCell();

            td_id.innerText = this.arrayPessoas[i].id;
            td_nome.innerText = this.arrayPessoas[i].nomePessoa;
            td_sobrenome.innerText = this.arrayPessoas[i].sobrenome;
            td_email.innerText = this.arrayPessoas[i].email;
            td_altura.innerText = this.arrayPessoas[i].altura;
            td_sexo.innerText = this.arrayPessoas[i].sexo;
        }
    }

    adicionar(pessoa){
        this.arrayPessoas.push(pessoa);
        this.id++;
    }

    lerDados(){
        let pessoa = {}
        pessoa.id = this.id;
        pessoa.nomePessoa = document.getElementById('nome').value;
        pessoa.sobrenome= document.getElementById('sobrenome').value;
        pessoa.email= document.getElementById('email').value;
        pessoa.altura= document.getElementById('altura').value;
        pessoa.sexo= document.getElementById('sexo').value;
        
        return pessoa;
    }

    validaCampo(pessoa){
        let msg = '';

        if(pessoa.nomePessoa == ''){
            msg += '-Informe o nome da pessoa \n';
        }

        if(pessoa.sobrenome == ''){
            msg += '-Informe o sobrenome da pessoa \n';
        }

        if(pessoa.email == ''){
            msg += '-Informe o email da pessoa \n';
        }

        if(pessoa.altura == ''){
            msg += '-Informe a altura da pessoa \n';
        }

        if(pessoa.sexo == ''){
            msg += '-Informe o sexo da pessoa \n';
        }

        if (msg != ''){
            alert(msg);
            return false;
        }

        
        
        return true;    

    }

}

var pessoa = new Pessoa();