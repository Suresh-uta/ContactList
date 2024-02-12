import React from "react";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactsList";
import ContactCard from "./ContactCard";


function App() {

  const contacts =[
    {
      id :"1",
      name :"Mahesh",
      email :"mahesh@gmail.com"
    },
    {
      id :"2",
      name :"Suresh",
      email :"suresh@gmail.com"
    },
  ];
  return (
    <div className="ui container" >
      <Header/>
      <AddContact/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
