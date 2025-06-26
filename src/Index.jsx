// import React from 'react'
// import './Style.css'
// function UserCard({ name, }) {
//   return <p>my name is {name} </p>;
// }
// function Sunday({day, }){
//  return <p>Sadly { day } is a working day</p>
// }
// function Index() {
//   return (
//     <>
//     <div class=" btn">Hi hello</div>
//     <h1>Hello</h1>
//     <UserCard name="Harsita" />
//     <UserCard name="Hello" />
//     <Sunday day="Sunday" />
//     </>
//   )
// }

// export default Index
/*import React from 'react';
import "./index.css"



function UserCard({name, age}){
  return  <p>My name is {name} and age is{age}</p>;
} */
import React, { useState } from 'react';

function Index() {
  const [name, setName] = useState('');
  const [nameList, setNameList] = useState([]); // No localStorage

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;
    setNameList(prev => [...prev, trimmed]);
    setName('');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', maxWidth: '400px', margin: 'auto' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
          required
          style={{ flex: 1 }}
        />
        <button type="submit" style={{ padding: '5px 10px' }}>Submit</button>
      </form>

      <h3 style={{ marginTop: '20px' }}> Names:</h3>
      <ul>
        {nameList.map((n, i) => (
          <li key={i}>{i + 1}. {n}</li>
        ))}
      </ul>
    </div>
  );
}

export default Index;
