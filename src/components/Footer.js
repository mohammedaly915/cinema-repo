import React from 'react'
import Facebook from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <div className='footer-sec'>
       {/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
        <div class=" my-5">

        <footer className="footer text-center text-lg-start">
            <div className="container d-flex justify-content-center py-5">
            <button type="button" className="face btn btn-primary btn-lg btn-floating mx-2" >
                <Facebook/>
            </button>
            <button type="button" className="tube btn btn-primary btn-lg btn-floating mx-2" >
                <YouTubeIcon/>
            </button>
            <button type="button" className="insta btn btn-primary btn-lg btn-floating mx-2" >
                <InstagramIcon/>
            </button>
            <button type="button" className="twitt btn btn-primary btn-lg btn-floating mx-2">
                <TwitterIcon/>
            </button>
            </div>

            {/* <!-- Copyright --> */}
            <div className="copy text-center text-white p-3">
            © 2023 Copyright:
            <a classNme="text-white" href="https://mdbootstrap.com/">Seat.com</a>
            </div>
            {/* <!-- Copyright --> */}
        </footer>
        
        </div>
{/* <!-- End of .container --> */}
    </div>
  )
}

export default Footer