import FormTopupGame from '../../components/organisms/FormTopupGame';
import ItemTopupGame from '../../components/organisms/ItemTopupGame';
import Navbar from '../../components/organisms/Navbar';
import Footer from '../../components/organisms/Footer';
import { getDetailVoucher, getFeaturedGame } from '../../serviceAPI/player';
import { GameItemTypes, NominalsTypes, PaymentTypes } from '../../serviceAPI/data-type';
import { useEffect } from 'react';
interface DetailProps {
  dataItem: GameItemTypes;
  nominals: NominalsTypes;
  payments: PaymentTypes;
}
export default function Detail({ dataItem, nominals, payments }: DetailProps) {
  useEffect(() => {
    localStorage.setItem('data-item', JSON.stringify(dataItem));
  }, []);
  return (
    <>
      <Navbar />
      <section className="detail pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
          <div className="detail-header pb-50">
            <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">Top Up</h2>
            <p className="text-lg color-palette-1 mb-0">Perkuat akun dan jadilah pemenang</p>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
              <ItemTopupGame data={dataItem} device="mobile" />
            </div>
            <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
              <ItemTopupGame data={dataItem} device="desktop" />
              <hr />
              <FormTopupGame nominals={nominals} payments={payments} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export async function getStaticPaths() {
  const data = await getFeaturedGame();
  const paths = data.map((item: GameItemTypes) => ({
    params: {
      id: item._id,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

interface GetStaticProps {
  params: {
    id: string;
  };
}

export async function getStaticProps({ params }: GetStaticProps) {
  const { id } = params;
  const data = await getDetailVoucher(id);
  return {
    props: {
      dataItem: data.detail,
      nominals: data.detail.nominals,
      payments: data.payments,
    },
  };
}
