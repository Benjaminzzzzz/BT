import React, { children } from "react";
import { table } from 'react-bootstrap';
import { ref, onValue } from 'firebase/database';



    return(
        <Table >
            <thead>
                <tr>
                    <th>#</th>
                    <th>รหัส</th>
                    <th>ชื่อ-นามสกุล</th>
                    <th>เเต้มสะสม</th>
                </tr>
            </thead>

            <tbody>
                {this.state.tableData.map((row, index) => {
                   return(
                   <tr>
                        <td>{index + 1}</td>
                        <td>{row.id}</td>
                        <td>{row.data.name}</td>
                        <td>{row.data.coin}</td>
                    </tr>                    
                    )
             })}

            </tbody>
        </Table>
        )
    




export default Table5;