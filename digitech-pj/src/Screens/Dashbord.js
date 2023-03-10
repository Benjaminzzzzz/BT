
import "../CSS/Dashbord.css";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import Table from "../Component/Table"
import Pie from "../Component/Pie"
import Bar from "../Component/Bar"
import React, { useState, useEffect } from "react";
import { VscCircleFilled } from "react-icons/vsc";

import { db } from "../Database/firebase";
//import { qrcodeGenerator } from "react-easy-qrcode-generator";
import QRCode from "qrcode";
import { uid } from "uid";
import { ref, set, onValue } from "firebase/database";


function Dashbord() {

  useEffect(() => {
    async function getdata() {
      const uuid = uid();

      const dbRef = ref(db, '/');
      onValue(dbRef, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          const childKey = childSnapshot.key;
          console.log(childSnapshot.val());
          // ...
        });
      }, {
        onlyOnce: true
      });

    }
    getdata();
  }, []);

  const [state, setState] = useState("1");
  return (
    <div>
      <Navbar />

      <div className="bg1">
        <div className="Container">
          <div className="con">
            <div className="con2">
              <div className="box1">
                <img src="/images/icons/contact.png" alt="" />
                <label>
                  &nbsp;
                  &nbsp;ACCOUNT ADMIN : PHATSORN P.</label>
              </div>
              <div className="box11">
                <div className="box11-log-out img">
                  <img src="/images/icons/exit.png" alt="" />
                </div>
              </div>
            </div>

            <div className="con">
              <div className="con2">
                <div className="box111">
                  <div className="box-blue3">
                    <label>จำนวนผู้ใช้งาน (นักศึกษา)</label>
                  </div>
                  <label>1590</label>
                </div><div className="box111">
                  <div className="box-blue3">
                    <label>จำนวนผู้ใช้งาน (บุคลากร)</label>
                  </div>
                  <label>1590</label>
                </div>
              </div>

            </div>
            <div className="con">
              <div className="con2"></div>
              <div className="box3">
                <div className="box-blue4"><label>ปริมาณของขยะ (พลาสติก) สัปดาห์ที่2</label>
                  <select
                    id="status"
                    name="status"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  >
                    <option value="1" disabled>
                      --เลือก--
                    </option>
                    <option value="สัปดาห์ที่1">สัปดาห์ที่1 </option>
                    <option value="สัปดาห์ที่2">สัปดาห์ที่2</option>
                    <option value="สัปดาห์ที่3">สัปดาห์ที่3 </option>
                    <option value="สัปดาห์ที่4">สัปดาห์ที่4</option>
                  </select> </div>
                <Bar />

              </div> </div>

          </div>
          <div className="con">
            <div className="con2"></div>
            <div className="box2">
              <div className="box-blue4">
                <label>ลำดับคะแนนสะสมของ ผู้ใช้งาน</label>
              </div>
              <Table />
            </div>


            <div className="con">
              <div className="con2"></div>
              <div className="box33">
                <div className="box-blue4">
                  <label>ปริมาณของขยะแต่ละชนิดของเดือน ตุลาคม</label>
                </div>
                <Pie />    &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                <label> <img src="/images/black-circle (2).png" alt="" /> &nbsp;ขวดพลาสติก</label>
                <label> <img src="/images/black-circle (3).png" alt="" /> &nbsp;กระป๋อง</label>
                <label> <img src="/images/black-circle (4).png" alt="" /> &nbsp;ขวดเเก้ว</label>



              </div>
            </div>
          </div>
        </div>
      </div><Footer />
    </div>

  );
}

export default Dashbord;
