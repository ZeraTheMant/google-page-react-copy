import './App.css';
import BottomNavigation from '@material-ui/core/BottomNavigation'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'


import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles({
	bottomBar: {
		background: '#f2f2f2',
		bottom: 0,
		width: '100%',
		position: 'fixed',
		color: '#6e706f',
		display: 'block',
		height: 'auto',
	},
	bottomBox: {
		padding: '12px 27px'
	},
	horizontalStyles: {
		margin: 0
	},
	footerFont: {
		fontSize: '0.9rem',
		color: '#63706f'	
	},
	x: { color: 'red' },
	mobileSize: { justifyContent: 'center' },
	flexStart : { justifyContent: 'flex-start' },
	flexEnd : { justifyContent: 'flex-end' }
})

function App() {
	const theme = useTheme()
	const classes = useStyles()
	const mobileSize = useMediaQuery(theme.breakpoints.only('xs'));	
	
  return (
    <div className="App">
			<BottomNavigation className={classes.bottomBar}>
				<div className={classes.bottomBox}>
					<Typography className={classes.footerFont}>Philippines</Typography>
				</div>
				
				<hr className={classes.horizontalStyles}/>
				
				<Grid container spacing={2} className={classes.bottomBox}>
					<Grid item xs={12} sm={8} md={6}>
						<Grid container spacing={4} className={mobileSize ? classes.mobileSize : classes.flexStart}>
							<Grid item>
								<Link href="#"className={classes.footerFont}>About</Link>
							</Grid>
							
							<Grid item>
								<Link href="#" className={classes.footerFont}>Advertising</Link>
							</Grid>
							
							<Grid item>
								<Link href="#" className={classes.footerFont}>Business</Link>
							</Grid>
							
							<Grid item>
								<Link href="#" className={classes.footerFont}>How Search works</Link>
							</Grid>							
						</Grid>
					</Grid>
					<Grid item xs={12} sm={4} md={6}>
						<Grid container spacing={3} className={mobileSize ? classes.mobileSize : classes.flexEnd}>
							<Grid item>
								<Link href="#" className={classes.footerFont}>Privacy</Link>
							</Grid>
							
							<Grid item>
								<Link href="#" className={classes.footerFont}>Terms</Link>
							</Grid>
							
							<Grid item>
								<Link href="#" className={classes.footerFont}>Settings</Link>
							</Grid>
						</Grid>
					</Grid>				
				</Grid>				
			</BottomNavigation>
    </div>
  );
}

export default App;
