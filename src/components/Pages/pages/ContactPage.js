import React from 'react';

import Map from "../../Map";
import ContactForm from "../../ContactForm";

import contact1 from '../../../images/contact/contact1.png';
import contact2 from '../../../images/contact/contact2.png';
import contact3 from '../../../images/contact/contact3.png';
import contact4 from '../../../images/contact/contact4.png';
import contact5 from '../../../images/contact/contact5.png';

const list = [
    {value: "carmania@domena.pl", img: contact1},
    {value: "+48 111 222 333", img: contact2},
    {value: "carmania", img: contact3},
    {value: "@carmania", img: contact4},
    {value: "carmania", img: contact5},

]

const ContactPage = () => {
    const contacts = list.map(item => (
        <div className={'socialMedia'}>
            <img src={item.img} alt={''}/>
            <h4>{item.value}</h4>
        </div>
    ))
    return (
        <div>
            <h2>kontakt</h2>
            <section className="contact">
                <div className="wrap">
                    <h3>Skontaktuj się z nami za pomocą formularza</h3>
                    <ContactForm />
                    <h3>Lub skorzystaj z poniższych możliwości:</h3>
                    {contacts}
                </div>
            </section>
            <Map />
            <p className={'nip'}>NIP: **********</p>
            <p className={'regon'}>REGON: *********</p>
            <p className={'krs'}>KRS: **********</p>
        </div>
    )
}

export default ContactPage;