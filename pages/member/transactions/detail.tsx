import TransactionDetailContent from '../../../components/organisms/TransactionDetailContent';
import Sidebar from '../../../components/organisms/Sidebar';
export default function TransactionsDetail() {
  return (
    <section className="transactions-detail overflow-auto">
      <Sidebar active="transactions" />
      <TransactionDetailContent />
    </section>
  );
}
