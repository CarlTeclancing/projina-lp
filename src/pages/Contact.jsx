import React ,{useState} from "react";
import '../styles/contactStyles.css'
import contact from '../assets/contact.png'
import Header from "../components/Header";
import contactFooter from '../assets/contact-footer.png'
import { useNavigate } from "react-router-dom";
const Contact = () => {

    const navigate = useNavigate()
    const [info ,setInfo] = useState({
        name:"",
        message:'',
        phone:'',
        email:''
    })

    async function sendMessage(e){
        e.preventDefault()
        try{
            const {name ,message, phone ,email} = info

            const response = await fetch('http://localhost:5000/v1/api/contact' ,{
                method:'post',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify({...info})
            })
        }
        catch(e){
            console.log(e.message);
            
        }
    }

    function handleChange(e){
        setInfo({...info ,[e.target.name]:e.target.value})
    }

    return(
        <React.Fragment>
            <Header/>
            <div className="contact-bg">
                <div className="contact-container">
                    <div className="contact-back-btn">
                        <button style={{border:'solid 1px grey'}} onClick={()=>navigate('/home')}>
                            {/* <img src={arrowBack} /> */}
                            <span>Back to Home</span>
                        </button>
                    </div>

                    <div style={{textAlign:'center'}}>
                        <h1 className="contact-title">Contact Us</h1>
                        <p style={{padding:5}}>For inquiries, support, or more information about Projina, feel free to get in touch with our team.</p>
                    </div>

                    <div className="contact-block">
                        <img src={contact} alt="contact-img" />

                        <form onSubmit={e=>sendMessage(e)} style={{display:'flex' ,flexDirection:'column'}}>
                        <div className="contact-form">
                            <div>
                                <span>Full Name</span>
                                <input type="text" 
                                    name="name"
                                    value={info.name}
                                    onChange={handleChange}
                                    required
                                placeholder="Enter full name" />
                            </div>

                            <div>
                                <span>Phone  Number</span>
                                <input type="text" 
                                    name="phone"
                                    value={info.phone}
                                    onChange={handleChange}
                                    required
                                placeholder="Enter Phone Number"/>
                            </div>

                            <div>
                                <span>Email</span>
                                <input type="text" 
                                    name="email"
                                    value={info.email}
                                    onChange={handleChange}
                                    required
                                placeholder="Enter Email"/>
                            </div>

                            <div>
                                <span>Message</span>
                                <textarea
                                    name="message"
                                    value={info.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter Message" 
                                ></textarea>
                                
                            </div>
                           
                            <div style={{textAlign:'right'}} className="contact-send-btn">
                                <button style={{color:'white' ,backgroundColor:'#5B0C4E'}}>Send Message</button>
                            </div>
                        </div>
                        </form>
                    </div>

                    <div className="contact-footer">
                        <img src={contactFooter} alt="footer" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Contact