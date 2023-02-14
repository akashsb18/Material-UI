import React from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import Button from '@mui/material/Button';

import useStyles from './styles';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {
    const Classes = useStyles();
    return (
        <>
            <CssBaseline>
                <AppBar position='relative'>
                    <Toolbar>
                        <PhotoCameraIcon className={Classes.icon} />
                        <Typography variant='h6'>
                            Photo Album
                        </Typography>
                    </Toolbar>
                </AppBar>
            </CssBaseline>
            <main>
                <div className={Classes.container}>
                    <Container maxWidth='sm'
                    //Initialization 
                    >
                        <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant='h5' align='center' color='textSecondary' paragraph>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolorum illum accusantium sunt consequuntur, possimus perspiciatis nesciunt at vero voluptatem deleniti ipsa doloribus laboriosam. Quasi quos nostrum eos labore maxime!
                        </Typography>
                        <div className={Classes.button}>
                            <Grid container spacing={4} justifyContent='center'>
                                <Grid item>
                                    <Button variant='contained' color='primary'>See My photos</Button>
                                </Grid>
                                <Grid item>
                                    <Button variant='outlined' color='primary'>Secondary activity</Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={Classes.cardGrid} maxWidth='md'>
                    <Grid container spacing={2}>
                        {cards.map(() => (
                            <Grid item xs={12} sm={6} md={4}>
                                <Card className={Classes.card}>
                                    <CardMedia className={Classes.cardMedia}
                                        image='https://source.unsplash.com/random'
                                        title="image title"
                                    />
                                    <CardContent className={Classes.cardContent}>
                                        <Typography gutterBottom variant='h5'>
                                            Heading
                                        </Typography>
                                        <Typography >
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, suscipit.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size='small'>View</Button>
                                        <Button size='small'>Edit</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            <footer className={Classes.footer}>
                <Typography align='center' varient='h5'>
                    Footer
                </Typography>
                <Typography align='center' color='textSecondary'>
                    Lorem ipsum dolor sit amet
                </Typography>
            </footer>
        </>
    )
}

export default App