import { useEffect, useState } from 'react';
import axios from 'axios';
import { StationOptions } from './useStationSearch';

// export interface IStationList {
//   station_id: number;
//   name: string;
// }

interface StationListAPIResponse {
  totalRecords: number;
  stations: StationOptions[];
}

function useStationList() {
  const [stationList, setStationList] = useState<StationOptions[]>([]);
  const [count, setCount] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [totalRecords, setTotalRecords] = useState<number>(10);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get<StationListAPIResponse>(
        `http://localhost:8080/station-list?page=${page}&totalRecords=${totalRecords}`
      )
      .then((data) => {
        setStationList(data.data.stations);
        setCount(data.data.totalRecords);
        setLoading(false);
      })
      .catch((e) => {
        setStationList([]);
        setCount(0);
        setLoading(false);
      });
  }, [page, totalRecords, setStationList, setCount]);

  return { stationList, count, page, totalRecords, setPage, loading };
}

export default useStationList;
