import Grid from "@mui/material/Grid";
import UndoIcon from "@mui/icons-material/Undo";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Button, Container, Typography } from "@mui/material";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Grid xs={6}>
              <Typography variant="h1">404</Typography>
              <Typography variant="h5">{location.pathname}</Typography>
              <Typography variant="h6">
                The page you’re looking for doesn’t exist.
              </Typography>
              <Button
                sx={{ mt: 2 }}
                variant="contained"
                onClick={() => navigate(-1)}
                startIcon={<UndoIcon />}
              >
                Back
              </Button>
            </Grid>
            <Grid xs={6}>
              <img src="/image/404Page.png" alt="" width={500} height={250} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default NotFound;
