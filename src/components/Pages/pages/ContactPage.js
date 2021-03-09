import React, { useState } from 'react';

import Map from "../../Map";

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
    const [name, setName] = useState('') ;
    const [email, setEmail] = useState('') ;
    const [text, setText] = useState('') ;

    const handleNameChange = (e) => setName(e.target.value)
    const handleEmailChange = (e) => setEmail(e.target.value)
    const handleTextChange = (e) => setText(e.target.value)

    const handleClick = () => {
        if(name === '' || email === '' || text === '') alert("Wszystkie pola formularza powiny być wypełnione. Uzupełni brakujące pola")
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) alert("Niepoprawny mail")
        else alert("Formularz został wysłany, odezwiemy się do Ciebie jak najszybciej")
    }

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
                    <form action="">
                        <h3>Skontaktuj się z nami za pomocą formularza</h3>
                        <input type="text" placeholder="Twoje imię..." value={name} onChange={handleNameChange}/>
                        <input type="email" placeholder="Email..." value={email} onChange={handleEmailChange}/>
                        <textarea placeholder="Twoja wiadomość..." value={text} onChange={handleTextChange}/>
                        <button onClick={handleClick}>Wyślij wiadomość</button>
                    </form>
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