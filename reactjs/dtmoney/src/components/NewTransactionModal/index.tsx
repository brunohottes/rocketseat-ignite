import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import closeImg from '../../assets/Vector.svg';
import incomeImg from '../../assets/Entradas.svg';
import outComeImg from '../../assets/Saídas.svg';
import { useState } from 'react';

interface NewTransactionModalPropos{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }:NewTransactionModalPropos ) {
   const [type, setType] = useState('deposit');

    return (
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
         >  

         <button type="button" onClick={onRequestClose} className="react-modal-close">
             <img src={closeImg} alt="Fechar modal" />
         </button>
        
        <Container>
        <h2>Cadastrar transação</h2>

        <input type="text" placeholder="Título" />

        <input type="number" placeholder="Valor" />

        <TransactionTypeContainer>
            <RadioBox
                type="button"
                onClick={() => setType('deposit')}
                isActive={type === 'deposit'}
                activeColor="green"
            >
                <img src={incomeImg} alt="Entrada" />
                <span>Entrada</span>
            </RadioBox>

            <RadioBox
                type="button"
                onClick={() => setType('withdraw')}
                isActive={type === 'withdraw'}
                activeColor="red"
            >
                <img src={outComeImg} alt="Saida" />
                <span>Saída</span>
            </RadioBox>
        </TransactionTypeContainer>

        <input type="text" placeholder="Categoria" />

        <button type="submit">Cadastrar</button>

        </Container>
        </Modal>
    )
}