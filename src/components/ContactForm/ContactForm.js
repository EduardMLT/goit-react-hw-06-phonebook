import { Formik, Field } from 'formik';
import { nanoid } from 'nanoid';
import { CardForm, Button } from './ContactForm.styled';

export const ContactForm = ({ addContact }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={(values, actions) => {
        addContact({ ...values, id: nanoid() });
        actions.resetForm();
      }}
    >
      <CardForm>
        <label>
          Name
          <Field
            type="text"
            name="name"
            pattern="^[а-яА-ЯёЁa-zA-Z\s]+$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label>
          Number
          <Field
            type="tel"
            name="number"
            pattern="\+\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <Button type="submit">Add contact</Button>
      </CardForm>
    </Formik>
  );
};
