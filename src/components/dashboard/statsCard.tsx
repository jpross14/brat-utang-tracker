interface Debtors {
  name: string;
  amount: number;
}

interface Creditors {
  name: string;
  amount: number;
}

type StatsCard = "debt" | "credit";
type Page = "dashboard" | "quick";

interface Props {
  cardType: StatsCard;
  pageType: Page;
  data: {
    total_debt: number;
    debtors: Debtors[];
    total_credit: number;
    creditors: Creditors[];
  };
}

const StatsCardFactory = (
  cardType: StatsCard,
  pageType: Page,
  data: Props["data"],
) => {
  const config = {
    type: cardType === "debt" ? "debt" : "credit",

    title:
      pageType === "dashboard"
        ? cardType === "debt"
          ? "debt stats"
          : "credit stats"
        : "quick stats",

    total:
      cardType === "debt"
        ? `Php ${data.debtors.reduce((total, debtor) => total + debtor.amount, 0)}`
        : `Php ${data.creditors.reduce((total, creditor) => total + creditor.amount, 0)}`,

    transactors:
      cardType === "debt"
        ? `${data.debtors.length} people currently owe you money`
        : `${data.creditors.length} people you owe money to`,

    description:
      cardType === "debt" ? "pinaka may utang ka" : "pinaka may utang sa imo",

    top_list:
      cardType === "debt"
        ? data.debtors.slice(0, 4)
        : data.creditors.slice(0, 4),
  };

  return config;
};

export default function StatsCard({ cardType, pageType, data }: Props) {
  const config = StatsCardFactory(cardType, pageType, data);

  return (
    <div className="glass h-105 w-84 rounded-[36px] p-5 *:blur-[0.75px]">
      <span className="mt-2 mb-7 block text-[40px] font-bold">
        {config.title}
      </span>

      <span className="block text-2xl">
        <p className="mr-2 mb-2 inline-block text-2xl font-semibold">
          total {config.type}:
        </p>
        <p className="inline-block text-3xl font-normal">{config.total}</p>
      </span>

      <span className="block text-base font-light opacity-75">
        {config.transactors}
      </span>

      <section className="mt-6">
        <h5 className="h-5 text-2xl font-semibold">{config.description}</h5>
        {config.top_list.map(({ name, amount }, idx) => (
          <p key={idx} className="block h-9 pl-1 *:text-lg *:font-normal">
            <span className="inline-block w-[10%] opacity-50">{idx + 1}</span>
            <span className="inline-block w-[50%]">{name}</span>
            <span className="inline-block w-[20%] text-right">{amount}</span>
          </p>
        ))}
      </section>

      <span className="absolute bottom-5 block text-sm opacity-50">
        full details on {config.type} page
      </span>
    </div>
  );
}
