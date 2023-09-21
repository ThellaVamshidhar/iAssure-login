// import React, { useState } from "react";
// import "./App.css";
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// import Axios from 'axios';



// const defaultTheme = createTheme();
// function Signup(){

//     const [usernameReg, setUernameReg] = useState("");
//     const [passwordReg, setPasswordReg] = useState ("");

//     const register = () => {
//         Axios.post("http://localhost:8081/register", {
//           username: usernameReg,
//           password: passwordReg,
//          }).then((response) => {
//             console.log(response);
//          });
//        };

//     return (
//       <>
//         <ThemeProvider theme={defaultTheme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box className='main-frame'>
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign UP
//           </Typography>
//           <form action="" >
//             <Box>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               type="email"
//               label="Email Address"
//               name="email"
//               autoFocus
//               onChange={(e) => {
//                 setUernameReg(e.target.value);}}
//             /></Box>
//             <Box>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="text"
//               id="password"
//               onChange={(e) =>{
//                 setPasswordReg(e.target.value);
//              }}
//             />
//            </Box>
//             <FormControlLabel
//               control={<Checkbox value="remember" color="primary" />}
//               label="Remember me"
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//               onClick={register}>
//               Sign up
//             </Button>
//             <Grid container>
//               <Grid item xs>
//                 <Link href="#" variant="body2">
//                   Forgot password?
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Link href="/" variant="body2">
//                   {"Login"}
//                 </Link>
//               </Grid>
//             </Grid>
//           </form>
//         </Box>
//       </Container>
//     </ThemeProvider>
   
//     </>
//     )
// }

// export default Signup;

/*Sigup form*/ 


/* Login form */

// import React, { useState } from 'react';
// import './App.css';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import Home from './Home'

// const defaultTheme = createTheme();

// const LogIn = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const login = () => {
//     Axios.post('http://localhost:8081/login', {
//       username: username,
//       password: password,
//     })
//       .then((response) => {
        
//         if (!response.data.success) {
//           navigate('/Home');
//         }
//       })
//       .catch((error) => {
//         console.error('Error logging in:', error);
//       });
//   };

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box className="main-frame">
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Log In
//           </Typography>
//           <Box noValidate sx={{ mt: 1 }}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               type="text"
//               label="Email Address"
//               name="email"
//               autoFocus
//               onChange={(e) => {
//                 setUsername(e.target.value);
//               }}
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="text"
//               id="password"
//               onChange={(e) => {
//                 setPassword(e.target.value);
//               }}
//             />
//             <FormControlLabel
//               control={<Checkbox value="remember" color="primary" />}
//               label="Remember me"
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//               onClick={login}
//             >
//               Log In
//             </Button>
//             <Grid container>
//               <Grid item xs>
//                 <Link href="#" variant="body2">
//                   Forgot password?
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Link href="/signup" variant="body2">
//                   {"Don't have an account? Sign Up"}
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//       </Container>
//     </ThemeProvider>
//   );
// };

// export default LogIn;
