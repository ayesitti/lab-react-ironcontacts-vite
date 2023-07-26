import React, {useState} from "react";
import "./App.css";
import contactsJson from "./contacts.json";

const firstFiveContacts = contactsJson.slice(0, 5);
// console.log(contacts);

// function contactList() {
//   const [contacts, setContacts] = useState(firstFiveContacts);
// }

function App() {
  const [contacts, setContacts] = useState(firstFiveContacts);

  function handleAddContact() {
    const randomContact =
      contactsJson[Math.floor(Math.random() * contactsJson.length)];
    // const copy = [...contacts]
    // copy.push(randomContact)

    setContacts([...contacts, randomContact]);
  }
  function handleSortName() {
    const copy = [...contacts];
    copy.sort((a, b) => a.name.localeCompare(b.name));
    setContacts(copy);
  }
  function handleSortPopularity() {
    const copy = [...contacts];
    copy.sort((a, b) => b.popularity - a.popularity);
    setContacts(copy);
  }
  function handleDelete(id) {
    const newContact = contacts.filter((contact) => contact.id !== id);
    setContacts(newContact);
  }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={handleAddContact}>Add Random Contact</button>
      <button onClick={handleSortName}> Sort by name </button>
      <button onClick={handleSortPopularity}>Sort by popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture </th>
            <th>Name </th>
            <th>Popularity </th>
            <th>Won Oscar </th>
            <th>Won Emmy </th>
            <th> Actions </th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contactsObject) => {
            return (
              <tr key={contactsObject.id}>
                <td>
                  <img
                    src={contactsObject.pictureUrl}
                    style={{ width: "80px" }}
                  />
                </td>
                <td> {contactsObject.name} </td>
                <td> {contactsObject.popularity}</td>
                <td>{contactsObject.wonOscar ? "🏆" : ""}</td>
                <td>{contactsObject.wonEmmy ? "🏆" : ""}</td>
                <td>
                  {" "}
                  <button onClick={() => handleDelete(contactsObject.id)}>
                    Delete
                  </button>{" "}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
