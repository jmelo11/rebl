import React, { createContext, useState, useContext, ReactNode } from 'react';

interface FormDataContextType {
    formData: Record<number, string>;
    updateFormData: (step: number, data: string) => void;
}

const FormDataContext = createContext<FormDataContextType | undefined>(undefined);

export const useFormData = (): FormDataContextType => {
    const context = useContext(FormDataContext);
    if (!context) {
        throw new Error('useFormData must be used within a FormDataProvider');
    }
    return context;
};

interface FormDataProviderProps {
    children: ReactNode;
}

export const FormDataProvider: React.FC<FormDataProviderProps> = ({ children }) => {
    const [formData, setFormData] = useState<Record<number, string>>({});

    const updateFormData = (step: number, data: string) => {
        setFormData((prev) => ({
            ...prev,
            [step]: data,
        }));
    };

    return (
        <FormDataContext.Provider value={{ formData, updateFormData }}>
            {children}
        </FormDataContext.Provider>
    );
};
