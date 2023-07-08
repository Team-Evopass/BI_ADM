import style from '../css/table/style_table.css'

import get_members from "../api/member_api.js"

var data_members = await get_members()

export default props => {


    const my_tr = data_members.map(aluno => {
        return (
            <tr>
                <td>{aluno[0]}</td>
                <td>{aluno[1]}</td>
                <td>{aluno[3]}</td>
                <td>{aluno[4]}</td>
                <td>{aluno[5]}</td>
                <td>{aluno[6]}</td>
                <td>{aluno[7]}</td>
                <td>{aluno[8]}</td>
                <td>{aluno[9]}</td>
                <td>{aluno[10]}</td>
                <td>{aluno[11]}</td>
                <td>{aluno[12]}</td>

            </tr>
        )
    })


    return (

        <table className="table-boletos">
            <thead>
                <th>Grupo</th>
                <th>Empresa</th>
                <th>CNPJ</th>
                <th>Responsável</th>
                <th>Nome</th>
                <th>Tipo</th>
                <th>CPF</th>
                <th>Telefone</th>
                <th>Método</th>
                <th>Pago por</th>
                <th>Vigência</th>
                <th>Status</th>
            </thead>
            <tbody>
                <tr>
                    <td>AGILIZA</td>
                    <td>AGILIZA</td>
                    <td>13.914.707/0001-55</td>
                    <td>Felipe Junio Soares de Melo</td>
                    <td>Felipe Junio Soares de Melo</td>
                    <td>Titular</td>
                    <td>488.663.098-77</td>
                    <td>(11) 950682840</td>
                    <td>DESCONTO EM FOLHA</td>
                    <td>BOLETO</td>
                    <td>01/07/2023</td>
                    <td>ATIVO</td>
                </tr>
                {my_tr}
            </tbody>
        </table>

    )
}