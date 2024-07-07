import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <footer style={{
            background: '#280044',
            padding: '80px 10%',
            display: 'flex',

        }}>

            {/* First Div */}
            <div style={{ width: '100%' }}>
                <h2 style={{
                    color: 'white',
                    fontWeight: '600',
                    margin: 0
                }}>
                    Codeschool
                </h2>
                <p style={{
                    color: 'white'
                }}> Online learning community school for coder kids powered by CodingOtt.</p>
            </div>

            {/* Second Div */}
            <div style={{ width: '100%' }}>
                <h2 style={{
                    color: 'white',
                    fontWeight: '600',
                    margin: 0
                }}>
                    Popular Links
                </h2>
                <ul style={{
                    padding: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 15,
                    listStyle: 'none',
                }}>

                    {/* Home */}
                    <li>
                        <Link to="/" style={{
                            color: 'white',
                            textDecoration: 'none',
                            cursor: 'pointer',
                        }}>Home</Link>
                    </li>

                    {/* Teachers */}

                    <li>
                        <Link to="/teachers" style={{
                            color: 'white',
                            textDecoration: 'none',
                            cursor: 'pointer',
                        }}>Teachers</Link>
                    </li>

                    {/* Holidays */}

                    <li>
                        <Link to="/holidays" style={{
                            color: 'white',
                            textDecoration: 'none',
                            cursor: 'pointer',
                        }}>Holidays</Link>
                    </li>

                    {/*Contact Us  */}
                    <li>
                        <Link to="/contact-us" style={{
                            color: 'white',
                            textDecoration: 'none',
                            cursor: 'pointer',
                        }}>Contact Us</Link>
                    </li>

                </ul>
            </div>

            {/* Social Media Div */}

            <div style={{ width: '100%' }}>
                <h2 style={{
                    color: 'white',
                    fontWeight: '600',
                    margin: 0
                }}>
                    Social Profiles
                </h2>
                <ul style={{
                    padding: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 15,
                    listStyle: 'none',
                }}>

                    {/* YouTube */}
                    <li>
                        <Link to="/youtube" style={{
                            color: 'white',
                            textDecoration: 'none',
                            cursor: 'pointer',
                        }}>
                            <i className="ri-youtube-line" style={{ marginRight: 4 }}></i>
                            YouTube
                        </Link>
                    </li>

                    {/* Facebook */}

                    <li>
                        <Link to="/facebook" style={{
                            color: 'white',
                            textDecoration: 'none',
                            cursor: 'pointer',
                        }}>
                            <i className="ri-facebook-box-line" style={{ marginRight: 4 }}></i>
                            Facebook
                        </Link>
                    </li>

                    {/* Linkedin */}

                    <li>
                        <Link to="/linkdein" style={{
                            color: 'white',
                            textDecoration: 'none',
                            cursor: 'pointer',
                        }}>
                            <i className="ri-linkedin-box-line" style={{ marginRight: 4 }}></i>
                            Linkedin</Link>
                    </li>

                    {/* Instagram  */}
                    <li>
                        <Link to="/instagram" style={{
                            color: 'white',
                            textDecoration: 'none',
                            cursor: 'pointer',
                        }}>
                            <i className="ri-instagram-line" style={{ marginRight: 4 }}></i>
                            Instagram
                        </Link>
                    </li>

                </ul>
            </div>

            {/* Contact Us Div */}
            <div style={{ width: '100%' }}>
                <h2 style={{
                    color: 'white',
                    fontWeight: '600',
                    margin: 0
                }}>
                    Codeschool
                </h2>
                <form style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 15,
                    marginTop: 18
                }}>
                    <input
                        name='fullname'
                        placeholder='fullname'
                        type='text'
                        style={{
                            border: "none",
                            padding: 12,
                            borderRadius: 4,
                            width: '100%'
                        }}
                        required />

                    <input
                        name='email'
                        placeholder='example@gmail.com'
                        type='email'
                        style={{
                            border: "none",
                            padding: 12,
                            borderRadius: 4,
                            width: '100%'
                        }}
                        required />

                        <textarea 
                        name='message'
                        placeholder='Message'
                        type='text'
                        style={{
                            border: "none",
                            padding: 12,
                            borderRadius: 4,
                            width: '100%'
                        }}
                        rows="3"
                        required>
                        </textarea>
                        <button style={{
                            border: "none",
                            padding: '12px 24px',
                            borderRadius: 4,
                            width: 'fit-content',
                            background: '#f38e1e',
                            color: 'white'
                        }}>Submit</button>
                </form>
            </div>





        </footer>
    )
}

export default Footer;
