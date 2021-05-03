import { useState } from 'react';
import { MDBBtn } from 'mdbreact';

//Customer components
import Login from './auth/Login';
import Register from './auth/Register';

const Authentication = () => {
	const [showRegisterForm, setShowRegisterForm] = useState(false)

	const toggleRegisterForm = () => {
		setShowRegisterForm(!showRegisterForm)
	}

	return (
		<div className="auth-page">
			<div className="row">
				<div className="col-md-6 d-flex align-items-center justify-content-center">
					<div className="row">
						{showRegisterForm ? 
							<div className="col-md-12 text-center">
								<p>Already have an account?</p>
								<MDBBtn color="default" size="sm" onClick={toggleRegisterForm}>Show sign in</MDBBtn>
							</div>
							:
							<div className="col-md-12">
								<Login />
							</div>
						}
					</div>
				</div>
				<div className="col-md-6 d-flex align-items-center justify-content-center">
					<div className="row">
						{!showRegisterForm ?
							<div className="col-md-12 text-center">
								<p>Don't have an account?</p>
								<MDBBtn color="default" size="sm" onClick={toggleRegisterForm}>Show sign up</MDBBtn>
							</div>
							:
							<div className="col-md-12">
								<Register />
							</div>
						}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Authentication
