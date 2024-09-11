export interface IFieldsMagazinesState {
  date: string;
  statuses: string[];
  query: string;
}

export type FieldsMagazinesAction =
  | { type: "SET_YEAR"; payload: string }
  | { type: "SET_STATUSES"; payload: string[] }
  | { type: "SET_QUERY"; payload: string };

export const fieldsMagazinesReducer = (
  state: IFieldsMagazinesState,
  action: FieldsMagazinesAction
): IFieldsMagazinesState => {
  switch (action.type) {
    case "SET_YEAR":
      return {
        ...state,
        date: action.payload,
      };

    case "SET_STATUSES":
      return {
        ...state,
        statuses: action.payload,
      };

    case "SET_QUERY":
      return {
        ...state,
        query: action.payload,
      };

    default:
      return state;
  }
};
