
import "../CSS/Statistic.css";
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
import Table3 from "../Component/Table3";
import Bar2 from "../Component/Bar2"

function Statistic() {

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


  


  return (
    <div>
      <Navbar />

      <div className="bg3">
        <div className="Container3">

          <div className="con3">
            <div className="con23">
           
              <div className="box13">
                <img src="/images/icons/contact.png" alt="" />
                <label>
                  &nbsp;
                  &nbsp;ACCOUNT ADMIN : PHATSORN P.</label>
              </div>

                  <div className="box113">
                    <div className="box113-log-out img">
                      <img src="/images/icons/exit.png" alt="" />
                      
                    </div>
             </div>
                                   
           
                 <div className="con3">
                <div className="con23">
                  <div className="box23"><div className="box-blue6">
                    <label>ปริมาณขยะรีไซเคิลวันนี้</label>
                  
                    </div>  <Bar2/>
                    </div>
                </div>
                <div className="box24">
                <div className="box-blue6"><label>ปริมาณขยะรีไซเคิลที่ถูกทิ้ง (ชิ้น)</label></div>
                <img src="/images/recycle-bin.png" alt="" />
                  <label>520 ชิ้น</label></div></div>
            </div>
          </div>
        </div>

         <div className="con3">
                <div className="con23">
         <div className="box5">
          <div className="box-blue5">
                  <label>สถานะถังขยะทั้งหมด</label>
              </div>
   <Table3/>
         </div>
      </div>
      </div>
      </div><Footer />
    </div>


  );
}

export default Statistic;
