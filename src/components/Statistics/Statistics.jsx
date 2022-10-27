import SatisticsItem from './SatisticsItem'
import s from './Statistics.module.css'

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

export default Statistics;