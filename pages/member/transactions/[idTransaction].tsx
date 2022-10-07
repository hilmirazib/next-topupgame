import TransactionDetailContent from '../../../components/organisms/TransactionDetailContent';
import Sidebar from '../../../components/organisms/Sidebar';
import { HistoryTransactionTypes, JWTPayloadTypes, UserTypes } from '../../../serviceAPI/data-type';
import { getTransactionDetail } from '../../../serviceAPI/member';
import jwtDecode from 'jwt-decode';
interface TranscationsDetailProps {
  transactionDetail: HistoryTransactionTypes;
}
export default function TransactionsDetail(props: TranscationsDetailProps) {
  const { transactionDetail } = props;
  return (
    <section className="transactions-detail overflow-auto">
      <Sidebar active="transactions" />
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
    idTransaction: string;
  };
}

export async function getServerSideProps({ req, params }: GetServerSideProps) {
  const { idTransaction } = params;
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    };
  }
  const jwtToken = Buffer.from(token, 'base64').toString('ascii');
  const payload: JWTPayloadTypes = jwtDecode(jwtToken);
  const userFromPayload: UserTypes = payload.player;
  const IMG = process.env.NEXT_PUBLIC_IMG;
  userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`;
  const response = await getTransactionDetail(idTransaction, jwtToken);
  return {
    props: {
      transactionDetail: response.data,
    },
  };
}
