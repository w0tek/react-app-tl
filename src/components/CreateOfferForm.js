import "../index.css";
import { useState } from "react";

function CreateOfferForm() {
  const [productName, setProductName] = useState("");
  const [risk, setRisk] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://httpbin.org/post", {
        method: "POST",
        body: JSON.stringify({
          productName: productName,
          risk: risk,
          idNumber: idNumber,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setProductName("");
        setRisk("");
        setIdNumber("");
        setMessage("SUCCESS - Offer created");
        setErrorMessage("");
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
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={idNumber}
          placeholder="Id number"
          onChange={(e) => setIdNumber(e.target.value)}
        />
        <input
          type="text"
          value={productName}
          placeholder="productName"
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          type="text"
          value={risk}
          placeholder="risk"
          onChange={(e) => setRisk(e.target.value)}
        />

        <button type="submit">Create offer</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
        <div className="errorMessage">{errorMessage ? <p>{errorMessage}</p> : null}</div>

      </form>
    </div>
  );
}

export default CreateOfferForm;