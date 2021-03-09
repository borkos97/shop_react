import React from 'react';
import { Formik } from 'formik';

const ContactForm = () => {
    return (
        <div>
            <Formik
                initialValues={{name: '', email: '', message: ''}}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Pole jest wymagane';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Podany adres jest niepoprawny';
                    }
                    if (!values.name) {
                        errors.name = 'Pole jest wymagane';
                    }
                    if (!values.message) {
                        errors.message = 'Nie można przesłać formularza bez uzupełnienia pola wiadomości';
                    }
                    return errors;
                }}
                onSubmit={(values, {setSubmitting, resetForm}) => {
                    resetForm({})
                    setSubmitting(false);
                    alert("Formularz został przesłany.")
                }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                  }) => (
                    <form onSubmit={handleSubmit}>
                        {errors.name && touched.name && errors.name}
                        <input
                            type="name"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            placeholder={"Twoje imie..."}
                        />
                        {errors.email && touched.email && errors.email}
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder={"Email..."}
                        />
                        {errors.message && touched.message && errors.message}
                        <textarea
                            name="message"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.message}
                            placeholder={"Twoja wiadomość..."}
                        />
                        <button type="submit" disabled={isSubmitting}>
                            Wyślij wiadomość
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default ContactForm;