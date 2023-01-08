import * as React from 'react';
import Modal from '@mui/material/Modal';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Typography,
} from '@mui/material';
import { Place } from '@mui/icons-material';
import { IStationDetails } from '../../hooks/useStationDetails';
import Mapview from '../map';

interface IModalCardProps {
  open: boolean;
  handleClose: () => void;
  stationDetails: IStationDetails;
  loading: boolean;
}

function ModalCard({
  open,
  handleClose,
  stationDetails,
  loading,
}: IModalCardProps) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      {!loading ? (
        <Card sx={{ minWidth: '40rem' }}>
          <CardHeader
            title={`${stationDetails.name} Station`}
            subheader={
              <>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    margin: '0.5rem 0rem',
                  }}
                >
                  <Place />
                  {stationDetails.adress}
                </Box>
                <Mapview
                  lat={stationDetails.y}
                  log={stationDetails.x}
                  markerLabel={stationDetails.name}
                />
              </>
            }
          />
          <CardContent
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <Box sx={{ marginRight: '1rem' }}>
              <Typography variant="body2">Total Departures</Typography>
              <Typography variant="h5">
                {stationDetails.total_departures
                  ? stationDetails.total_departures
                  : 0}
              </Typography>
              <Typography variant="body2">Total Returnes</Typography>
              <Typography variant="h5">
                {stationDetails.total_return ? stationDetails.total_return : 0}
              </Typography>
              <Typography variant="body2">
                Average Departure Distance
              </Typography>
              <Typography variant="h5">
                {stationDetails.avg_departure_distance
                  ? `${(stationDetails.avg_departure_distance / 1000)
                      .toFixed(2)
                      .toString()}km`
                  : '0km'}
              </Typography>
              <Typography variant="body2">Average Return Distance</Typography>
              <Typography variant="h5">
                {stationDetails.avg_return_distance
                  ? `${(stationDetails.avg_return_distance / 1000)
                      .toFixed(2)
                      .toString()}km`
                  : '0km'}
              </Typography>
            </Box>
            <Box sx={{ marginRight: '1rem' }}>
              <Typography variant="body2" sx={{ marginBottom: '1rem' }}>
                Total 5 Return Station
              </Typography>
              {stationDetails.popular_return_station.map((station, i) => {
                return (
                  <Typography variant="body1" key={station.station_id}>
                    {`${i + 1}. ${station.name}`}
                  </Typography>
                );
              })}
            </Box>
            <Box>
              <Typography variant="body2" sx={{ marginBottom: '1rem' }}>
                Total 5 Departure Station
              </Typography>
              {stationDetails.popular_departure_station.map((station, i) => {
                return (
                  <Typography variant="body1" key={station.station_id}>
                    {`${i + 1}. ${station.name}`}
                  </Typography>
                );
              })}
            </Box>
          </CardContent>
        </Card>
      ) : (
        <Card
          sx={{
            minWidth: '10rem',
            minHeight: '10rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularProgress />
        </Card>
      )}
    </Modal>
  );
}

export default ModalCard;
