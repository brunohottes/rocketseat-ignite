import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface Transaction{
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}
// rescrevento a interface Transaction removendo dois parametros
type TransactionInput = Omit<Transaction, 'id' | 'createdAt' >

// rescrevento a interface Transaction adicionando os parametros desejados
// type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category' >

interface TransactionContextData{
    transactions: Transaction[];
    createTransaction: (transaction : TransactionInput) => Promise<void>;
}

interface TransactionProviderProps{
    children: ReactNode;
}

const TransactionsContext = createContext<TransactionContextData>({} as TransactionContextData);

export function TransactionProvider({children}: TransactionProviderProps){
    const [transactions , setTransactions] = useState<Transaction[]>([]);  
    
    useEffect( () => {
        api.get('/transactions')
           .then((response: any) => setTransactions(response.data.transactions) );
    }, []);

    async function createTransaction(transactionInput: TransactionInput){
     const response: any = await api.post('/transactions',{...transactionInput, createdAt: new Date()});
     const { transaction } = response.data;
    
     // adicionando nova transaction na lista
     setTransactions([...transactions, transaction]);
    }

    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    )
}
export function useTransitions(){
    const context = useContext(TransactionsContext);
    return context;
}