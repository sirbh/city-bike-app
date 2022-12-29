import { Typography } from '@mui/material';
import useStationList from '../../hooks/useStationList';
import Table from './table';

function Stations() {
  const { count, page, setPage, stationList } = useStationList();
  return (
    <>
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
      />
    </>
  );
}

export default Stations;
