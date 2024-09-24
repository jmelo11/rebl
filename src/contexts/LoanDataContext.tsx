import { createContext, useState, useContext, ReactNode } from 'react';

export interface LoanData {
    productFamily: string;
    rate: number;
    notional: number;
    structure: string;
    currency: string;
    paymentFrequency: string;
    paymentAmount: number;
    startDate: string; // You can use Date type if needed
    periodsInMonths: string,
    gracePeriods: string,
    pendingPayments: number,
    prepaymentPenalty: string,
    endDate: string; // You can use Date type if needed
    tenor: string;
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

export function fillLoanData(data: Partial<LoanData>): LoanData {
    return {
        productFamily: data.productFamily || '',
        rate: data.rate || 0,
        notional: data.notional || 0,
        structure: data.structure || 'EqualPayments',
        currency: data.currency || '',
        paymentFrequency: data.paymentFrequency || 'Monthly',
        paymentAmount: data.paymentAmount || 0,
        startDate: data.startDate || '',
        periodsInMonths: data.periodsInMonths || '0M',
        gracePeriods: data.gracePeriods + 'M',
        pendingPayments: data.pendingPayments || 0,
        prepaymentPenalty: data.prepaymentPenalty || '',
        endDate: data.endDate || '',
        tenor: data.tenor || data.periodsInMonths + 'M',
    };
}