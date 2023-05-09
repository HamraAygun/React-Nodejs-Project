import instagram from './images/ins.png';
import linkedin from './images/link.png';
import youtube from './images/youtube.png';




function Contact() {


    
    return (
        <>
            <div className="row" style={{ marginTop: "150px" }}>
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Contact Information</h1>
                    </div>
                </div>
                <div className='row text-center'>
                    <h5>You can contact us through our social media accounts.</h5>
                </div>
                <div className="row text-center">
                            <a href="https://www.instagram.com/cybermacsproject/">
                                <img src={instagram} className="app-logo" style={{ width: "50px", height: "50px", marginTop: "40px" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/cybermacs-project/">
                                <img src={linkedin} className="app-logo" style={{ width: "50px", height: "50px", marginTop: "40px" }} />
                            </a>
                            <a href="https://www.youtube.com/channel/UCTMRqexRDQVROVWY0iZkN8w">
                                <img src={youtube} className="app-logo" style={{ width: "50px", height: "50px", marginTop: "40px" }} />
                            </a>
                </div>
            </div>
        </>
    )
}
export default Contact;