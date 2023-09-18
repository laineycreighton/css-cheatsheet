//----- IMPORTS -----//
import '../styles/Contact.css';

//----- EXPORTS -----//
export default function Dev() {
    return (
        <div className='contact'>
            <div>
                <h4>Contact Me</h4>
            </div>
            <form className='contact-form' >
                <div className='form-styling'>
                    <div className='name'>
                        <label>Name:</label>
                        <input
                            type="text"
                        />
                    </div>
                    <div className='email'>
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                        />
                    </div>
                    <div className='message'>
                        <label>Message:</label>
                        <textarea
                            name="message"
                        />
                    </div>
                    <button className='submit' type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}