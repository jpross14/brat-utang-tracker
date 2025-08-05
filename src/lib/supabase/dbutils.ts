import { Database } from "./db";

export type DBType<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Row"];

export interface TransactionWithCreditorDetails
  extends Omit<DBType<"Transactions">, "creditor"> {
  creditor: Pick<DBType<"Users">, "id" | "username" | "display_name">;
}

export interface TransactionWithDebtorDetails
  extends Omit<DBType<"Transactions">, "debtor"> {
  debtor: Pick<DBType<"Users">, "id" | "username" | "display_name">;
}
