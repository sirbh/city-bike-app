import { Box, LinearProgress, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';
import useStationList from '../../hooks/useStationList';
import Table from './table';
import AutocompleteInput from '../autocompleteInput';
import ModalCard from '../modal-card';
import useStationDetails from '../../hooks/useStationDetails';
import usePopularStationList from '../../hooks/usePopularStationList';

function Stations() {
  const {
    count,
    page,
    stationList,
    setPage,
    loading: listLoading,
  } = useStationList();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { setSelectedOption, stationDetails, loading, setLoading } =
    useStationDetails();
  const {
    popularStationList,
    setJourneyType,
    loading: popularStationLoading,
  } = usePopularStationList();

  const [tab, setTab] = useState(0);
  return (
    <>
      {stationDetails && (
        <ModalCard
          handleClose={() => {
            setIsModalOpen(false);
          }}
          open={isModalOpen}
          stationDetails={stationDetails}
          loading={loading}
        />
      )}
      <Box sx={{ margin: '2rem' }}>
        <AutocompleteInput
          setSelectedOption={(option) => {
            setLoading(true);
            setSelectedOption(option);
            if (option) {
              setIsModalOpen(true);
            }
          }}
        />
      </Box>
      <Box
        sx={{ borderBottom: 1, borderColor: 'divider', marginBottom: '1rem' }}
      >
        <Tabs
          value={tab}
          onChange={(event: React.SyntheticEvent, newValue: number) => {
            setTab(newValue);
            if (newValue === 1) {
              setJourneyType('ret');
            } else if (newValue === 2) {
              setJourneyType('dep');
            } else {
              setJourneyType('');
            }
          }}
          aria-label="basic tabs example"
        >
          <Tab label="All Stations" />
          <Tab label="Top 5 Return Stations" />
          <Tab label="Top 5 Departure Stations" />
        </Tabs>
      </Box>
      {tab === 0 && (
        <Box>
          {listLoading ? (
            <LinearProgress />
          ) : (
            <Table
              count={count}
              page={page}
              pageChangeHandler={(n: number) => {
                setPage(n + 1);
              }}
              tableData={stationList}
              onRowClick={(option) => {
                setLoading(true);
                setSelectedOption(option);
                setIsModalOpen(true);
              }}
            />
          )}
        </Box>
      )}
      {tab === 1 && (
        <Box>
          {popularStationLoading ? (
            <LinearProgress />
          ) : (
            <Table
              count={5}
              page={1}
              pageChangeHandler={(n: number) => {}}
              tableData={popularStationList}
              onRowClick={(option) => {
                setLoading(true);
                setSelectedOption(option);
                setIsModalOpen(true);
              }}
            />
          )}
        </Box>
      )}
      {tab === 2 && (
        <Box>
          {popularStationLoading ? (
            <LinearProgress />
          ) : (
            <Table
              count={5}
              page={1}
              pageChangeHandler={(n: number) => {}}
              tableData={popularStationList}
              onRowClick={(option) => {
                setLoading(true);
                setSelectedOption(option);
                setIsModalOpen(true);
              }}
            />
          )}
        </Box>
      )}
    </>
  );
}

export default Stations;
