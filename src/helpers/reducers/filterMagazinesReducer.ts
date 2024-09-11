import {
  DatePickerAction,
  datePickerReducer,
  IDatePickerState,
} from "./dateReducer";
import {
  FieldsMagazinesAction,
  fieldsMagazinesReducer,
  IFieldsMagazinesState,
} from "./fieldsMagazinesReducer";

export interface IFilterMagazines {
  fields: IFieldsMagazinesState;
  datePicker: IDatePickerState;
}

export type FilterMagazinesAction =
  | FieldsMagazinesAction
  | DatePickerAction
  | { type: "RESET_FILTERS"; payload: IFilterMagazines };

export const filterMagazinesReducer = (
  state: IFilterMagazines,
  action: FilterMagazinesAction
): IFilterMagazines => {
  switch (action.type) {
    case "RESET_FILTERS":
      return action.payload;

    default:
      return {
        fields: fieldsMagazinesReducer(
          state.fields,
          action as FieldsMagazinesAction
        ),
        datePicker: datePickerReducer(
          state.datePicker,
          action as DatePickerAction
        ),
      };
  }
};
