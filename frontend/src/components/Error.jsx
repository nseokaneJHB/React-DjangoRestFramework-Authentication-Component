import { MDBCardBody, MDBCardText, MDBCardTitle, MDBIcon } from "mdbreact";

const Error = () => {
	return (
		<div className="error-page text-monospac">
			<MDBCardBody>
				<MDBCardTitle className="h1 blue-text">404</MDBCardTitle>
				<MDBIcon fas icon="frown" size="5x" />
				<p className="mt-2 font-weight-bold">Oops!</p>
				<MDBCardText>Looks like you took a wrong turn my friend</MDBCardText>
			</MDBCardBody>
		</div>
	)
}

export default Error
