import { useState, useEffect } from 'react';
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput } from 'mdbreact';

import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Profile = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [userDetails, setUserDetails] = useState({
		username: "",
		first_name: "",
		last_name: "",
		email: "",
	})

	const [profileDetails, setProfileDetails] = useState({
		title: "",
		avatar: "",
		phone: "",
		bio: "",
	})

	const watchUsername = (e) => {setUserDetails({...userDetails, username: e.target.value})}
	const watchFirstname = (e) => {setUserDetails({...userDetails, first_name: e.target.value})}
	const watchLastname = (e) => {setUserDetails({...userDetails, last_name: e.target.value})}
	const watchEmail = (e) => {setUserDetails({...userDetails, email: e.target.value})}

	const watchTitle = (e) => {setProfileDetails({...profileDetails, title: e.target.value})}
	const watchAvatar = (e) => {setProfileDetails({...profileDetails, avatar: e.target.value})}
	const watchPhone = (e) => {setProfileDetails({...profileDetails, phone: e.target.value})}
	const watchBio = (e) => {setProfileDetails({...profileDetails, bio: e.target.value})}

	const toggleModal = () => {
		setIsModalOpen(!isModalOpen);
	}

	const getUserProfileDetails = () => {
		const url = "http://127.0.0.1:8000/api/v1/profile/";

		let userInfo = JSON.parse(localStorage.getItem("USER"))

		if (!userInfo) {
			notify()
			setTimeout(() => {
				location.href = "/authentication";
			}, 1000);
		}else{
			axios.get(url, {
				headers: {
					'Authorization': `Token ${userInfo.token}` 
				}
			}).then(res => {
				let user = res.data
				let profile = user.account
				
				setUserDetails({ ...userDetails, username: user.username, first_name: user.first_name, last_name: user.last_name, email: user.email })
				setProfileDetails({ ...profileDetails, title: profile.title, phone: profile.phone, avatar: profile.avatar, bio: profile.bio})
			})
		}
	}

	const submitUserProfile = (e) => {
		e.preventDefault()
		console.log(userDetails);
		console.log(profileDetails);
	}

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
		getUserProfileDetails()
	}, [])	

	return (
		<div className="profile-page">
			<ToastContainer />
			<form className="row" onSubmit={submitUserProfile}>
				<div className="col-md-6 text-center d-flex align-items-center justify-content-center">
					<div>
						<img className="img-fluid rounded-circle d-block mx-auto" src={profileDetails.avatar} loading="lazy" style={{width: "200px", height: "203px"}} />
						<p className="mt-3 text-uppercase font-weight-bolder">{profileDetails.title}</p>
						<MDBBtn size="sm" onClick={toggleModal}>Change</MDBBtn>

						<MDBModal isOpen={isModalOpen} toggle={toggleModal}>
							<MDBModalHeader toggle={toggleModal}>Profile Picture and Title</MDBModalHeader>
							<MDBModalBody>
								<div className="form-group">
									<MDBInput type="text" label="Title" size="sm" value={profileDetails.title} onChange={watchTitle} />
								</div>
								<div className="form-group">
									<MDBInput type="text" label="Avatar URL" size="sm" value={profileDetails.avatar} onChange={watchAvatar} />
								</div>
							</MDBModalBody>
							<MDBModalFooter>
								<MDBBtn color="warning" size="sm" onClick={toggleModal}>Close</MDBBtn>
								<MDBBtn color="primary" size="sm">Save changes</MDBBtn>
							</MDBModalFooter>
						</MDBModal>
					</div>
				</div>

				<div className="col-md-6">
					<div className="form-group">
						<MDBInput className="text-secondary" type="text" label="Username" icon="user-secret" size="sm" value={userDetails.username} onChange={watchUsername} />
					</div>

					<div className="form-group">
						<MDBInput className="text-secondary" type="text" label="First Name" icon="user" size="sm" value={userDetails.first_name} onChange={watchFirstname} />
					</div>

					<div className="form-group">
						<MDBInput className="text-secondary" type="text" label="Last Name" icon="user" size="sm" value={userDetails.last_name} onChange={watchLastname} />
					</div>

					<div className="form-group">
						<MDBInput className="text-secondary" type="email" label="Email" icon="envelope-open" size="sm" value={userDetails.email} onChange={watchEmail} />
					</div>

					<div className="form-group">
						<MDBInput className="text-secondary" type="text" label="Phone Number" icon="phone-alt" size="sm" value={profileDetails.phone} onChange={watchPhone} />
					</div>

					<div className="form-group mt-3">
						<MDBInput className="text-secondary" type="textarea" label="Bio" icon="info" size="sm" rows="5" value={profileDetails.bio} onChange={watchBio} />
					</div>

					<MDBBtn color="secondary" size="sm" type="submit">Save changes</MDBBtn>
				</div>
			</form>
		</div>
	)
}

export default Profile
