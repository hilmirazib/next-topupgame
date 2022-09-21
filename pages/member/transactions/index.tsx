import Sidebar from '../../../components/organisms/Sidebar';
import TransactionContent from '../../../components/organisms/TransactionContent';

export default function Transactions() {
  return (
    <section className="transactions overflow-auto">
      <Sidebar active="transactions" />
      <TransactionContent />
    </section>
  );
}
