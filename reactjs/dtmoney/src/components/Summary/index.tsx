import { Container } from "./styles";
import inComeImg from '../../assets/Entradas.svg';
import outComeImg from '../../assets/Saídas.svg';
import totalComeImg from '../../assets/Total.svg';
import { useTransitions } from "../../hook/useTransactionsContext";

export function Summary(){
    const { transactions } = useTransitions();
    console.log(transactions);

    // calculando os resumos
    const summary = transactions.reduce((acc, transaction) =>{
        if(transaction.type === 'deposit' ){
            acc.deposit += transaction.amount;
            acc.total += transaction.amount
        }else{
            acc.withdraw += transaction.amount;
            acc.total -= transaction.amount
        }

        return acc;
    },{
        deposit: 0,
        withdraw: 0,
        total: 0
    })
    
    return (
       <Container>
           <div>
               <header>
                    <p>Entradas</p>
                    <img src={inComeImg} alt="Entradas"  />
               </header>
               <strong>
               { new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(summary.deposit)}
                </strong>
           </div>
           <div>
               <header>
                    <p>Saídas</p>
                    <img src={outComeImg} alt="Saídas"  />
               </header>
               <strong>
               { new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(summary.withdraw)}
                </strong>
           </div>
           <div className="highlight-background">
               <header>
                    <p>Total</p>
                    <img src={totalComeImg} alt="Total"  />
               </header>
               <strong>  
               { new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(summary.total)}
               </strong>
           </div>
       </Container>
    )
}