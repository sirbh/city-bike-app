import { useEffect, useState } from 'react';
import Table from './table';
import useJourneyDetails from '../../hooks/useJourneyDetails';
import Tabs from './tabs';

function Journey() {
  const { journeyDetails, setOrder, setSortBy, setPage, page } =
    useJourneyDetails();
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

  const [seletedTab, setSelectedTab] = useState(1);
  const tabClickHandler = (newValue: number) => {
    setSelectedTab(newValue);
    setTabsState((prev) => {
      if (newValue === seletedTab) {
        if (prev[newValue].order === 'asc') {
          const updatedState = [...prev];
          updatedState[newValue].order = 'desc';
          return updatedState;
        }
        const updatedState = [...prev];
        updatedState[newValue].order = 'asc';
        return updatedState;
      }
      return prev;
    });
  };

  useEffect(() => {
    setOrder(tabsState[seletedTab].order);
    setSortBy(tabsState[seletedTab].value);
  }, [tabsState, seletedTab, setOrder, setSortBy]);

  return (
    <>
      <Tabs
        tabsDetails={tabsState}
        onTabClick={tabClickHandler}
        seletedTab={seletedTab}
      />
      <Table
        tableData={journeyDetails}
        page={page}
        pageChangeHandler={(n: number) => {
          setPage(n + 1);
        }}
      />
    </>
  );
}

export default Journey;
