import { useState } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer, MDBIcon, MDBBtn } from "mdbreact";

const Navbar = () => {
	const [collapse, setCollapse] = useState(false)

	const toggleCollapse = () => {
		setCollapse(!collapse)
	}

	const signout = (e) => {
		localStorage.clear()
		location.href = "/authentication";
	}

	return (
		<MDBNavbar dark expand="md" scrolling fixed="top">
			<MDBContainer>
				<MDBNavbarBrand>
					<MDBNavLink to="/">
						<img src="https://nolan-web-profile.s3.amazonaws.com/static/images/nksimple.png" alt="Nolan's Logo" loading="lazy" width="200" height="50"/>
					</MDBNavLink>
				</MDBNavbarBrand>

				<MDBNavbarToggler onClick={toggleCollapse} />
				<MDBCollapse isOpen={collapse} navbar>
					<MDBNavbarNav left>
						<MDBNavItem>
							<MDBNavLink to="/profile">
								<MDBIcon icon="user-secret" />&nbsp;&nbsp;nolan__kgotso
							</MDBNavLink>
						</MDBNavItem>
					</MDBNavbarNav>
					<MDBNavbarNav right>
						<MDBNavItem>
							<MDBBtn onClick={signout}>
								<MDBIcon icon="sign-out-alt" />&nbsp;&nbsp;Sign out
							</MDBBtn>
						</MDBNavItem>
					</MDBNavbarNav>
				</MDBCollapse>
			</MDBContainer>
		</MDBNavbar>
	)
}

export default Navbar
