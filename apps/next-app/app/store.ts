import { create } from 'zustand';

interface Transaction {
  id: string;
  merchant: string;
  category: string;
  amount: number;
  date: Date;
  positive: boolean;
}

interface FinanceStore {
  transactions: Transaction[];
  addTransaction: (tx: Transaction) => void;
  deleteTransaction: (id: string) => void;
  filterByCategory: (category: string) => Transaction[];
}

export const useFinanceStore = create<FinanceStore>((set, get) => ({
  transactions: [
    { id: '1', merchant: 'Whole Foods', category: 'Groceries', amount: -84.20, date: new Date(), positive: false },
    { id: '2', merchant: 'Stripe payout', category: 'Income', amount: 1240.00, date: new Date(Date.now() - 3600000), positive: true },
    { id: '3', merchant: 'Uber', category: 'Travel', amount: -18.80, date: new Date(Date.now() - 86400000), positive: false },
    { id: '4', merchant: 'PayPal', category: 'Freelance', amount: 420.00, date: new Date(Date.now() - 86400000), positive: true },
  ],
  addTransaction: (tx) => set((state) => ({ transactions: [tx, ...state.transactions] })),
  deleteTransaction: (id) => set((state) => ({ transactions: state.transactions.filter((t) => t.id !== id) })),
  filterByCategory: (category) => get().transactions.filter((t) => t.category === category),
}));
