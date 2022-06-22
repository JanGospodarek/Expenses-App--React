import "./ChartBar.css";
function ChartBar(props) {
  let bardFillHeight = "0%";
  if (props.maxValue > 0) {
    bardFillHeight = `${Math.round((props.value / props.maxValue) * 100)}%`;
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: bardFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}
export default ChartBar;
