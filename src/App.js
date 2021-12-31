import React, { useState, useRef } from 'react';

import './App.css';
import BottomNavigation from '@material-ui/core/BottomNavigation'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import InputAdornment from '@material-ui/core/InputAdornment'
import Autocomplete from '@material-ui/lab/Autocomplete'

import ViewComfy from '@material-ui/icons/ViewComfy'
import Search from '@material-ui/icons/Search'
import Mic from '@material-ui/icons/Mic'
import Close from '@material-ui/icons/Close'

import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery';

import name from './name.png'
import GoogleLogo from './google.png'

const MidButtons = () => {
	const classes = useStyles()	
	
	return (
		<Grid container justifyContent="center" spacing={2} className={classes.midButtonsContainer}>
		<Grid item>
			<Button 
				style={{ textTransform: 'none' }} 
				variant="contained"
				className={classes.midButton}
			>
				Google Search
			</Button>
		</Grid>
		
		<Grid item>
			<Button 
				style={{ textTransform: 'none' }} 
				variant="contained"
				className={classes.midButton}
			>
				I'm Feeling Lucky
			</Button>
		</Grid>						
	</Grid>
	)
}

const useStyles = makeStyles({
	topSection: {
		background: 'white',
		padding: '10px 15px',
	},
	userImg: {
		width: '32px',
		height: '32px',
		borderRadius: '50%',
		'&:hover': {
			background: '#f2f2f2'
		},
		padding: '3px'
	},
	icon: {
		borderRadius: '50%',
		padding: '5px',
		'&:hover': {
			background: '#f2f2f2'
		},		
	},
	bottomBar: {
		background: '#f2f2f2',
		width: '100%',
		position: 'fixed',
		color: '#6e706f',
		display: 'block',
		height: 'auto',
		bottom: 0,
	},
	bottomBox: {
		padding: '12px 27px'
	},
	horizontalStyles: {
		margin: 0
	},
	smallFont: {
		fontSize: '0.9rem',
	},
	smallerFont: { fontSize: '0.8rem' },
	greyFont: {
		color: '#63706f'			
	},
	blackFont: { color: 'black' },
	mobileSize: { justifyContent: 'center' },
	flexStart : { justifyContent: 'flex-start' },
	flexEnd : { justifyContent: 'flex-end' },
	centered: {
		alignItems: 'center',
	},
	test: { display: 'flex', alignItems: 'center' },
	block: { display: 'block' },
	searchBar: {
   [`& fieldset`]: {
			borderRadius: '50px',
   },
   marginTop: '20px'
	},
  middle: {
		width: '45%',
	},
	autoMargin: { margin: 'auto' },
	main : {
		height: '100%'
	},
	x: {
		width: '100%',
		position: 'absolute',
		top: '45%',
		transform: 'translateY(-50%)'
	},
	q : {
		width: '45%',
		margin: 'auto',
	},
	o: { width: '80%', margin: 'auto' },
	searchIcon: {
		color: '#63706f',
		fontSize: '1.2rem'
	},
	mic: {
		fontSize: '1.3rem',
		cursor: 'pointer',
		color: '#4387ff'
	},
	close: {
		color: '#63706f',
		cursor: 'pointer'
	},
	midButton: {
		background: '#f2f3f5',
		color: '#63706f'
	},
	midButtonsContainer: {
		marginTop: '25px'
	},
	offerings: {
		color: '#63706f',
		textAlign: 'center',
		fontSize: '0.9rem',
		marginTop: '25px'
	},
	block: { display: 'block' },
	hidden: { display: 'none' },
	recommendation: {
   [`&:hover`]: {
			background: '#f2f2f2'
   },
   margin: 0,
	 width: '100%',
   alignItems: 'center',
   padding: '0 10px'		
	},
	/*box: {
		display: 'flex',
		flexFlow: 'column',
		height: '100vh'		
	},
	
	row: {
	  border: '1px dotted grey'	
	},
	
	header: {
		flex: '0 1 auto'
	},
	content: {
		flex: '1 1 auto'
	},
	footer: {
		flex: '1 1 auto',
		display: 'block'
	},
	footerFont: {
			display: 'block'
	}*/
	joe: {
		background: 'white',
		//height: '150px',
		borderBottomLeftRadius: '20px',
		borderBottomRightRadius: '20px',
		zIndex: '5',
		left: 0,
		border: '2px solid #4552a0',
		borderTop: 'none',
		position: 'absolute',
		width: '100%',
		boxSizing: 'border-box',
		paddingBottom: '10px'
	},
	buck: {
		height: '2px',
		background: '#4552a0',
		width: '95%',
		margin: 'auto'
	},
	gg: {
   [`& fieldset`]: {
		height: '80px',
		borderRadius: '20px',		
   },		
	},
	bold: { fontWeight: 'bold', fontSize: '1.1rem'},
  relative: { position: 'relative'},
  jj: { marginTop: '10px' }
})

