import dayjs from "dayjs";

import { IFieldsMagazinesState } from "@/helpers/reducers/fieldsMagazinesReducer";
import { IDatePickerState } from "@/helpers/reducers/dateReducer";
import { MagazinesSearchType } from "@/types/entities";

const prepareMagazineQueryParams = (
  { date, query, statuses }: IFieldsMagazinesState,
  { dateField, endDate, isNewerOrder, startDate }: IDatePickerState,
  page: number,
  size: number
): MagazinesSearchType => {
  const sortBy = isNewerOrder ? "asc" : "desc";

  return {
    date: date.length > 0 ? date : null,

    statuses: statuses.length > 0 ? statuses.join(",") : null,

    query: query.length > 0 ? query : null,

    dateField: dateField.toUpperCase(),

    from: startDate && dayjs(startDate).format("YYYY-MM-DD"),

    to: endDate && dayjs(endDate).format("YYYY-MM-DD"),

    sort: dateField ? `${dateField},${sortBy}` : `created,${sortBy}`,

    page,

    size,
  };
};

export default prepareMagazineQueryParams;
