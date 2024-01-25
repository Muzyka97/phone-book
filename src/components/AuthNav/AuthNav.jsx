import {Box, Link} from '@mui/material'

const AuthNav = () => {
  return(
    <Box>
      <Link
        href="/phone-book/register"
        color="inherit"
        underline="none"
        mr={5}
      >
        Реєстрація
      </Link>
      <Link
        mr={5}
        href="/phone-book/login"
        underline="none"
        color="inherit"
      >
        Логін
      </Link>
    </Box>
  )
};

export default AuthNav;