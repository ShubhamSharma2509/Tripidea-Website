import { Link } from "react-router-dom"
import "./FooterStyle.css"

const Footer=()=>{
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Tripidea</h1>
                    <p>Tripidea is a website developed using react js by Shubham Sharma</p>
                </div>
                <div>
                    <Link to="https://www.linkedin.com/in/shubham-sharma-24b1851b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank" rel='noreferrer'>
                        <i className="fa-brands fa-linkedin" ></i>
                    </Link>
                    <Link to="mailto:shubham.s.sharma87@gmail.com" target="_blank" rel='noreferrer'>
                        <i className="fa fa-envelope-square" ></i>
                    </Link>
                    <Link to="https://www.instagram.com/shubham_25.?igsh=bHE5OWcyeGZ6c3ky" target="_blank" rel='noreferrer'>
                        <i className="fa-brands fa-instagram-square" ></i>
                    </Link>
                    <Link to="/" target="_blank" rel='noreferrer'>
                        <i className="fa-brands fa-facebook-square" ></i>
                    </Link>
                    
                </div>
            </div>

            <div className="bottom">
                <div>
                    <h4>Project</h4>
                    <Link to="/owner">Owner</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/version">All Version</Link>
                </div>
                <div>
                    <h4>Communication</h4>
                    <Link to="/">Git Hub</Link>
                    <Link to="/contact">Contact Us</Link>
                </div>
                <div>
                    <h4>Help</h4>
                    <Link to="/contact">Support</Link>
                    <Link to="/license">License</Link> 
                </div>
                <div>
                    <h4>Others</h4>
                    <Link to="/termsandservices">Terms and services</Link>
                    <Link to="/privacypolacy">Privacy Polacy</Link>
                </div>
            </div>
        </div>
    )
}
export default Footer