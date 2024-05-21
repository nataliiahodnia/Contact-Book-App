import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import {
  selectFilteredContacts,
  selectLoading,
  selectError,
} from "../../redux/contacts/selectors";
import css from "./ContactList.module.css";
import { RevolvingDot } from "react-loader-spinner";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  if (isLoading)
    return (
      <div className={css.loader}>
        <RevolvingDot
          visible={true}
          height="80"
          width="80"
          color="#c2000c"
          ariaLabel="revolving-dot-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );

  if (error) return <p>Error: {error}</p>;

  return (
    <ul className={css.listContacts}>
      {contacts.length > 0 ? (
        contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))
      ) : (
        <p>Contacts unknown</p>
      )}
    </ul>
  );
};

export default ContactList;
