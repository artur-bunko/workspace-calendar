
export default ({ week, calendar, days}) => {
    

	return (
		<div className="calendar--month">
			<div className="calendar__header">
				<div className="header__item">Week</div>
				{days.map((day) => (
					<div className="header__item">{day.full}</div>
				))}
			</div>
			<div className="calendar__body">
				<div className="week-number">
					{week.map((number) => (
						<div className="number">{number}</div>
					))}
				</div>
				<div className="days">
					{calendar.map((date) => (
						<div className={date.inThisMonth ? "day" : "day wrong"}>
							{date.current ? (
								<now-badge
									size="md"
									status="positive"
									variant="secondary"
									value={date.day}
									description="current day"
									round={true}
								></now-badge>
							) : (
								<span>{date.day}</span>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
