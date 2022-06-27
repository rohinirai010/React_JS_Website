import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className="Footer-Section">
        <footer className="footer-container">
		    <div className="footer-left">
				
			    <h1> <img src="./images/image 6.png" />MyAccoladez</h1>
				<ul class="box">
					<li> <a href="#">Home</a></li>
					<li> <a href="#">About Us</a></li>
					<li> <a href="#">Contact Us</a></li>
					<li> <a href="#">Career-We are hiring</a></li>
				</ul>
            </div>

			<ul className="footer-right">
			    <li>
				     <h2 className="footer-right-title">Platform</h2>
					    <ul class="box">
						    <li> <a href="#">Banking Rewards</a></li>
							<li> <a href="#">Customer Loyalty</a></li>
							<li> <a href="#">Sales Incentives</a></li>
							<li> <a href="#">Channel Incentives</a></li>
							<li> <a href="#">Employee Recognition</a></li>
					    </ul>
	 		    </li>
				<li className="footer-right1">
				      <h2 className="footer-right-title">Technology</h2>
				         <ul className="box">
						    <li> <a href="#">Rewards</a></li>
							<li> <a href="#">ReeS3</a></li>
							<li> <a href="#">Data Security</a></li>
					     </ul>
				</li>
				<li className="footer-right2">
				      <h2 className="footer-right-title">Features</h2>
				         <ul class="box">
						    <li> <a href="#">Central Store</a></li>
							<li> <a href="#">APIs & Webhooks</a></li>
					     </ul>
		      	</li>
				<li className="footer-right3">
				      <h2 className="footer-right-title">Trending</h2>
				         <ul class="box">
						    <li> <a href="#">Subscription Model</a></li>
					     </ul>
		      	</li>
				  
			</ul>

		</footer>

		<div class="footer-bottom">
			<li><a href="#"><img src="./images/twitter.png" /></a></li>
			<li><a href="#"><img src="./images/fb.png" /></a></li>
			<li><a href="#"><img src="./images/insta.png" /></a></li>
			<li><a href="#">Privacy Policy</a></li>
			<li><a href="#">Terms & Conditions</a></li>
			<li><a href="#">Support</a></li>
			    <p>© 2022 Accoladez®. All rights reserved. </p>
		</div>
    </div>
  )
}

export default Footer