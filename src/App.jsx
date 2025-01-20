import s from './App.module.css'
//import contacts from './contacts.json'
import ContactForm from "./components/ContactForm/ContactForm"
import SearchBox from "./components/SearchBox/SearchBox"
import ContactList from "./components/ContactList/ContactList"



//import { useEffect, useState } from 'react'

const App = () => {


  /* 
  const [numbers, setNumbers] = useState(() => {
    const savedContact = window.localStorage.getItem("saved-contacts");
    if (savedContact !== null) {
      return JSON.parse(savedContact);
    }
    return contacts;
  });

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(numbers));
  }, [numbers]);

  



  
  */


  return (
    <div className={s.contanier}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  )


}

export default App
