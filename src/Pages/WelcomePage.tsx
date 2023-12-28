
import { Typography, Container, Grid } from '@mui/material';

const WelcomePage = () => {
  return (
    <Container>
      <Grid
        container
        spacing={3}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '50vh' }}
      >
        <Grid item>
          <Typography variant="h2" color="primary" gutterBottom>
            ברוכים הבאים לנץ יוניברסיטי
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" color="textSecondary" paragraph>
            כאן תלמדו את הקורסים הכי שווים
          </Typography>
        </Grid>
        <Grid item>
        </Grid>
      </Grid>
    </Container>
  );
}

export default WelcomePage;