import { CardContent } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: '20px',

    },
    icon: {
        marginRight: '20px'
    },
    button: {
        marginTop: '40px'
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardGrid: {
        padding: '20px 0',
    },
    cardMedia: {
        paddingTop: '56.25%',
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        paddingTop: '20px',
        paddingBottom: '30px'
    }

}));

export default useStyles;