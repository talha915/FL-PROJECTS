import React, { Component } from 'react';

class Setting extends Component {
    render() {
        return(
            <main>
				<div class="content-wrap">
					<form action="#" class="form-info">
						<div class="content-group">
							<div class="content-row">
								<div class="text-wrap">
									<strong class="subtitle">Workspace Name</strong>
									<div class="text-area">My Workspace</div>
								</div>
								<a href="#" class="link">Edit</a>
							</div>
						</div>
						<div class="content-group">
							<strong class="title">Collaborators</strong>
							<div class="content-row">
								<div class="text-wrap">
									<strong class="subtitle">Invite by email</strong>
								</div>
								<a href="#" class="btn btn-primary">Invite</a>
							</div>
							<div class="content-row">
								<div class="text-wrap">
									<div class="user-box">
										<div class="img-box">
											<span>FX</span>
										</div>
										<div class="text-box">
											<strong class="name">Enter Name</strong>
											<a class="mail" href="#">foxylady@gmail.com</a>
										</div>
									</div>
								</div>
								<a href="#" class="link">Admin</a>
							</div>
						</div>
						<div class="content-group">
							<strong class="title">Personal/Company</strong>
							<div class="content-row input-row justify-content-start">
								<label for="fname">First Name :</label>
								<div class="input-box">
									<input id="fname" type="text" />
								</div>
							</div>
							<div class="content-row input-row justify-content-start">
								<label for="lname">Last Name :</label>
								<div class="input-box">
									<input id="lname" type="text" />
								</div>
							</div>
							<div class="content-row input-row justify-content-start">
								<label>Photo :</label>
								<div class="photo-box">
									<i class="icon-tick"></i>
									<div class="photo"><img src="/images/img04.png" width="53" height="52" alt="img description" /></div>
									<label class="btn-photo">
										<input class="file" type="file" />
										change photo
									</label>
								</div>
							</div>
							<div class="content-row input-row justify-content-start">
								<label for="company">Company Name :</label>
								<div class="input-box">
									<input id="company" type="text" />
								</div>
							</div>
						</div>
						<div class="content-group">
							<strong class="title">Delete Workspace</strong>
							<div class="content-row">
								<div class="text-wrap">
									<div class="text-area">
										<strong class="subtitle">Delete your space "Workspace"</strong>
										<p>This will delete your work and all content within it and remove all team members from it</p>
									</div>
								</div>
								<a href="#" class="link">Delete Workspace</a>
							</div>
						</div>
					</form>
				</div>
			</main>
        )
    }
}

export default Setting;