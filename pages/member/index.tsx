import OverviewContent from '../../components/organisms/OverviewContent';
import Sidebar from '../../components/organisms/Sidebar';

function Member() {
  return (
    <section className="overview overflow-auto">
      <Sidebar active="overview" />
      <OverviewContent />
    </section>
  );
}

export default Member;
