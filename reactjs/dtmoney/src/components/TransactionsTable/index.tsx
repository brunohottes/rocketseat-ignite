import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable(){
    useEffect( () => {
        api.get('/transactions')
            .then(response => console.log(response.data));
    })

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Salário</td>
                        <td className="deposit">R$1200,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/12/2020</td>
                    </tr>
                    <tr>
                        <td>Boleto Internet</td>
                        <td className="withdraw">- R$120,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/12/2020</td>
                    </tr>

                </tbody>
            </table>
        </Container>
    );

}