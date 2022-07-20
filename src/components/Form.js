import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData, setSubmittedData] = useState([]);
  
    
  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  const [setErrors, error] = useState([]);

  function handleSubmits(event) {
    event.preventDefault();
    if (firstName) {
      const dataForm = { firstName: firstName, lastName: lastName };
      const dataArray = [...submittedData, dataForm];
      setSubmittedData(dataArray);
      setFirstName("");
      setLastName("");
      setErrors([]);
    } else {
      setErrors(["First name is required!"]);
    }
  }
  
    const listOfSubmission = submittedData.map((data, index) => {
      return (
        <div key={index}>
          {data.firstName} {data.lastName}
        </div>
      );
    });

  return (
    <div>
    <form onSubmit={handleSubmits}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
 {}
  {error.length > 0
   ? error.map((error, index) => (
       <p key={index} style={{ color: "red" }}>
         {error}
       </p>
     ))
   : null}
 <h3>Submissions</h3>
  {listOfSubmission}
</div>
  );
}

export default Form;
