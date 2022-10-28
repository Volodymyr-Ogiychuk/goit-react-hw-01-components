import s from './TransactionHistory.module.css'
import TransactionHistoryItem from './TransactionHistoryItem'
import PropTypes from 'prop-types'

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.transactionHistory}>
      <thead className={s.head}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
        <TransactionHistoryItem key={id} type={type} amount={amount} currency={currency} />
        ))}  
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;