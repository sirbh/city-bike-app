import Table from './table';
import useJourneyDetails from '../../hooks/useJourneyDetails';
import Tabs from './tabs';

function Journey() {
  const { journeyDetails, setOrder, setSortBy, setPage } = useJourneyDetails();

  return (
    <>
      <Tabs />
      <Table tableData={journeyDetails} />
    </>
  );
}

export default Journey;
