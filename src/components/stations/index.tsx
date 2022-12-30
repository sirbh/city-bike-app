import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import useStationList from '../../hooks/useStationList';
import Table from './table';
import AutocompleteInput from '../autocompleteInput';
import ModalCard from '../modal-card';
import useStationDetails from '../../hooks/useStationDetails';

function Stations() {
  const { count, page, setPage, stationList } = useStationList();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { setSelectedOption, stationDetails } = useStationDetails();
  return (
    <>
      {stationDetails && (
        <ModalCard
          handleClose={() => {
            setIsModalOpen(false);
          }}
          open={isModalOpen}
          stationDetails={stationDetails}
        />
      )}
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <AutocompleteInput
          setSelectedOption={(option) => {
            setSelectedOption(option);
            if (option) {
              setIsModalOpen(true);
            }
          }}
        />
      </Box>
      <Typography variant="h3" sx={{ margin: '2rem 2rem' }}>
        List Of Station
      </Typography>
      <Table
        count={count}
        page={page}
        pageChangeHandler={(n: number) => {
          setPage(n + 1);
        }}
        tableData={stationList}
        onRowClick={(option) => {
          setSelectedOption(option);
          setIsModalOpen(true);
        }}
      />
    </>
  );
}

export default Stations;
