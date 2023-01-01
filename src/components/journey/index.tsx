import { Box, LinearProgress } from '@mui/material';
import Table from './table';
import useJourneyDetails from '../../hooks/useJourneyDetails';
import Tabs from './tabs';
import useSortingTabsManager from '../../hooks/utility/useSortingTabsManager';
import AutocompleteInput from '../autocompleteInput';
import SelectInput from '../select';

function Journey() {
  const {
    journeyDetails,
    setOrder,
    setSortBy,
    setPage,
    page,
    count,
    setSelectedOption,
    setJourneyType,
    journeyType,
    loading,
  } = useJourneyDetails();
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
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '2rem',
        }}
      >
        <AutocompleteInput setSelectedOption={setSelectedOption} />
        <SelectInput
          handleChange={(v: string) => {
            setJourneyType(v);
          }}
          selectedJourneyType={journeyType}
          options={[
            {
              name: 'Departure',
              value: 'dep',
            },
            {
              name: 'Return',
              value: 'ret',
            },
          ]}
        />
      </Box>

      <Tabs
        tabsDetails={tabsState}
        onTabClick={tabClickHandler}
        seletedTab={seletedTab}
      />
      {!loading ? (
        <Table
          tableData={journeyDetails}
          count={count}
          page={page}
          pageChangeHandler={(n: number) => {
            setPage(n + 1);
          }}
        />
      ) : (
        <LinearProgress />
      )}
    </>
  );
}

export default Journey;
