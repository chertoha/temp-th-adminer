import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { toast } from "react-toastify";

import { DEFAULT_ERROR_NOTIFICATION } from "@/components/Notification/Notification";
import { useLazyGetMagazinesQuery } from "@/redux/magazines/magazinesApi";
import { MagazineType } from "@/types/entities";

const useMagazineYears = () => {
  const [magazines, setMagazines] = useState<MagazineType[]>([]);
  const [getMagazines] = useLazyGetMagazinesQuery();

  useEffect(() => {
    const getAllMagazines = async () => {
      try {
        const { totalElements } = await getMagazines({}).unwrap();

        const { content: magazines } = await getMagazines({
          size: totalElements,
        }).unwrap();

        setMagazines(magazines);
      } catch (error) {
        console.log(error);
        toast.error(DEFAULT_ERROR_NOTIFICATION);
      }
    };

    getAllMagazines();
  }, [getMagazines]);

  const uniqueMagazineYears = magazines
    .filter(mag => mag.date !== null)
    .map(mag => dayjs(mag.date).format("YYYY"))
    .filter((year, index, arr) => {
      return year && arr.indexOf(year) === index;
    })
    .sort((a, b) => b.localeCompare(a)) as string[];

  return uniqueMagazineYears;
};

export default useMagazineYears;
