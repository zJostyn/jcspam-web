import { Avatar, Stack, Typography } from '@mui/material';

const LogoAppBar = ({ display }) => {
  return (
    <Stack
      component='a'
      href='/'
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
        justifySelf: 'center',
      }}
    >
      <Avatar variant='square' src='/icon.png' sx={{ display, width: 70, height: 70, borderRadius: 5 }}></Avatar>
      <Typography
        variant='h6'
        noWrap
        sx={{
          display,
          mr: 2,
          fontFamily: 'monospace',
          fontWeight: 700,
          color: 'black',
          marginLeft: 1,
        }}
      >
        JCSpam
      </Typography>
    </Stack>
  );
};

export default LogoAppBar;
