import { NOW_TABS_SELECTED_ITEM_SET } from "./constants"

export default {
    actionHandlers: {
        [NOW_TABS_SELECTED_ITEM_SET]: {
            effect: ({ state, updateState, action: { payload: { value } } }) => {
                updateState({
                    path: "currentView",
                    value,
                    operation: "set"
                })
            }
        }
    }
}