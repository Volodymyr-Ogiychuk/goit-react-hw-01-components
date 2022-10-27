import PropTypes from 'prop-types'
import s from './Statistics.module.css'

const StatisticsItem = (props) => {
    const { id, label, percentage } = props

    return (
        <li key={id} className={s.item}>
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}</span>
        </li>
        
    )
}

StatisticsItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
}

export default StatisticsItem;