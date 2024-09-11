import {
  DatePickerAction,
  datePickerReducer,
  IDatePickerState,
} from "./dateReducer";
import {
  FieldsPublicationsAction,
  fieldsPublicationsReducer,
  IFieldsPublicationsState,
} from "./fieldsPublicationsReducer";

export interface IFilterPublications {
  fields: IFieldsPublicationsState;
  datePicker: IDatePickerState;
}

export type FilterPublicationsAction =
  | FieldsPublicationsAction
  | DatePickerAction
  | { type: "RESET_FILTERS"; payload: IFilterPublications };

export const filterPublicationsReducer = (
  state: IFilterPublications,
  action: FilterPublicationsAction
): IFilterPublications => {
  switch (action.type) {
    case "RESET_FILTERS":
      return action.payload;

    default:
      return {
        fields: fieldsPublicationsReducer(
          state.fields,
          action as FieldsPublicationsAction
        ),
        datePicker: datePickerReducer(
          state.datePicker,
          action as DatePickerAction
        ),
      };
  }
};
