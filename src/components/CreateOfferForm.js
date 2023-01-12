import "../index.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateOfferForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [houseArea, setHouseArea] = useState("");
  const [roofType, setRoofType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  let navigate = useNavigate();
  const routeChange = (id) => {
      let path = `/offerDetails` + "?id="+ id;
      navigate(path);
  }

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://httpbin.org/post", {
        method: "POST",
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          houseArea: houseArea,
          roofType: roofType,
          startDate: startDate,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        //let id = res.formData.id;
        let id = 1;
        routeChange(id);
      } else {
        setMessage("");
        setErrorMessage("ERROR - can't create offer");
      }
    } catch (err) {
      setMessage("");
      setErrorMessage("ERROR - can't create offer");
      console.log(err);
    }
  };

  return (
    <>
      <div className="PageTitle">
        <h1>Create Offer</h1>
      </div>
      <div className="App">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={firstName}
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            value={lastName}
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="number"
            value={houseArea}
            placeholder="House Area"
            onChange={(e) => setHouseArea(e.target.value)}
          />
          <input
            type="text"
            value={roofType}
            placeholder="Roof Type"
            onChange={(e) => setRoofType(e.target.value)}
          />
          <input
            type="text"
            value={startDate}
            placeholder="Start Date"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <button type="submit">Create offer</button>

          <div className="message">{message ? <p>{message}</p> : null}</div>
          <div className="errorMessage">{errorMessage ? <p>{errorMessage}</p> : null}</div>
        </form>
      </div>
    </>
  );
}

export default CreateOfferForm;