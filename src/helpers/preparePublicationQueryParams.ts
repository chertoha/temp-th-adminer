import dayjs from "dayjs";

import { IFieldsPublicationsState } from "@/helpers/reducers/fieldsPublicationsReducer";
import { IDatePickerState } from "@/helpers/reducers/dateReducer";
import { PublicationsSearchType } from "@/types/entities";

const preparePublicationQueryParams = (
  { authors, query, sections, statuses }: IFieldsPublicationsState,
  { dateField, endDate, isNewerOrder, startDate }: IDatePickerState,
  page: number,
  size: number
): PublicationsSearchType => {
  const sortBy = isNewerOrder ? "asc" : "desc";

  return {
    sections: sections.length > 0 ? sections.join(",") : null,

    authors: authors.length > 0 ? authors.join(",") : null,

    statuses: statuses.length > 0 ? statuses.join(",") : null,

    query: query.length > 0 ? query.trim() : null,

    dateField: dateField.toUpperCase(),

    from: startDate && dayjs(startDate).format("YYYY-MM-DD"),

    to: endDate && dayjs(endDate).format("YYYY-MM-DD"),

    sort: dateField ? `${dateField},${sortBy}` : `created,${sortBy}`,

    page,

    size,
  };
};

export default preparePublicationQueryParams;
