import { useEffect, useState } from 'react';
import axios from 'axios';

export interface IStationList {
  station_id: number;
  name: string;
}

interface StationListAPIResponse {
  totalRecords: number;
  stations: IStationList[];
}

function useStationList() {
  const [stationList, setStationList] = useState<IStationList[]>([]);
  const [count, setCount] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [totalRecords, setTotalRecords] = useState<number>(10);

  useEffect(() => {
    axios
      .get<StationListAPIResponse>(
        `http://localhost:8080/station-list?page=${page}&totalRecords=${totalRecords}$`
      )
      .then((data) => {
        setStationList(data.data.stations);
        setCount(data.data.totalRecords);
      })
      .catch((e) => {
        setStationList([]);
        setCount(0);
      });
  }, [page, totalRecords, setStationList, setCount]);

  return { stationList, count, page, totalRecords, setPage };
}

export default useStationList;
