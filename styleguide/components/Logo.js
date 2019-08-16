import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'rsg-components/Styled';
import logo from './logo.svg';

const styles = ({ fontFamily, color }) => ({
	logo: {
		height: '60px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export function LogoRenderer({ classes }) {
	return (
		<h1 className={classes.logo}>
			<img className={classes.image} src={logo} alt="tradeshift" />
		</h1>
	);
}

LogoRenderer.propTypes = {
	classes: PropTypes.object.isRequired
};

export default Styled(styles)(LogoRenderer);
