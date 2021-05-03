import React from 'react';
import { MDBBtn, MDBInput } from 'mdbreact';

const Register = () => {
	return (
		<form>
			<h1 className="text-center font-weight-bolder">Sign up</h1>
			<div className="form-group">
				<MDBInput className="text-secondary" type="text" label="Username" icon="user-secret" size="sm" />
			</div>
			<div className="form-group">
				<MDBInput className="text-secondary" type="text" label="First Name" icon="user" size="sm" />
			</div>
			<div className="form-group">
				<MDBInput className="text-secondary" type="text" label="Last Name" icon="user" size="sm" />
			</div>
			<div className="form-group">
				<MDBInput className="text-secondary" type="email" label="Email" icon="envelope-open" size="sm" />
			</div>
			<div className="form-group">
				<MDBInput className="text-secondary" type="password" label="Password" icon="lock" size="sm" />
			</div>
			<div className="form-group">
				<MDBInput className="text-secondary" type="password" label="Confirm password" icon="lock-open" size="sm" />
			</div>

			<div className="text-center">
				<MDBBtn color="secondary" size="sm">Sign up</MDBBtn>
			</div>
		</form>
	)
}

export default Register
