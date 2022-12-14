import PropTypes from 'prop-types'
import s from './TransactionHistory.module.css'

const TransactionHistoryItem = (props) => {
    const { type, amount, currency } = props;

    return (
        <tr>
            <td className={s.item}>{type}</td>
            <td className={s.item}>{amount}</td>
            <td className={s.item}>{currency}</td>
        </tr>
    );
};

TransactionHistoryItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}

export default TransactionHistoryItem;