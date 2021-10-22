import { Container } from "./style";

import inComeImg from '../../assets/Entradas.svg';
import outComeImg from '../../assets/Saídas.svg';
import totalComeImg from '../../assets/Total.svg';

export function Summary(){
    return (
       <Container>
           <div>
               <header>
                    <p>Entradas</p>
                    <img src={inComeImg} alt="Entradas"  />
               </header>
               <strong>R$1000,00</strong>
           </div>
           <div>
               <header>
                    <p>Saídas</p>
                    <img src={outComeImg} alt="Entradas"  />
               </header>
               <strong>-R$600,00</strong>
           </div>
           <div className="highlight-background">
               <header>
                    <p>Total</p>
                    <img src={totalComeImg} alt="Total"  />
               </header>
               <strong>R$400,00</strong>
           </div>
       </Container>
    )
}