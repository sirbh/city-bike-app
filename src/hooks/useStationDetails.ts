import axios from 'axios';
import { useEffect, useState } from 'react';
import { StationOptions } from './useStationSearch';

interface IStationDetails {
  id: number;
  station_id: number;
  name: string;
  adress: string;
  x: number;
  y: number;
  total_depatures: number;
  total_return: number;
  avg_departure_distance: number;
  avg_return_distanc: number;
}

function useStationDetails() {
  const [selectedOpetion, setSelectedOption] = useState<StationOptions>();
  const [stationDetails, setStationDetails] = useState<IStationDetails>();

  useEffect(() => {
    if (selectedOpetion) {
      axios
        .get<IStationDetails>(
          `http://localhost:8080/station?id=${selectedOpetion.id}&station_id=${selectedOpetion.station_id}`
        )
        .then((data) => {
          setStationDetails(data.data);
        })
        .catch((e) => {
          setStationDetails(undefined);
        });
    }
  }, [selectedOpetion]);

  return { setSelectedOption, stationDetails };
}

export default useStationDetails;
