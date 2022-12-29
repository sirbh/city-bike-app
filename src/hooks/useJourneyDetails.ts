import axios from 'axios';
import { useState, useEffect } from 'react';

export interface IJourney {
  id: number;
  departure: string;
  return: string;
  departure_station_id: number;
  departure_station_name: string;
  return_station_id: number;
  return_station_name: string;
  covered_distance: number;
  duration: number;
}

interface IJourneyAPIResponse {
  totalRecords: number;
  journey: IJourney[];
}

function useJourneyDetails() {
  const [journeyDetails, setJourneyDetails] = useState<IJourney[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalRecords, setTotalRecords] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>();
  const [order, setOrder] = useState<string>();
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    axios
      .get<IJourneyAPIResponse>(
        `http://localhost:8080/?page=${page}&totalRecords=${totalRecords}${
          sortBy ? `&sortBy=${sortBy}` : ''
        }${order ? `&order=${order}` : ''}`
      )
      .then((data) => {
        setJourneyDetails(data.data.journey);
        setCount(data.data.totalRecords);
      })
      .catch((e) => {
        setJourneyDetails([]);
        setCount(0);
      });
  }, [page, totalRecords, sortBy, order]);

  return {
    journeyDetails,
    setPage,
    setTotalRecords,
    setSortBy,
    setOrder,
    page,
    count,
  };
}

export default useJourneyDetails;
