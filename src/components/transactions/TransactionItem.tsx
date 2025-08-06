import {
  TransactionWithCreditorDetails,
  TransactionWithDebtorDetails,
} from "@/lib/supabase/dbutils";
import React from "react";
import { cn } from "@/lib/utils";
import ActionButton from "./ActionButton";

interface TransactionItemProps {
  type: "credit" | "debt";
  transaction: TransactionWithCreditorDetails | TransactionWithDebtorDetails;
}

const TransactionItem = ({ transaction, type }: TransactionItemProps) => {
  const formatDate = (date: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    };
    return new Date(date)
      .toLocaleDateString("en-US", options)
      .replace(/\//g, " - ");
  };

  const friend =
    type === "credit"
      ? (transaction as TransactionWithDebtorDetails).debtor
      : (transaction as TransactionWithCreditorDetails).creditor;

  return (
    <tr key={transaction.id}>
      <td className="glass h-full w-6 rounded-l-3xl px-2 pl-4">
        <div className="flex h-full w-full items-center justify-center">
          <div
            className={cn("h-4 w-4 rounded-full border-2 border-neutral-800")}
          />
        </div>
      </td>
      <td className="glass px-4">
        <div className="flex flex-col py-2 text-start">
          <h5>{friend.display_name}</h5>
          <span className="text-muted-foreground text-sm">
            {friend.username ? ` (@${friend.username})` : ""}
          </span>
        </div>
      </td>
      {[
        { data: "amount", value: transaction.amount },
        { data: "created_at", value: formatDate(transaction.created_at) },
        {
          data: "transaction_due",
          value: transaction.transaction_due
            ? formatDate(transaction.transaction_due)
            : "N/A",
        },
      ].map((item, index) => (
        <td
          key={index}
          className={cn(
            "glass px-3 py-3 text-center",
            item.data === "transaction_due" &&
              transaction.status === "Unpaid" &&
              transaction.transaction_due &&
              new Date(transaction.transaction_due) < new Date() &&
              "text-red-500",
          )}
        >
          {item.value}
        </td>
      ))}

      <td className="glass h-full w-6 rounded-r-3xl px-2 pr-4">
        <div className="flex h-full w-full items-center justify-center">
          <ActionButton transactionId={transaction.id} friendId={friend.id} />
        </div>
      </td>
    </tr>
  );
};

export default TransactionItem;
