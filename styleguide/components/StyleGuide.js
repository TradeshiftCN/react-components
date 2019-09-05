import React from 'react';
import PropTypes from 'prop-types';
import Logo from 'rsg-components/Logo';
import Styled from 'rsg-components/Styled';

const styles = ({ base, baseBackground, fontFamily }) => ({
	root: {
		color: base,
		backgroundColor: baseBackground
	},
	sidebar: {
		display: 'flex',
		flexDirection: 'column',
		width: 320,
		backgroundColor: 'hsl(199, 20%, 22%)',
		color: '#fff',
		position: 'fixed',
		left: 0,
		top: 0,
		bottom: 0
	},
	sidebarHeader: {
		borderBottom: '1px solid hsl(196, 20%, 15%)',
		flex: 'none'
	},
	sidebarContent: {
		flex: 1,
		overflowY: 'auto'
	},
	content: {
		padding: '20px 60px',
		marginLeft: 320,
		minHeight: '100vh'
	}
});

export function StyleGuideRenderer({ classes, children, toc, hasSidebar }) {
	return (
		<div className={classes.root}>
			{hasSidebar && (
				<div className={classes.sidebar}>
					<header className={classes.sidebarHeader}>
						<Logo />
					</header>
					<div className={classes.sidebarContent}>{toc}</div>
				</div>
			)}
			<main className={classes.content}>{children}</main>
		</div>
	);
}

StyleGuideRenderer.propTypes = {
	classes: PropTypes.object.isRequired,
	children: PropTypes.node.isRequired,
	toc: PropTypes.node.isRequired,
	hasSidebar: PropTypes.bool
};

export default Styled(styles)(StyleGuideRenderer);
