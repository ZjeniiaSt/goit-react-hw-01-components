import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function Statistic(props) {
  const { title, stats } = props;
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>Upload stats</h2>}
      <ul className={styles.statList}>
        {stats.map(item => (
          <li className={styles.item} key={item.id}>
            <span className={styles.label}>{item.label}</span>
            <span className={styles.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
export default Statistic;
