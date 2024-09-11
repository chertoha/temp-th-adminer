import { Dayjs } from "dayjs";

export interface IDatePickerState {
  dateField: string;
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  isNewerOrder: boolean;
}

export type DatePickerAction =
  | { type: "SET_DATE_FILED"; payload: string }
  | { type: "SET_START_DATE"; payload: Dayjs | null }
  | { type: "SET_END_DATE"; payload: Dayjs | null }
  | { type: "SET_SORT_BY_NEW"; payload: boolean };

export const datePickerReducer = (
  state: IDatePickerState,
  action: DatePickerAction
): IDatePickerState => {
  switch (action.type) {
    case "SET_DATE_FILED":
      return {
        ...state,
        dateField: action.payload,
      };

    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.payload,
      };

    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.payload,
      };

    case "SET_SORT_BY_NEW":
      return {
        ...state,
        isNewerOrder: action.payload,
      };

    default:
      return state;
  }
};
