import SatisticsItem from './SatisticsItem'
import s from './Statistics.module.css'
import PropTypes from 'prop-types'

const Statistics = ({ stats, title }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.statList}>
        {stats.map(({ id, label, percentage }) => (
          <SatisticsItem key={id} label={label} percentage={percentage} />
        ))}
        
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Statistics;