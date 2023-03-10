/*import React, { useState, useEffect } from "react";
import "../CSS/ProblemReport.css";
import Navbar4 from "../Component/Navbar";
import Footer from "../Component/Footer";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../Database";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../firebase";




function Addmission() {
  
  //ตัวแปร
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  const [date, setDate] = useState();
  const [misname, SetMisname] = useState();
  const [miscoin, SetMiscoin] = useState();
  const [nummis, SetNummis] = useState();
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file);
  };

  //อัปโหลดภาพ
  const uploadFiles = (file) => {
    if (!file) return;
    const sotrageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
        });
      }
    );
  };

  //เพิ่มข้อมูล
  const add = async (e) => {
    e.preventDefault();

    try {
      const MissionRef = await addDoc(collection(db, "Mission"), {
        Name: misname,
        Coin: miscoin,
        NumOfTime: nummis,
        Date: date,
      });
      alert("Add successfully");
      SetMisname("");
      SetMiscoin("");
      setDate("");
      SetNummis("");
      setImages("");
      navigate("/Problem");
      console.log("doc Id", MissionRef.id);
    } catch (e) {
      console.error("error adding", e);
    }
  };

  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);

  return (
    <div>
      <Navbar4 />
      <div className="BG-1">
        <div className="Container-2">
          <div className="BOX-FORM1">
            <div className="TOPIC-FORM">Add Mission</div>
            <div className="COLUMN1">
              <div className="SUB-TOPIC">ชื่อของภารกิจ</div>
              <input
                type="text"
                placeholder="กรอกชื่อของภารกิจ"
                value={misname}
                onChange={(e) => SetMisname(e.target.value)}
              ></input>
            </div>
            <div className="COLUMN2"></div>
            <div className="COLUMN1">
              <div className="SUB-TOPIC">ภาพภารกิจ</div>
              <div className="form-photo ">
                <input type="file" className="input" />
                <button onClick={formHandler}>Upload</button>
              </div>
            </div>

            <div className="ROW1">
              <div className="SUB-TOPIC">แต้มที่จะได้รับ</div>
              <input
                type="text"
                placeholder="กรอกแต้มที่จะได้รับ (ตัวเลข)"
                value={miscoin}
                onChange={(e) => SetMiscoin(e.target.value)}
              ></input>
              <div className="SUB-TOPIC">จำนวนครั้งที่ต้องทำ</div>
              <input
                type="text"
                placeholder="กรอกจำนวนครั้งที่ต้องทำ (ตัวเลข)"
                value={nummis}
                onChange={(e) => SetNummis(e.target.value)}
              ></input>
            </div>
            <div className="SUB-TOPIC">วันหมดเขต</div>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            ></input>
            <button className="ADD-BUTTON" onClick={add}>
              ADD MISSION
            </button>
          </div>
          <div className="Container-3">
            <div className="BOX-USERNAME"></div>
            <div className="BOX-ShowData">
              <div className="TOPIC-FORM">Mission Management</div>
              <input type="file" className="input" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Addmission;
*/