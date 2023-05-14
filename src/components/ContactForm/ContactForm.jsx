import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selector';
import { Formik, Field, ErrorMessage } from 'formik';
import { Form, Label, Button } from './ContactForm.styled';
import { ContactSchema, phoneNumberMask } from 'components/Utils/Validate';
import MaskedInput from 'react-text-mask';
import toast from 'react-hot-toast';

export const ContactForm = () => {
  const contact = useSelector(selectContacts);
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={ContactSchema}
      onSubmit={(values, action) => {
        const duplicateName = contact.find(
          ({ name }) => name.toLowerCase() === values.name.toLowerCase()
        );
        return duplicateName
          ? toast(`${values.name} is already in contacts.`, { icon: '⚠️' })
          : (dispatch(addContact(values)),
            toast.success(`${values.name} added to contacts.`),
            action.resetForm());
      }}
    >
      <Form>
        <Label>
          Name*
          <Field
            type="text"
            name="name"
            as="input"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
        </Label>
        <ErrorMessage name="name" component={'span'} />
        <Label>
          Number*
          <Field
            type="tel"
            name="number"
            as="input"
            component={({ field }) => (
              <MaskedInput
                {...field}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="The phone number must contain 7 digits"
                mask={phoneNumberMask}
              />
            )}
          />
        </Label>
        <ErrorMessage name="number" component={'span'} />
        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};
