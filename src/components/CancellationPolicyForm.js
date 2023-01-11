import "../index.css";
import { useState } from "react";

function CancellationPolicyForm() {
  const [idNumber, setIdNumber] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://httpbin.org/post", {
        method: "POST",
        body: JSON.stringify({
          idNumber: idNumber,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setIdNumber("");
        setMessage("SUCCESS - Policy canceled");
        setErrorMessage("");
      } else {
        setMessage("");
        setErrorMessage("ERROR - can't cancel policy");
      }
    } catch (err) {
        setMessage("");
      setErrorMessage("ERROR - can't cancel policy");
      console.log(err);
    }
  };

  return (
    <div className="App">
      <div>
        <h1>Cancellation policy</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={idNumber}
          placeholder="Id number"
          onChange={(e) => setIdNumber(e.target.value)}
        />
       
        <button type="submit">Cancellation policy</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
        <div className="errorMessage">{errorMessage ? <p>{errorMessage}</p> : null}</div>

      </form>
    </div>
  );
}

export default CancellationPolicyForm;