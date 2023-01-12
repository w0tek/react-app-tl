import React, { useEffect, useState } from "react"
import Table from "./Table"
import { useNavigate } from "react-router-dom";


const OfferOverview = () => {
    const [data, setData] = useState([])


    const fetchData = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setData(data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])


    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/createOffer`;
        navigate(path);
    }

    return (
        <>
            <div className="PageTitle">
                <h1>Offer Overview</h1>
            </div>
            <div className="ButtonCenter">
                <button onClick={fetchData}>Refresh offers</button>
                <button onClick={routeChange}>Create offer</button>
            </div>
            <div className="App">
                <div>
                    {<Table tbodyData={data} />}
                </div>
            </div>
        </>

    )
}

export default OfferOverview
