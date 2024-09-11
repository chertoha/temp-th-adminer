export interface IFieldsPublicationsState {
  sections: string[];
  authors: string[];
  statuses: string[];
  query: string;
}

export type FieldsPublicationsAction =
  | { type: "SET_SECTIONS"; payload: string[] }
  | { type: "SET_AUTHORS"; payload: string[] }
  | { type: "SET_STATUSES"; payload: string[] }
  | { type: "SET_QUERY"; payload: string };

export const fieldsPublicationsReducer = (
  state: IFieldsPublicationsState,
  action: FieldsPublicationsAction
): IFieldsPublicationsState => {
  switch (action.type) {
    case "SET_SECTIONS":
      return {
        ...state,
        sections: action.payload,
      };

    case "SET_AUTHORS":
      return {
        ...state,
        authors: action.payload,
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
