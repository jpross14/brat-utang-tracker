import { Database } from "./db";

export type DBType<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Row"];

export interface TransactionWithCreditorDetails
  extends Omit<DBType<"Transactions">, "transactor"> {
  transactor: Pick<DBType<"People">, "name">;
}

export interface TransactionWithDebtorDetails
  extends Omit<DBType<"Transactions">, "transactor"> {
  transactor: Pick<DBType<"People">, "name">;
}

export type EnumType<T extends keyof Database["public"]["Enums"]> =
  Database["public"]["Enums"][T];
