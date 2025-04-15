
import Link from "next/link"

export default function Form1() {
	return (
		<>

			<div className="widget-form-register">
				<div className="row">
					<div className="col-md-6 pd-form image-register">
						<img src="assets/contact/contactHead.jpg" alt="image" />
					</div>
					<div className="col-md-6 pd-form">
						<div className="widget-register background-green">
							<div className="heading-register">
								<h2 className="title-register">Join our thunderbolts development center </h2>
							</div>
							<div className="list-contact">
								<div className="contact">
									<span> Phone: </span>
									<div className="address">+977 980 197 3967 +977 980 197 3975
                                    </div>
								</div>
								<div className="contact">
									<span> Email: </span>
									<div className="address">info@thunderbolts.com.np</div>
								</div>
							</div>
							<ul className="social-media">
								<li>
									<Link href="/twitter.com"><i className="icon-facebook" /></Link>
								</li>
								<li>
									<Link href="/dribbble.com"><i className="icon-instagram" /></Link>
								</li>
								
								<li>
									<Link href="/pinterest"><i className="icon-youtube" /></Link>
								</li>
							</ul>
							<div className="form-register">
								<form action="#" method="post" id="registerform" className="register-form" noValidate>
									<fieldset className="name-container">
										<input type="text" id="author" placeholder="Your name*" className="tb-my-input" name="author" tabIndex={1} size={32} aria-required="true" />
									</fieldset>
									<fieldset className="email-container">
										<input type="text" id="email" placeholder="Your email*" className="tb-my-input" name="email" tabIndex={2} size={32} aria-required="true" />
									</fieldset>
									<fieldset className="telephone-container">
										<input type="text" id="telephone" placeholder="Telephone*" className="tb-my-input" name="telephone" tabIndex={1} size={32} aria-required="true" />
									</fieldset>
									<fieldset className="sex-container">
										<select name="sex" id="sexs" className="tb-my-input" aria-required="true">
											<option value>Male</option>
											<option value="female">Female</option>
										</select>
									</fieldset>
									<p className="form-submit">
										<input name="submit" type="submit" id="comment-reply" className="submit-register" defaultValue="Join now" />
									</p>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
