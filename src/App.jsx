import React from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import Button from '@mui/material/Button';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(() => ({

}));


const App = () => {
    const Classes = useStyles();
    return (
        <>
            <CssBaseline>
                <AppBar position='relative'>
                    <Toolbar>
                        <PhotoCameraIcon />
                        <Typography variant='h6'>
                            Photo Album
                        </Typography>
                    </Toolbar>
                </AppBar>
            </CssBaseline>
            <main>
                <div>
                    <Container maxWidth='sm'
                        //Initialization 
                        className={Classes.container}>
                        <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant='h5' align='center' color='textSecondary' paragraph>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolorum illum accusantium sunt consequuntur, possimus perspiciatis nesciunt at vero voluptatem deleniti ipsa doloribus laboriosam. Quasi quos nostrum eos labore maxime!
                        </Typography>
                        <Grid container spacing={2} justifyContent='center'>
                            <Grid item>
                                <Button variant='contained' color='primary'>See My photos</Button>
                            </Grid>
                            <Grid item>
                                <Button variant='outlined' color='primary'>Secondary activity</Button>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </main>

        </>
    )
}

export default App