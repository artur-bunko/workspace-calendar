import moment from "moment";

export default ({ currentDate, days }) => {
	const dates = Array(7)
		.fill(0)
		.map((_, index) => currentDate.clone().day(days[index].full).get("date"));

	const times = Array(23)
		.fill(0)
		.map((_, index) => (index < 10 ? `0${index + 1}:00` : `${index + 1}:00`));

	return (
		<div className="calendar--week">
			<div className="calendar__header">
				{dates.map((date, index) => (
					<div className="date-container">
						<div className="dates">
							<span className="day">{days[index].short}</span>
							<span className="date">{date}</span>
						</div>
					</div>
				))}
			</div>
			<div className="calendar__body">
				{times.map((time) => (
					<time className="time">{time}</time>
				))}
			</div>
		</div>
	);
};
