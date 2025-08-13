import TransactionList from "@/components/transactions/TransactionList";
import { createClient } from "@/lib/supabase/server";
import React from "react";

export default async function CreditPage() {
  const client = await createClient();
  const {
    data: { user },
  } = await client.auth.getUser();

  if (!user) {
    return <div>Please log in to view your credits.</div>;
  }

  const { data: transactions } = await client
    .from("Transactions")
    .select(
      `    
      id,
      created_at,
      amount,
      transaction_due,
      date_paid
      `,
    )
    .eq("creditor", user.id)
    .order("transaction_due", { ascending: true });

  if (!transactions || transactions.length === 0) {
    return <div>No transactions found.</div>;
  }

  return (
    <main
      className={`relative h-screen w-full items-center justify-center p-7`}
    >
      <div className="glass flex h-18 w-fit items-center rounded-[1.75rem] px-5 text-5xl font-medium blur-[1px]">
        <span className="text-center">Credits</span>
      </div>
      <div className="flex w-full gap-4">
        <div className="flex w-2/3 flex-col items-end">
          <div>{/* TODO: Implement search, sort, and filter */}</div>
          (search, sort, filter)
          <TransactionList type="credit" transactions={transactions} />
        </div>
        <div>
          {/* TODO: Area for credit stats */}
          credit stats area
        </div>
      </div>
    </main>
  );
}
