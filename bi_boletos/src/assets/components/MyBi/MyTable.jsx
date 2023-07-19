import style from  '../../css/table/style_table.css'

import get_members from "../../api/member_api.js"
var data_members = await get_members()

export default props => {


    const my_tr = data_members.map(aluno => {
        return (
            <tr>
                {/* <td>{aluno[0]}</td> */}
                <td>{aluno[1]}</td>
                <td>{aluno[2]}</td>
                <td>{aluno[3]}</td>
                <td>{aluno[4]}</td>
                <td>{aluno[5]}</td>
                <td>{aluno[6]}</td>
                {/* <td>{aluno[7]}</td> */}
                <td>{aluno[8]}</td>
                <td>{aluno[9]}</td>
                <td>{aluno[10]}</td>
                <td>{aluno[11]}</td>
            </tr>
        )
    })

    return (

        <table className="table-boletos">
            <thead>
                {/* Campo destinado ao grupo economico */}
                <th>Empresa</th>
                <th>CNPJ</th>
                <th>Responsável</th>
                <th>Nome</th>
                <th>Tipo</th>
                <th>CPF</th>
                {/* Campo destinado ao número de telefone */}
                <th>Método</th>
                <th>Pago por</th>
                <th>Vigência</th>
                <th>Status</th>
            </thead>
            <tbody>
                {my_tr}
            </tbody>
        </table>

    )
}