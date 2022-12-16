// import styled from '@emotion/styled';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { nanoid } from 'nanoid';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Required'),

  number: Yup.mixed().test({
    name: 'number',
    message:
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
    test: value => {
      return /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/.test(
        value
      );
    },
  }),
});

const FormAddContact = props => {
  const { addContactOnSubmit } = props;
  return (
    <div>
      <Formik
        initialValues={{
          name: ``,
          number: ``,
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          addContactOnSubmit({
            name: values.name.trim(),
            id: `${nanoid()}`,
            number: values.number.trim(),
          });
          actions.setSubmitting(false);
          actions.resetForm();
        }}
      >
        {props => (
          <Form>
            <label htmlFor="name">Name</label>
            <Field type="text" name="name" />
            {props.errors.name && <div id="feedback">{props.errors.name}</div>}
            <label htmlFor="number">Number</label>
            <Field type="tel" name="number" />
            {props.errors.number && (
              <div id="feedback">{props.errors.number}</div>
            )}

            <button type="submit">Add contact</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormAddContact;
