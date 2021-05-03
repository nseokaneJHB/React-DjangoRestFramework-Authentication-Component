import { useState, useEffect } from 'react';
import axios from 'axios';
import { MDBBtn, MDBInput } from 'mdbreact';

const Login = () => {
	const [credentials, setCredentials] = useState({username: "", password: ""})

	const watchUsername = (e) => {setCredentials({...credentials, username: e.target.value})}
	const watchPassword = (e) => {setCredentials({...credentials, password: e.target.value})}

	const submitCredentials = (e) => {
		e.preventDefault();
		getUserToken();
	}

	const getUserToken = () => {
		const url = "http://127.0.0.1:8000/api/v1/tokenize/";

		axios.post(url, credentials).then(res => {
			localStorage.setItem("USER", JSON.stringify({"username": res.data.username, "token": res.data.token}))
			setCredentials({username: "", password: ""})
		}).catch(err => {
			console.log(err);
		})
	}

	useEffect(() => {
		console.log();
	}, [])

	return (
		<form onSubmit={submitCredentials}>
			<h1 className="text-center font-weight-bolder">Sign in</h1>
			<div className="form-group">
				<MDBInput className="text-secondary" type="text" label="Username" icon="user-secret" size="sm" value={credentials.username} onChange={watchUsername} />
			</div>
			<div className="form-group">
				<MDBInput className="text-secondary" type="password" label="Password" icon="lock" size="sm" value={credentials.password} onChange={watchPassword} />
			</div>

			<div className="text-center">
				<MDBBtn color="secondary" size="sm" type="submit">Sign in</MDBBtn>
			</div>
		</form>
	)
}

export default Login
