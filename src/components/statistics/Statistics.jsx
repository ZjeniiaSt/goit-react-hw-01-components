import PropTypes from 'prop-types';

function Statistic(props) {
  const { title, stats } = props;
  return (
    <section class="statistics">
      {title && <h2 class="title">{title}</h2>}
      <ul class="stat-list">
        {stats.map(item => (
          <li class="item" key={item.id}>
            <span class="">{item.label}</span>
            <span class="">{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistic.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
export default Statistic;
