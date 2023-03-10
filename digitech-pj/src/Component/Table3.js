import React from "react";
import Table from 'react-bootstrap/Table';



function Table3() {


    return (

        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>สถานที่ตั้ง</th>
                        <th>ประเภทถังขยะ</th>
                        <th>จำนวนถังขยะ</th>
                        <th>สถานะถังขยะ</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <th><img src="/images/icons/user.png" alt="" /></th>
                        <th>อาคารเรียนรวม1 หน้าห้อง A101</th>
                        <th>ขวดพลาสติก</th>
                        <th>32</th>
                        <th>80%</th>
                    </tr>
                    <tr>
                        <th>002</th>
                        <th>อาคารเรียนรวม1 หน้าห้อง B202</th>
                        <th>ขวดแก้ว</th>
                        <th>20</th>
                        <th>50%</th>
                    </tr>
                    <tr>
                        <th>003</th>
                        <th>อาคารเรียนรวม1 หน้าห้อง C303</th>
                        <th>กระป๋อง</th>
                        <th>28</th>
                        <th>70%</th>
                    </tr>
                    <tr>
                        <th>004</th>
                        <th>อาคารเรียนรวม2 หน้าห้อง A1101</th>
                        <th>ขวดพลาสติก</th>
                        <th>25</th>
                        <th>65%</th>
                    </tr>

                    <tr>
                        <th>005</th>
                        <th>อาคารเรียนรวม2 หน้าห้อง B3101</th>
                        <th>กระป๋อง</th>
                        <th>22</th>
                        <th>55%</th>
                    </tr>
                    <tr>
                        <th>007</th>
                        <th>อาคารบรรณสาร ชั้น1</th>
                        <th>ขวดแก้ว</th>
                        <th>20</th>
                        <th>50%</th>
                    </tr>
                    <tr>
                        <th>008</th>
                        <th>อาคารบรรณสาร ชั้น2</th>
                        <th>กระป๋อง</th>
                        <th>28</th>
                        <th>70%</th>
                    </tr>
                    <tr>
                        <th>009</th>
                        <th>อาคารบรรณสาร ชั้น3</th>
                        <th>ขวดพลาสติก</th>
                        <th>25</th>
                        <th>65%</th>
                    </tr>
                    <tr>
                        <th>010</th>
                        <th>โรงอาหารกาสะลองคำ</th>
                        <th>ขวดแก้ว</th>
                        <th>18</th>
                        <th>40%</th>
                    </tr>






                </tbody>
            </table>
        </div >

    )
}

export default Table3;