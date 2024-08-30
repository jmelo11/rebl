import React, { createContext, useState, useContext, ReactNode } from 'react';

export interface LoanData {
    product_family: string;
    rate: number;
    notional: number;
    structure: string;
    currency: string;
    payment_frequency: string;
    payment_amount: number;
    start_date: string; // You can use Date type if needed
    end_date: string; // You can use Date type if needed
    tenor: number;
}

interface LoanDataContextType {
    loanData: Partial<LoanData>;
    updateLoanData: (data: Partial<LoanData>) => void;
}

const LoanDataContext = createContext<LoanDataContextType | undefined>(undefined);

export const useLoanData = (): LoanDataContextType => {
    const context = useContext(LoanDataContext);
    if (!context) {
        throw new Error('useLoanData must be used within a LoanDataProvider');
    }
    return context;
};

interface LoanDataProviderProps {
    children: ReactNode;
}

export const LoanDataProvider: React.FC<LoanDataProviderProps> = ({ children }) => {
    const [loanData, setLoanData] = useState<Partial<LoanData>>({});

    const updateLoanData = (data: Partial<LoanData>) => {
        setLoanData((prev) => ({
            ...prev,
            ...data,
        }));
    };

    return (
        <LoanDataContext.Provider value={{ loanData, updateLoanData }}>
            {children}
        </LoanDataContext.Provider>
    );
};
