/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "../CSS/Record.css";
import Navbar2 from "../Component/Navbar2";
import Footer from "../Component/Footer";
//import { collection, addDoc } from "firebase/firestore";
import { db } from "../Database/firebase";
//import { qrcodeGenerator } from "react-easy-qrcode-generator";
import QRCode from "qrcode";
import { uid } from "uid";
import { ref, set } from "firebase/database";

function DataRecord() {
  const [name, setName] = useState("");
  const [id, setID] = useState("");
  const [status, setStatus] = useState("1");
  const [num1, setNum1] = useState(0); //plastic
  const [num2, setNum2] = useState(0); //glass
  const [num3, setNum3] = useState(0); //carton
  const [sum, setSum] = useState(0);
  const [coin, setCoin] = useState(0);
  const [qr, setQr] = useState("");

  /*const adddata = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "dataRecord"), {
        id: id,
        name: name,
        status: status,
        plastic: num1,
        glass: num2,
        carton: num3,
        count: sum,
        coin: coin,
      });
      alert("save successfully");
      setNum1("0");
      setNum2("0");
      setNum3("0");
      setSum("0");
      setCoin("0");
      setName("");
      setStatus("");
      setID("");
      console.log("doc Id", docRef.id);
    } catch (e) {
      console.error("error adding", e);
    }
  };*/

  

  //function:increase
  let incNum1 = () => {
    if (num1 < 100) {
      setNum1(Number(num1) + 1);
    }
  };
  let incNum2 = () => {
    if (num2 < 100) {
      setNum2(Number(num2) + 1);
    }
  };
  let incNum3 = () => {
    if (num3 < 100) {
      setNum3(Number(num3) + 1);
    }
  };

  //function:decrease
  let decNum1 = () => {
    if (num1 > 0) {
      setNum1(num1 - 1);
    }
  };
  let decNum2 = () => {
    if (num2 > 0) {
      setNum2(num2 - 1);
    }
  };
  let decNum3 = () => {
    if (num3 > 0) {
      setNum3(num3 - 1);
    }
  };

  //function:calculate
  let Calculate = () => {
    setSum(Number(num1) + Number(num2) + Number(num3));
    setCoin(Number(num1) * 2 + Number(num2) + Number(num3));
  };

  //function:reset
  let Reset = () => {
    setNum1("0");
    setNum2("0");
    setNum3("0");
    setSum("0");
    setCoin("0");
  };



//function:save Data
  const GenerateQRCode = () => {
    const uuid = uid();
		set(ref(db,`/${uuid}`), {
			id,
      name,
      status,
      num1,
      num2,
      num3,
      sum,
      coin
		});
    QRCode.toDataURL(
      uuid,
      {
        width: 800,
        margin: 2,
        color: {
          dark: "#335383FF",
          light: "#EEEEEEFF",
        },
      },
      (err, url) => {
        if (err) return console.error(err);

        console.log(url);
        setQr(url);
      }
    );
  };
  let ResetQR = () => {
    setQr("");
  };

  return (
    <div>
      <Navbar2 />
      <div className="BG-2">
        <div className="Container-2">
          <div className="BOX-FORM">
            <div className="TOPIC-FORM">ฟอร์มบันทึกข้อมูลขยะรีไซเคิล</div>
            <div className="INPUT-FROM">
              <h1>ข้อมูลผู้ทิ้งขยะรีไซเคิล</h1>
              <label>รหัสประจำตัว</label>
              <input
                type="id"
                value={id}
                onChange={(e) => setID(e.target.value)}
              />
              <label>ชื่อ-นามสกุล</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label>สถานะผู้ใช้งาน</label>
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
              <h1>ข้อมูลขยะรีไซเคิล</h1>
              <label>จำนวนขวดพลาสติก</label>
              <button className="de" onClick={decNum1}>
                -
              </button>
              <input
                type="number"
                min="0"
                max="100"
                step="1"
                value={num1}
                onChange={(e) => {
                  setNum1(e.target.value);
                }}
              />
              <button className="in" onClick={incNum1}>
                +
              </button>
              <br />
              <label>จำนวนขวดแก้ว</label>

              <button className="de2" onClick={decNum2}>
                -
              </button>
              <input
                type="number"
                min="0"
                max="100"
                step="1"
                value={num2}
                onChange={(e) => {
                  setNum2(e.target.value);
                }}
              />
              <button className="in" onClick={incNum2}>
                +
              </button>
              <br />
              <label>จำนวนกล่องนม</label>
              <button className="de2" onClick={decNum3}>
                -
              </button>
              <input
                type="number"
                min="0"
                max="100"
                value={num3}
                onChange={(e) => {
                  setNum3(e.target.value);
                }}
              />
              <button className="in" onClick={incNum3}>
                +
              </button>
              <br />
              <button className="cal" onClick={Calculate}>
                คำนวณ
              </button>
              <button className="reset" onClick={Reset}>
                รีเซต
              </button>
              <br />
              <div className="Line"></div>
              <label>จำนวนขยะทั้งหมด</label>
              <input
                type="number"
                min="0"
                max="100"
                step="1"
                value={sum}
                onChange={(e) => {
                  setSum(e.target.value);
                }}
              />
              <label type="text-down">ชิ้น</label>
              <label>เท่ากับ</label>
              <input
                type="number"
                min="0"
                max="100"
                value={coin}
                onChange={(e) => {
                  setCoin(e.target.value);
                }}
              />
              <label>CouldCoin</label>
              <br />
              <button className="submit" onClick={GenerateQRCode}>
                Gen
              </button>
            </div>
          </div>
          <div className="BOX-QRCODE">
            <div className="TOPIC-QRCODE">สแกน QR CODE</div>

            {qr && (
              <>
                <img src={qr} /><br/>
                <button className="RESET-QR" onClick={ResetQR}>reset</button>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DataRecord;