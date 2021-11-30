import React from 'react';
import Footer from './Footer';
import Head from './Head';
import Header from './Header';

const Contact = () => {
    return (
        <div>
            <Head />
            <Header />

            <div className="main-content">
                <div className="container_24 primary_content_wrap clearfix">
                    <div id="content">
                        <div
                            id="post-14"
                            className="post-14 page type-page status-publish hentry page"
                        >
                            <div className="grid_24 ">
                                <div className="google-map">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d926737.8937868911!2d67.0099388!3d24.8614622!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9764eec0fcef%3A0x5343f729e3cc3e36!2sHyderabad+Deccan!5e0!3m2!1sen!2s!4v1423793573161"
                                        width={940}
                                        height={300}
                                        frameBorder={0}
                                        style={{ border: 0 }}
                                    />
                                </div>
                            </div>
                            <div className="clear" />
                            <div className="grid ">
                                <h3>Contact information</h3>
                                <dl className="address">
                                    <dt>
                                        <b>
                                            <strong>H&amp;H Impex.</strong>
                                        </b>
                                        <br />
                                        (Karachi,Pakistan)
                                        <br />
                                        Samar Hussain
                                        <br />
                                        Business Associate
                                        <br />
                                        187Q P.E.C.H.S. Karachi,
                                        <br />
                                        03142500475
                                        <br />
                                        samar@handhimpex.com
                                        <br />
                                        <br />
                                    </dt>
                                    <dt>
                                        (London,England)
                                        <br />
                                        Kumail Reza
                                        <br />
                                        Business Associate
                                        <br />
                                        81 church drive, Harrow, middlesex, HA2 7NR.
                                        <br />
                                        00447946305320
                                        <br />
                                        kumail@handhimpex.com
                                        <br />
                                        <br />
                                    </dt>
                                    <dt>
                                        (Hyderabad,India)
                                        <br />
                                        Sadiq Badami
                                        <br />
                                        Business Associate
                                        <br />
                                        22-6-1017, irani lane, hyderabad-500002,telangana.
                                        <br />
                                        +919703608540
                                        <br />
                                        sadiq@handhimpex.com
                                        <br />
                                        <br />
                                    </dt>
                                    <dt>
                                        (Karachi,Pakistan)
                                        <br />
                                        Muzammil ali khan
                                        <br />
                                        Business Associate
                                        <br />
                                        187Q P.E.C.H.S. Karachi.
                                        <br />
                                        03002682535
                                        <br />
                                        muzammilkhan@handhimpex.com
                                        <br /> <br />
                                    </dt>
                                    <dt>
                                        (Karachi,Pakistan)
                                        <br />
                                        Maesam Raza
                                        <br />
                                        Business Associate
                                        <br />
                                        187Q P.E.C.H.S. Karachi.
                                        <br />
                                        03322901615
                                        <br />
                                        maesam@handhimpex.com
                                        <br /> <br />
                                    </dt>
                                    <dt>
                                        (Karachi,Pakistan)
                                        <br />
                                        Asif Z. Warsi
                                        <br />
                                        Business Associate
                                        <br />
                                        187Q P.E.C.H.S. Karachi.
                                        <br />
                                        03202121330
                                        <br />
                                        asifwarsi@handhimpex.com
                                        <br />
                                    </dt>
                                    <dd>
                                        <ul>
                                            <li />
                                            <li />
                                            <li> </li>
                                            <br />
                                            <li>
                                                website :
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;www.handhimpex.com
                                            </li>
                                            <br />
                                            <li>
                                                E-mail:
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;info@handhimpex.com
                                            </li>
                                            <li>
                                                {" "}
                                                <p>&nbsp;</p>
                                                <a href="#" />
                                            </li>
                                        </ul>
                                    </dd>
                                </dl>
                            </div>
                            <div className="clear" />
                            <div className="pagination"></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Contact;