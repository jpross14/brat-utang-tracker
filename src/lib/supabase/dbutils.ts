import { Database } from "./db";

export type DBType<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Row"];

export interface TransactionWithCreditor
  extends Omit<DBType<"Transactions">, "creditor"> {
  creditor: Pick<DBType<"Users">, "id" | "username" | "display_name">;
}
