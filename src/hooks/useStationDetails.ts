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
  popular_departure_station: StationOptions[];
  popular_return_station: StationOptions[];
}

function useStationDetails() {
  const [selectedOption, setSelectedOption] = useState<
    StationOptions | undefined
  >(undefined);
  const [stationDetails, setStationDetails] = useState<IStationDetails>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    if (selectedOption) {
      axios
        .get<IStationDetails>(
          `http://localhost:8080/station?station_id=${selectedOption.station_id}`
        )
        .then((data) => {
          setStationDetails(data.data);
          setLoading(false);
        })
        .catch((e) => {
          setLoading(false);
          setStationDetails(undefined);
        });
    }
  }, [selectedOption, setLoading]);

  return { setSelectedOption, stationDetails, loading, setLoading };
}

export default useStationDetails;
