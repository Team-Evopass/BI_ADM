import axios from 'axios'

export default async function get_members () {

  let status_exe = true
  let i = 0
 
  var members = []

  function set_members_data (my_member) {
    members.push(my_member)
  }

  while (status_exe == true) {
    
    var options = {
      method: 'GET',
      url: 'https://evo-integracao.w12app.com.br/api/v1/members',
      params: {skip: i, take: '50'},
      headers: {
        Authorization: 'Basic ZXZvcXVlZml0bmVzczo0RDQ0NDVGOC0yNzMwLTRCQTQtOEQwNC0yQkQ2RkIyREZEQkM=',
        'content-type': 'multipart/form-data; boundary=---011000010111000001101001'
      }
    };
    
    await axios.request(options).then(function (response) {
      
      var tempi = response.data
      
      if (tempi.length == 0) {
       status_exe = false
      }
      
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
          if (metodo == "EVOPASS ") {
            metodo = "FOPAG"
            var pago_por = "BOLETO"
          } else if (metodo == "EVOPASS RECORRENTE") {
            metodo = "DIRETO"
            var pago_por = "CRÉDITO"
          } else if (true) {
            metodo = "Error"
          }

        } catch {
          console.log('Erro ao acessar o metodo de pagamento - ' + id_member)
        }

        // if (metodo == "EVOPASS ") {
        //   metodo = "Boleto"
        // } else if (metodo == "") {
        //   Metodo
        // }

        
        var inicio_vigencia = "01/10/2023"
        var contratos = tempi[j].memberships
        console.log(contratos)

        var member_status_defined = ""

        const member_status = contratos.map(contrato => {
          return (contrato.membershipStatus)
        })

        
 
        var isFound = member_status.indexOf("active") !== -1;
        if (isFound === true) {
          member_status_defined = "Ativo"
        } else if (true) {
          member_status_defined = "Inativo"
        }


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

        member.push(grupo, grupo, cnpj_empresa, responsavel, nome, tipo, cpf, telefone, metodo, pago_por, inicio_vigencia, member_status_defined)
        set_members_data(member)

      }

      
    }).catch(function (error) {
      console.error(error);
    });
    
    
    i = i + 50
    
  }

  members.sort(function(a, b) {
    return a[0].localeCompare(b[0], 'pt', { sensitivity: 'base' });
  });

  return (members)

}