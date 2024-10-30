export interface Transaction {
  id: string;
  date: string;
  amount: number;
  status: 'Pending' | 'Completed';
  repaymentDate?: string;
}