function App() {
	const theme = useTheme()
	const classes = useStyles()
	const mobileSize = useMediaQuery(theme.breakpoints.only('xs'));	
	
	const searchInput = useRef()
	
	const [focusing, setFocusing] = useState(false)
	
	const handleSearchFocus = (e) => {
		if (!focusing)
			setFocusing(true)
	}
	
	const handleSearchBlur = (e) => {
		setFocusing(false)
	}	
	
	const handleX = (e) => {
		e.preventDefault()
		searchInput.current.value = ''
	}
	
	const base = [classes.block, classes.searchBar].join(' ')
	const final = focusing ? [base, classes.gg].join(' ') : base
	
  return (
    <div className="App">
			<div className={classes.topSection}>
				<Grid container justifyContent="flex-end">
					<Grid item>
						<Grid container spacing={2} className={classes.centered}>
							<Grid item className={classes.test}>
								<Link href="#" className={[classes.smallerFont, classes.blackFont].join(' ')}>Gmail</Link>
							</Grid>
			
							<Grid item className={classes.test}>					
								<Link href="#" className={[classes.smallerFont, classes.blackFont].join(' ')}>Images</Link>
							</Grid>
													
							<Grid item>						
								<Link href="#"><ViewComfy className={[classes.greyFont, classes.icon].join(' ')} /></Link>				
							</Grid>
													
							<Grid item>						
								<Link href="#"><img src={name} className={classes.userImg}/></Link>
							</Grid>						
						</Grid>
					</Grid>
				</Grid>
			</div> 			
				
			<div className={classes.x}>
				<div className={mobileSize ? classes.o : classes.q}>
					<img src={GoogleLogo} className={[classes.block, classes.autoMargin].join(' ')} />
					<TextField 
						inputRef={searchInput}
						onFocus={handleSearchFocus}
						onBlur={handleSearchBlur}
						inputProps={{ 
							style: { padding: 10 },
						}}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">	
									<Search className={classes.searchIcon} />
								</InputAdornment>											
							),
							endAdornment: (
								<InputAdornment position="end">					
									<Close 
										className={focusing ? classes.close : classes.hidden} 
										onMouseDown={handleX}
									/>							
									<Mic className={classes.mic} />
								</InputAdornment>	
							)
						}}
						variant="outlined" 
						className={final} 
						fullWidth 
					/>
					
					<div className={focusing ? classes.relative : classes.hidden}>
						<div className={classes.joe}>
							<div className={classes.buck}></div>
							
							<div className={classes.jj}>
								<Grid container className={classes.recommendation} spacing={1}>
									<Grid item>
										<Search className={classes.searchIcon} />
									</Grid>
									
									<Grid item>
										<Typography className={classes.bold}>Recommendation</Typography>
									</Grid>									
								</Grid>
								
								<Grid container className={classes.recommendation} spacing={1}>
									<Grid item>
										<Search className={classes.searchIcon} />
									</Grid>
									
									<Grid item>
										<Typography className={classes.bold}>Recommendation 2</Typography>
									</Grid>									
								</Grid>		
								
								<Grid container className={classes.recommendation} spacing={1}>
									<Grid item>
										<Search className={classes.searchIcon} />
									</Grid>
									
									<Grid item>
										<Typography className={classes.bold}>Recommendation 3</Typography>
									</Grid>							
								</Grid>		
								
							  <MidButtons />																					
							</div>
						</div>
					</div>
		
					<MidButtons />
		
					<Typography className={classes.offerings}>
						Google offered in:
						&nbsp;
						<Link href="#">Filipino</Link>
						&nbsp;
						<Link href="#">Cebuano</Link>
					</Typography>
				</div>
			</div>			   
		
			<BottomNavigation className={classes.bottomBar}>
				<div className={classes.bottomBox}>
					<Typography className={classes.footerFont}>Philippines</Typography>
				</div>
				
				<hr className={classes.horizontalStyles}/>
				
				<Grid container spacing={2} className={classes.bottomBox}>
					<Grid item xs={12} sm={8} md={6}>
						<Grid container spacing={4} className={mobileSize ? classes.mobileSize : classes.flexStart}>
							<Grid item>
								<Link href="#"className={[classes.smallFont, classes.greyFont].join(' ')}>About</Link>
							</Grid>
							
							<Grid item>
								<Link href="#" className={[classes.smallFont, classes.greyFont].join(' ')}>Advertising</Link>
							</Grid>
							
							<Grid item>
								<Link href="#" className={[classes.smallFont, classes.greyFont].join(' ')}>Business</Link>
							</Grid>
							
							<Grid item>
								<Link href="#" className={[classes.smallFont, classes.greyFont].join(' ')}>How Search works</Link>
							</Grid>							
						</Grid>
					</Grid>
					<Grid item xs={12} sm={4} md={6}>
						<Grid container spacing={3} className={mobileSize ? classes.mobileSize : classes.flexEnd}>
							<Grid item>
								<Link href="#" className={[classes.smallFont, classes.greyFont].join(' ')}>Privacy</Link>
							</Grid>
							
							<Grid item>
								<Link href="#" className={[classes.smallFont, classes.greyFont].join(' ')}>Terms</Link>
							</Grid>
							
							<Grid item>
								<Link href="#" className={[classes.smallFont, classes.greyFont].join(' ')}>Settings</Link>
							</Grid>
						</Grid>
					</Grid>				
				</Grid>		
			</BottomNavigation>
    </div>
  );
}

export default App;
