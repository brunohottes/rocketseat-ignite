import { Container } from "./style";

export function TransactionsTable(){
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