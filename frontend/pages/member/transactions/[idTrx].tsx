import TransactionDetailContent from "../../../components/organisms/TransactionDetailContent";

interface TranscationsDetailProps {
  transactionDetail: {};
}

export default function TransactionsDetail(props: TranscationsDetailProps) {
  const { transactionDetail } = props;
  return (
    <section className="transactions-detail overflow-auto">
      <TransactionDetailContent data={transactionDetail} />
    </section>
  );
}
interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  };
  params: {
    idTrx: string;
  };
}
