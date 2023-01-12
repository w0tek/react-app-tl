import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";


export default function Table({ tbodyData }) {
    let navigate = useNavigate();
    const routeToEditOffer = (e) => {
        const id = e.target.getAttribute('data-item');
        let path = `/editOffer?id=` + id;
        navigate(path);
    }
    return (
        <table>
            <tbody>
                {tbodyData.map((row, index) => {
                    return <tr key={index} >
                        <td>
                            {
                                row.firstName
                            }
                        </td>
                        <td>
                            {
                                row.lastName
                            }
                        </td>
                        <td>
                            {
                                row.startDate
                            }
                        </td>
                        <td>
                            {
                                row.price
                            }
                        </td>
                        <td>
                            <button data-item={row.id} onClick={routeToEditOffer}>Edit offer</button>
                        </td>
                    </tr>;
                })}
            </tbody>
        </table>
    );
}