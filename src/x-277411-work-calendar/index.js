import { createCustomElement } from "@servicenow/ui-core";
import snabbdom from "@servicenow/ui-renderer-snabbdom";
import styles from "./styles.scss";
import "@servicenow/now-badge";
import "@servicenow/now-tabs";
import moment from "moment";
import view from "./view";
import actionsList from "./actions";

createCustomElement("x-277411-work-calendar", {
	renderer: { type: snabbdom },
	view,
	initialState: {
		date: {
			year: moment().year(),

			month: moment().month(),

			day: moment().get("date"),
		},

		currentView: null
		
	},
	properties: {
		defaultView: {
			default: "month"
		},
		firstDayOfWeek: {
			default: 1
		},
		locale: {
			default: "en"
		}
	},
	styles,
	...actionsList,
});
