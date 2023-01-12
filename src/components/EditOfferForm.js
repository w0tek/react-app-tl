import "../index.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import mockOffer1 from '../mocks/getOffer1.json';
import mockOffer2 from '../mocks/getOffer2.json';
import mockOffer3 from '../mocks/getOffer3.json';
import mockOffer4 from '../mocks/getOffer4.json';

function EditOfferForm() {
  const [id, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [houseArea, setHouseArea] = useState("");
  const [roofType, setRoofType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const location = useLocation()
  const params = new URLSearchParams(location.search)

  const fillMockData = () => {
    console.log("Fill mock data");
    var id = params.get("id");
    var data = mockOffer1;
    console.log("id = " + id)
    switch (""+id) {
      case "1":
        data = mockOffer1;
        break;
      case "2":
        data = mockOffer2;
        break;
      case "3":
        data = mockOffer3;
        break;
      case "4":
        data = mockOffer4;
        break;
      default:
        data = mockOffer1;
        break;
    }
    setId(data.id);
    setFirstName(data.firstName);
    setLastName(data.lastName);
    setHouseArea(data.houseArea);
    setRoofType(data.roofType);
    setStartDate(data.startDate);
  }

  const fetchData = () => {
    try {
      fetch("https://jsonplaceholder.typicode.com/todos/1" + "/" + params.get("id"))
      .then(response => {
        return response.json()
      })
      .then(data => {
        setId(data.id);
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setHouseArea(data.houseArea);
        setRoofType(data.roofType);
        setStartDate(data.startDate);
      })
    } catch (err) {
      setMessage("");
      setErrorMessage("ERROR - can't edit offer");
      console.log(err);
    }


    // mock data
    fillMockData();
  }

  useEffect(() => {
    fetchData();
  }, [])

  let handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res = await fetch("https://httpbin.org/post", {
        method: "POST",
        body: JSON.stringify({
          id: id,
          firstName: firstName,
          lastName: lastName,
          houseArea: houseArea,
          roofType: roofType,
          startDate: startDate,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setId("");
        setFirstName("");
        setLastName("");
        setHouseArea("");
        setRoofType("");
        setStartDate("");
        setMessage("SUCCESS - Offer edited");
        setErrorMessage("");
      } else {
        setMessage("");
        setErrorMessage("ERROR - can't edit offer");
      }
    } catch (err) {
      setMessage("");
      setErrorMessage("ERROR - can't edit offer");
      console.log(err);
    }
  };

  return (
    <>
      <div className="PageTitle">
        <h1>Edit Offer</h1>
      </div>

      <div className="App">
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            disabled
            value={id}
            placeholder="Id number"
            onChange={(e) => setId(e.target.value)}
          />
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
          <button type="submit">Edit offer</button>

          <div className="message">{message ? <p>{message}</p> : null}</div>
          <div className="errorMessage">{errorMessage ? <p>{errorMessage}</p> : null}</div>
        </form>
      </div>
    </>
  );
}

export default EditOfferForm;