import { useEffect, useState } from 'react';
import axios from 'axios';

export interface StationOptions {
  id: string;
  station_id: string;
  name: string;
}

function useStationSearch() {
  const [query, setQuery] = useState<string>('');
  const [options, setOptions] = useState<StationOptions[]>([]);
  const [selectedOption, setSelectedOption] = useState<StationOptions>();

  useEffect(() => {
    if (query === '') return undefined;
    const timer = setTimeout(() => {
      axios
        .get<StationOptions[]>('http://localhost:8080/search?searchQuery=a', {
          params: {
            q: query,
          },
        })
        .then((e) => {
          setOptions(e.data);
        })
        .catch((e) => {});
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [query]);

  return { query, setQuery, options, selectedOption, setSelectedOption };
}

export default useStationSearch;
