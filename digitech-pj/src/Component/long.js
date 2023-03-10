
import "../CSS/Dashbord.css";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import Table from 'react-bootstrap/Table';
import Form from "../Component/Form"
import Form2 from "../Component/Form2"
import React, { useState } from "react";

function Dashbord() {

  const [status, setStatus] = useState("1");
  const [num1, setNum1] = useState(0); //plastic
  const [num2, setNum2] = useState(0); //glass
  const [num3, setNum3] = useState(0); //carton

  return (
    <div>
      <Navbar />
      <div className="bg1">
        <div className="cont-column">
          <div className="container-box-row">
            <div className="box-user">
              <img src="/images/icons/contact.png" alt="" />
              <label>ACCOUNT ADMIN : PHATSORN PUTTIPONG</label>
            </div>
            <div className="box-log-out">
              <img src="/images/icons/exit.png" alt="" />
            </div>
            <div className="box-rank"><Table striped bordered hover size="sm" >
              <thead>
                <tr>
                  <th>ลำดับ</th>
                  <th>รหัส</th>
                  <th>ชื่อ-นามสกุล</th>
                  <th>เเต้มสะสม</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>B6335458</td>
                  <td>พุฒิพงศ์  สุภาพูนสวัสดิ์</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>B6320508</td>
                  <td>ภัสสร พุทธิพงษ์</td>
                  <td>90</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>B6333980</td>
                  <td>ฐิติพร  วิมุตติกร</td>
                  <td>80</td>
                </tr>
              </tbody>
            </Table></div>
          </div>
          <div className="box-count-user"></div>
        </div>

        <div className="container-box-row2">
          <div className="box-form">
            <h1>บันทึกข้อมูลขยะรีไซเคิล</h1>
            <select
              id="status"
              name="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="1" disabled>
                --เลือก--
              </option>
              <option value="นักศึกษา">นักศึกษา </option>
              <option value="บุคลากร มทส.">บุคลากร มทส.</option>
            </select>
            <Form2 />

            <div className="count">

            </div>
          </div>
          <div className="box-qr">
            <Form />
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashbord;
