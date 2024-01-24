import { Typography, Box } from "@mui/material";

const Home = () => {
    return(
      <Box
        display='flex'
        justifyContent="center"
        pt={20} 
      >
        <Typography variant="h2" gutterBottom>
          Привіт! Це сторінка Home!{' '}
          <span role="img" aria-label="icon">
            💁‍♀️
          </span>
        </Typography>
      </Box>
    )
};

export default Home;