import { Box } from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const Confirmation = () => {
  return (
    <Box m="90px auto" width="80%" height="50vh">
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        An error occurred while processing your payment —{' '}
        <strong>Please try a different card or Payment mehotd </strong>
      </Alert>
    </Box>
  );
};

export default Confirmation;
