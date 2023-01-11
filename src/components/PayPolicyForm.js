import "../index.css";
import { useState } from "react";

function PayPolicyForm() {
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
          idNumber: idNumber,
          price: price,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setIdNumber("");
        setPrice("");
        setMessage("SUCCESS - policy paid");
        setErrorMessage("");
      } else {
        setMessage("");
        setErrorMessage("ERROR - policy cannot be paid");
      }
    } catch (err) {
      setMessage("");
      setErrorMessage("ERROR - policy cannot be paid");
      console.log(err);
    }
  };

  return (
    <>
      <div className="PageTitle">
        <h1>Pay for policy</h1>
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
            type="number"
            value={price}
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <button type="submit">Pay for policy</button>

          <div className="message">{message ? <p>{message}</p> : null}</div>
          <div className="errorMessage">{errorMessage ? <p>{errorMessage}</p> : null}</div>

        </form>
      </div>
    </>
  );
}

export default PayPolicyForm;