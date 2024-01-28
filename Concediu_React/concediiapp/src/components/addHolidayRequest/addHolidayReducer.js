import { differenceInBusinessDays } from 'date-fns'
export const initialState = {
    startDate: new Date(),
    endDate: new Date(),
    totalZileDisponibile: 21,
    totalZileSolicitate: 0,
    holidayTypeId: 0,
    replacementId: 0,
    comments: ''
  }

  export function addHolidayReducer(state, action) {
    var dayOfWeek = state.endDate.getDay()
    switch (action.type) {
        case 'OnPropertyChange':
            state[action.propertyName] = action.value
            if (action.propertyName === 'startDate' || action.propertyName === 'endDate')
              state.totalZileSolicitate = differenceInBusinessDays(state.endDate, state.startDate)
            if (dayOfWeek !==6  && dayOfWeek !== 0 && (action.propertyName === 'startDate' || action.propertyName === 'endDate'))
              state.totalZileSolicitate = state.totalZileSolicitate + 1
            return { ...state }
            default: return state

    }
  }