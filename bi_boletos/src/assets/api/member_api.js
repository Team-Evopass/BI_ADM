import axios from 'axios'

function get_members () {

  let status_exe = false
  let i = 0
 
  var members = []

  function set_members_table (my_member) {
    members.push(my_member)
  }

  while (status_exe == false) {
    
    var options = {
      method: 'GET',
      url: 'https://evo-integracao.w12app.com.br/api/v1/members',
      params: {skip: i, take: '50'},
      headers: {
        Authorization: 'Basic ZXZvcXVlZml0bmVzczo0RDQ0NDVGOC0yNzMwLTRCQTQtOEQwNC0yQkQ2RkIyREZEQkM=',
        'content-type': 'multipart/form-data; boundary=---011000010111000001101001'
      }
    };
    
    axios.request(options).then(function (response) {
      
      var tempi = response.data
      //console.log(response.data);
      
      for (var j = 0; j < tempi.length; j++) { // pegar o tamanho array que a resposta retornou mano (prestar atenção aos erros de dicionário)

        var member = []

        var nome = tempi[j].firstName + ' ' + tempi[j].lastName
        var id_member = tempi[j].idMember
        var cpf = tempi[j].document
        var telefone = tempi[j].contacts[0].description
        var email = tempi[j].contacts[1].description

        var responsavel = "programar interação" //

        try {
          var metodo = tempi[j].memberships[tempi[j].memberships.length - 1].name //Pegando o tipo de cobrança do plano (evopass e evopass recorrente)
        } catch {
          console.log('Erro ao acessar o metodo de pagamento - ' + id_member)
        }

        // if (metodo == "EVOPASS ") {
        //   metodo = "Boleto"
        // } else if (metodo == "") {
        //   Metodo
        // }

        var pago_por = "programar interação (crédito e boleto)"
        var inicio_vigencia = "programar interação"
        var user_status = "programar interação"

        try {
          
          var grupo = tempi[j].responsibles[0].name
          var cnpj_empresa = tempi[j].responsibles[0].observation //Vai estar sempre preenchido

          var cpf_titular = tempi[j].responsibles[0].cpf //Quando for titular, não vai estar preenchido
          
          if ( cpf_titular == null ) {
            var tipo = "Titular"
            responsavel = nome
          } else {
            var tipo = "Dependente"
          }

        } catch {
          console.log('Erro no cpf do titular ---------- ' + tempi[j].idMember)
        }

        member.push(grupo, grupo, cnpj_empresa, responsavel, nome, tipo, cpf, telefone, metodo, pago_por, inicio_vigencia, user_status)
        set_members_table(member)

      }

      
    }).catch(function (error) {
      console.error(error);
    });
    
    
    i = i + 50
    
    if ( i > 200 ) {
      status_exe = true
    }
    
  }

  console.log("Saiu do while")

  console.log(members)
  
  // console.table(members)

}

get_members()


