import React from "react";
import Table from 'react-bootstrap/Table';



function Table1() {

    
    return (
        <div>
            <Table class="table-bordered" id="table2" hover size="sm" >
                <thead>
                    <tr>
                        <th>ลำดับ</th>
                        <th>รหัส</th>
                        <th>ชื่อ-นามสกุล</th>
                        <th>เเต้มสะสม</th>
                    </tr>
                    <tr>
                        <th>1</th>
                        <th>B6335458</th>
                        <th>พุฒิพงศ์  สุภาพูนสวัสดิ์</th>
                        <th>100</th>
                    </tr>
                    <tr>
                        <th>2</th>
                        <th>B6320508</th>
                        <th>ภัสสร	พุทธิพงษ์</th>
                        <th>90</th>
                    </tr>
                    <tr>
                        <th>3</th>
                        <th>B633980</th>
                        <th>ฐิติพร  วิมุตติกร</th>
                        <th>89</th>
                    </tr>
                </thead>
                <tbody>
                  
                </tbody>
            </Table>
        </div>
        
    )
}

export default Table1;