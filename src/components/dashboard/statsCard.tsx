export default function StatsCard() {
   return (
      <div>
         <h1>debt stats</h1>
         <h3>total debt: {total_debt}</h3>
         <span>{debtors} people currently owe you money </span>
      </div>
   );
}