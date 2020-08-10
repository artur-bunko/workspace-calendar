import { Fragment } from "@servicenow/ui-renderer-snabbdom";
import { DAYS, MAX_WEEKS } from "../constants";
import dayView from "./day.view";
import weekView from "./week.view";
import monthView from "./month.view";
import yearView from "./year.view";
import moment from "moment";

export default ({ properties, date, currentView }, { dispatch }) => {
    moment.locale(properties.locale);
    
	const currentDate = moment([date.year, date.month, date.day]);

	const defaultView = properties.defaultView;

	const calendarViews = {
		day: dayView,
		week: weekView,
		month: monthView,
		year: yearView,
	};

	let calendar = [];
    let week = [];
    let days = [];

	const startDay = currentDate
		.clone()
		.startOf("month")
		.startOf("week")

	const endDay = currentDate
		.clone()
		.endOf("month")
		.endOf("week")

	let prevDate = startDay.clone().subtract(1, "day");

	while (prevDate.isBefore(endDay, "day")) {
		let nextDate = prevDate.add(1, "day").clone();
		calendar.push({
			month: nextDate.get("month"),
			day: nextDate.get("date"),
			week: nextDate.isoWeek(),
			current: currentDate.isSame(nextDate),
			inThisMonth: nextDate.isSame(currentDate, "month"),
		});

        if (!week.includes(nextDate.isoWeek())) week.push(nextDate.isoWeek());
        
        days.push({ full: nextDate.format("dddd"), short: nextDate.format("ddd")})
    }
    
    days.length = 7;

	if (week.length > MAX_WEEKS) {
		week.splice(0, week.length - MAX_WEEKS);
	}

	return (
		<Fragment>
			<now-tabs
				items={[
					{ id: "day", label: "Day" },
					{ id: "week", label: "Week" },
					{ id: "month", label: "Month" },
					{ id: "year", label: "Year" },
				]}
				selectedItem={currentView || defaultView}
			></now-tabs>

			{calendarViews[currentView || defaultView]({
				week,
				calendar,
				currentDate,
				properties,
				days,
				week,
			})}
		</Fragment>
	);
};
