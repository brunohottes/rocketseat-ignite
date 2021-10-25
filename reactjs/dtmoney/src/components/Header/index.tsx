import logoImg from '../../assets/Logo.svg';
import { Container, Content } from './styles';

interface HeaderPropos {
    onOpenNewTransactionModal : () => void;
}

export function Header({onOpenNewTransactionModal} : HeaderPropos) {
    return (
        <Container> 
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}