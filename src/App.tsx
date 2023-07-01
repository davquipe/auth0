import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from '@emotion/styled';

const ButtonLogin = styled('button')({
	backgroundColor: '#FFFFFF',
	border: 'none',
	borderRadius: '30px',
	color: '#000000',
	cursor: 'pointer',
	fontFamily: 'Quicksand, sans-serif',
	fontSize: '1.3rem',
	fontWeight: 'bold',
	padding: '0.8rem 1.5rem',
	'&:hover': {
		backgroundColor: '#EEEEEE',
	},
});

const ButtonLogout = styled('button')({
	backgroundColor: '#000000',
	border: 'none',
	borderRadius: '8px',
	color: '#FFFFFF',
	cursor: 'pointer',
	fontFamily: 'Quicksand, sans-serif',
	fontSize: '1rem',
	fontWeight: 'bold',
	padding: '0.8rem 1.5rem',
	'&:hover': {
		backgroundColor: '#333333',
	},
});

const ImageStyled = styled('img')({
	borderRadius: '50%',
	height: '100px',
	width: '100px',
});

const EmailStyle = styled('span')({
	color: '#9E9E9E',
	display: 'block',
	fontSize: '0.8rem',
	margin: '1rem 0',
});

const HrStyled = styled('hr')({
	border: 'none',
	borderTop: '1px solid #EEEEEE',
	margin: '1rem 0',
	width: '100%',
});

const HeaderStyled = styled('header')({
	backgroundColor: '#000000',
	minHeight: '100vh',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	fontSize: 'calc(10px + 2vmin)',
	color: '#212121',
	p: {
		color: '#000000',
	},
});

const CardStyled = styled('div')({
	backgroundColor: '#FFFFFF',
	borderRadius: '1px',
	boxShadow: '0 0 10px rgba(0,0,0,0.2)',
	padding: '1rem',
	textAlign: 'center',
	width: 'calc(100vw - 2rem))',
});

const LoadingView = styled('div')({
	backgroundColor: '#000000',
	color: '#FFFFFF',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	minHeight: '100vh',
	fontSize: 'calc(10px + 2vmin)',
});

function App() {
	const { loginWithRedirect, user, isAuthenticated, logout, isLoading } =
		useAuth0();
	console.log(user);

	if (isLoading) {
		return <LoadingView>Loading...</LoadingView>;
	}

	return (
		<div>
			<HeaderStyled>
				{isAuthenticated ? (
					<>
						<CardStyled>
							<ImageStyled src={user?.picture} alt={user?.name} />
							<EmailStyle>{user?.email}</EmailStyle>
							<p>
								Hello <b>{user?.name}</b>
							</p>
							<HrStyled />
							<ButtonLogout onClick={() => logout()}>
								Logout
							</ButtonLogout>
						</CardStyled>
					</>
				) : (
					<ButtonLogin onClick={() => loginWithRedirect()}>
						Log in
					</ButtonLogin>
				)}
			</HeaderStyled>
		</div>
	);
}

export default App;
