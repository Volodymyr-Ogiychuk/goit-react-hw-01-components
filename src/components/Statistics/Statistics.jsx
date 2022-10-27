import s from './Statistics.module.css'
import SatisticsItem from './SatisticsItem'
import stats from '../../data/data.json'

const Statistics = () => {
  return (
      <>
      <p>Task Statistic</p>
      <section className={s.statistics}>
        <h2 className={s.title}>Upload stats</h2>
        <ul className={s.statList}>
          {stats.map(({ id, ...rest }) => (
            <SatisticsItem key={id} {...rest} />
          ))}
          
        </ul>
      </section>
      </>
    );
};

export default Statistics;