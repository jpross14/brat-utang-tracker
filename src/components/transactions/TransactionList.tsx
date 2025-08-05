import { TransactionWithCreditor } from "@/lib/supabase/dbutils";
import React from "react";
import TransactionItem from "./TransactionItem";

interface TransactionListProps {
  type: "credit" | "debt";
  transactions: TransactionWithCreditor[];
}

const TransactionList = ({ type, transactions }: TransactionListProps) => {
  return (
    <table className="w-full table-auto border-separate border-spacing-y-4">
      <thead className="sticky top-0 z-10 w-full">
        <tr>
          <th></th>
          <th>Name of {type === "credit" ? "Debtor" : "Creditor"}</th>
          <th>Amount</th>
          <th>Date of Transaction</th>
          <th>Transaction Due</th>
        </tr>
      </thead>
      <tbody className={""}>
        {transactions.length === 0 && (
          <tr>
            <td colSpan={5} className="text-center">
              No transactions found.
              {type === "credit"
                ? "You have no credits."
                : "You have no debts."}
            </td>
          </tr>
        )}
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionList;
