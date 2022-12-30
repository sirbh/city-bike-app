import { Autocomplete, Box, TextField } from '@mui/material';
import useStationSearch, { StationOptions } from '../../hooks/useStationSearch';

interface AutocompleteInputProps {
  setSelectedOption: (opt: StationOptions | undefined) => void;
}

function AutocompleteInput({ setSelectedOption }: AutocompleteInputProps) {
  const { options, setQuery } = useStationSearch();
  return (
    <Box sx={{ margin: '1rem 0rem' }}>
      <Autocomplete
        disablePortal
        getOptionLabel={(option) => {
          return option.name;
        }}
        onChange={(e, v, r) => {
          if (r === 'selectOption' && v) {
            setSelectedOption(v);
          }
          if (r === 'clear') {
            setSelectedOption(undefined);
            setQuery('');
          }
        }}
        id="combo-box-demo"
        options={options}
        sx={{ width: 300 }}
        fullWidth
        renderInput={(params) => (
          <TextField {...params} label="Station Search" fullWidth />
        )}
        onInputChange={(e, v, r) => {
          if (r === 'input') {
            setQuery(v);
          }
        }}
      />
    </Box>
  );
}

export default AutocompleteInput;
