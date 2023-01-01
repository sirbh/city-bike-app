import axios from 'axios';
import { useEffect, useState } from 'react';
import { StationOptions } from './useStationSearch';

export interface IStationDetails {
  id: number;
  station_id: number;
  name: string;
  adress: string;
  x: number;
  y: number;
  total_departures: number;
  total_return: number;
  avg_departure_distance: number;
  avg_return_distance: number;
}

function useStationDetails() {
  const [selectedOpetion, setSelectedOption] = useState<StationOptions>();
  const [stationDetails, setStationDetails] = useState<IStationDetails>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (selectedOpetion) {
      axios
        .get<IStationDetails>(
          `http://localhost:8080/station?id=${selectedOpetion.id}&station_id=${selectedOpetion.station_id}`
        )
        .then((data) => {
          setStationDetails(data.data);
          setLoading(false);
        })
        .catch((e) => {
          setLoading(false);
        });
    }
  }, [selectedOpetion, setLoading]);

  return { setSelectedOption, stationDetails, loading, setLoading };
}

export default useStationDetails;
