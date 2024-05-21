import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import css from "./ContactsPage.module.css";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import AnimatedCursor from "react-animated-cursor";
import { selectError, selectLoading } from "../../redux/contacts/selectors";

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <div className={css.containerMainContact}>
      <AnimatedCursor />
      <BackgroundImage />
      <div>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
      </div>
      <div>
        <SearchBox />
        {isLoading && !error && <b>Request is in progress</b>}
        <ContactList />
      </div>
    </div>
  );
};

