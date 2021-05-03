import { useEffect } from 'react';

import { MDBCardBody, MDBCardText, MDBCardTitle } from "mdbreact";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
	const notify = () => {
		toast.error("Unauthorized to view this page. Please login!", {
			position: "top-center",
			autoClose: 1050,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	}	

	useEffect(() => {
		let userInfo = JSON.parse(localStorage.getItem("USER"))

		if (!userInfo) {
			notify()
			setTimeout(() => {
				location.href = "/authentication";
			}, 1000);
		}
	}, [])
	return (
		<div className="home-page text-monospac">
			<ToastContainer />
			<MDBCardBody>
				<MDBCardTitle className="h1">Welcome my friend</MDBCardTitle>
				<p className="blue-text my-4 font-weight-bold">The start of your project</p>
				<MDBCardText>The first page of your project will sit here or you can just clear out this component</MDBCardText>
			</MDBCardBody>
		</div>
	);
}

export default Home;
