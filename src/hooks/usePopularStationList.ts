import axios from 'axios';
import { useEffect, useState } from 'react';
import { StationOptions } from './useStationSearch';

function usePopularStationList() {
  const [popularStationList, setPopularStationList] = useState<
    StationOptions[]
  >([]);
  const [journeyType, setJourneyType] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    if (journeyType) {
      setLoading(true);
      axios
        .get<StationOptions[]>(`http://localhost:8080/popular-station-list`, {
          params: {
            journey_type: journeyType,
          },
        })
        .then((data) => {
          setPopularStationList(data.data);
          setLoading(false);
        })
        .catch((e) => {
          setPopularStationList([]);
          setLoading(false);
        });
    }
  }, [setLoading, journeyType, setPopularStationList]);

  return { popularStationList, setJourneyType, loading };
}

export default usePopularStationList;
