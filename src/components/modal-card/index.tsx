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
        <Card sx={{ minWidth: '20rem' }}>
          <CardHeader
            title={`${stationDetails.name} Station`}
            subheader={
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: '0.5rem',
                }}
              >
                <Place />
                {stationDetails.adress}
              </Box>
            }
          />
          <CardContent>
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
            <Typography variant="body2">Average Departure Distancee</Typography>
            <Typography variant="h5">
              {stationDetails.avg_departure_distance
                ? stationDetails.avg_departure_distance
                : 0}
            </Typography>
            <Typography variant="body2">Average Return Distance</Typography>
            <Typography variant="h5">
              {stationDetails.avg_return_distance
                ? stationDetails.avg_return_distance
                : 0}
            </Typography>
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
