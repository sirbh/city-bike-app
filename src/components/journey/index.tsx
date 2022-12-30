import Table from './table';
import useJourneyDetails from '../../hooks/useJourneyDetails';
import Tabs from './tabs';
import useSortingTabsManager from '../../hooks/utility/useSortingTabsManager';
import AutocompleteInput from '../autocompleteInput';

function Journey() {
  const { journeyDetails, setOrder, setSortBy, setPage, page, count } =
    useJourneyDetails();
  const { seletedTab, setSelectedTab, setTabsState, tabsState } =
    useSortingTabsManager(setOrder, setSortBy, setPage);

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

  return (
    <>
      <AutocompleteInput />
      <Tabs
        tabsDetails={tabsState}
        onTabClick={tabClickHandler}
        seletedTab={seletedTab}
      />
      <Table
        tableData={journeyDetails}
        count={count}
        page={page}
        pageChangeHandler={(n: number) => {
          setPage(n + 1);
        }}
      />
    </>
  );
}

export default Journey;
