import { useEffect, useState } from 'react';

function useSortingTabsManager(
  setOrder: (v: string) => void,
  setSortBy: (v: string) => void,
  setPage: (n: number) => void
) {
  const [seletedTab, setSelectedTab] = useState(1);
  const [tabsState, setTabsState] = useState([
    {
      name: 'Departure Station',
      value: 'departure_station_name',
      order: 'asc',
    },
    {
      name: 'Return Station',
      value: 'return_station_name',
      order: 'asc',
    },
    {
      name: 'Covered Distance',
      value: 'covered_distance',
      order: 'asc',
    },
    {
      name: 'Duration',
      value: 'duration',
      order: 'asc',
    },
  ]);

  useEffect(() => {
    setOrder(tabsState[seletedTab].order);
    setSortBy(tabsState[seletedTab].value);
    setPage(1);
  }, [tabsState, seletedTab, setOrder, setSortBy, setPage]);

  return { seletedTab, setSelectedTab, tabsState, setTabsState };
}

export default useSortingTabsManager;
