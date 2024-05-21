import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import InputMask from "react-input-mask";
import { addContact, updateContact } from "../../redux/contacts/operations";
import css from "./ContactForm.module.css";

const ContactForm = ({ initialValues }) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={initialValues || { id: "", name: "", number: "" }}
      validationSchema={Yup.object({
        name: Yup.string().min(3).max(50).required("Please enter your name"),
        number: Yup.string()
          .matches(/^[0-9-]+$/, "Must be only digits")
          .min(7, "Must be at least 7 characters")
          .required("Number is required"),
      })}
      onSubmit={(values, { resetForm }) => {
        if (values.id) {
          dispatch(
            updateContact({
              id: values.id,
              contact: { name: values.name, number: values.number },
            })
          );
        } else {
          dispatch(addContact({ name: values.name, number: values.number }));
        }
        resetForm();
      }}
    >
      <Form className={css.contactFormUs}>
        <label htmlFor="name" className={css.labelFormUs}>
          Name:
        </label>
        <Field type="text" id="name" name="name" className={css.inpBox} />
        <ErrorMessage name="name" component="div" className={css.err} />

        <label htmlFor="number" className={css.labelFormUs}>
          Number:
        </label>
        <Field name="number">
          {({ field }) => (
            <InputMask
              {...field}
              mask="999-99-99"
              placeholder="123-45-67"
              className={css.inpBox}
            />
          )}
        </Field>
        <ErrorMessage name="number" component="div" className={css.err} />
        <button type="submit" className={css.btnAdd}>
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
