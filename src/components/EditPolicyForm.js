import "../index.css";
import { useState } from "react";

function EditPolicyForm() {
  const [productName, setProductName] = useState("");
  const [risk, setRisk] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [price, setPrice] = useState("");
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
          price: price,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setProductName("");
        setRisk("");
        setIdNumber("");
        setPrice("");
        setMessage("SUCCESS - Policy edited");
        setErrorMessage("");
      } else {
        setMessage("");
        setErrorMessage("ERROR - can't edit policy");
      }
    } catch (err) {
      setMessage("");
      setErrorMessage("ERROR - can't edit policy");
      console.log(err);
    }
  };

  return (
    <>
      <div className="PageTitle">
        <h1>Edit Policy</h1>
      </div>

      <div className="App">
        <form onSubmit={handleSubmit}>
          <input
            type="number"
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
          <input
            type="number"
            value={price}
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <button type="submit">Edit policy</button>

          <div className="message">{message ? <p>{message}</p> : null}</div>
          <div className="errorMessage">{errorMessage ? <p>{errorMessage}</p> : null}</div>
        </form>
      </div>
    </>
  );
}

export default EditPolicyForm;