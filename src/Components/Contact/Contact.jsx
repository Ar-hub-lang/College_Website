import React from 'react'
import './Contact.css'
import message_icon from '../../assets/edusity_assets/msg-icon.png'
import mail_icon from '../../assets/edusity_assets/mail-icon.png'
import phone_icon from '../../assets/edusity_assets/phone-icon.png'
import location_icon from '../../assets/edusity_assets/location-icon.png'
import white_arrow from '../../assets/edusity_assets/white-arrow.png'
const Contact = () => {

const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6247837c-5fba-4f11-b326-bf23de687cac");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a Message <img src={message_icon} alt="" /></h3>
     
      <p>For any inquiries regarding our programs, services, or admissions, please feel free to contact us. Our team is committed to providing prompt and detailed assistance to ensure your questions are answered efficiently.</p>
        <ul className='list'>
            <li><img src={mail_icon}alt="" />graphic123@gmail.com</li>
            <li><img src={phone_icon} alt="" />+9123452633</li>  
            <li><img src={location_icon}alt="" />123 EduTech Street, Knowledge Park, Learning City, State 456789, Country
</li>
        </ul>    
         </div>
         <div className="contact-col">
            <form onSubmit={onSubmit} id='contact'>
                <label>Your name</label>
                <input type='text' name='name' placeholder='Enter your name ' required></input>
                <label>Phone Number</label>
                <input type='tel' name='phone ' placeholder='Enter your Mobile number' required></input>
                <label>Write your message here</label>
                <textarea name='message'  rows='6' placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
         </div>
    </div>
    
  )
}

export default Contact
