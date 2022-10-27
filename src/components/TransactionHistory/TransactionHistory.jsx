import s from './TransactionHistory.module.css'
import items from '../../data/transactions.json'
import TransactionHistoryItem from './TransactionHistoryItem'

const TransactionHistory = ( ) => {

  return (
    <>
      <p>Task Transaction History</p>
      <table className={s.transactionHistory}>
  <thead className={s.head}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    
      {items.map(({ id, ...rest }) => (
        <TransactionHistoryItem key={id} {...rest} />
    ))}
    
    
  </tbody>
      </table>
      </>
    );
};

export default TransactionHistory;