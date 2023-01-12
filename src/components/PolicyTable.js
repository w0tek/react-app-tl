export default function PolicyTable({ tbodyData }) {
    console.log(tbodyData);
    return (
        <table>
            <tbody>
                {tbodyData.map((row, index) => {
                    console.log(row);
                    return <tr key={index}>
                        <td>
                            {
                                row.id
                            }
                        </td>
                        <td>
                            {
                                row.name
                            }
                        </td>
                        <td>
                            {
                                row.username
                            }
                        </td>
                        <td>
                            {
                                row.email
                            }
                        </td>
                    </tr>;
                })}
            </tbody>
        </table>
    );
}