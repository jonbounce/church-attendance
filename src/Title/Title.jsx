import React, { useState } from 'react';
import './title.css';

export default function Title() {
    const [month, setMonth] = useState("");
    const [pastorName, setPastorName] = useState("");
    const [churchLocation, setChurchLocation] = useState("");

    return (
        <>
            <div className="title-container">
                <div className="w-50">
                    <span className="title-label"> Month:</span>
                    <select name="Month" onChange={(e) => setMonth(e.target.value)} value={month}>
                        <option value=""> -- Select Month--</option>
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                    </select>
                </div>
                <div className="w-50">
                    <span className="title-label"> Pastor Name:</span>
                    <input value={pastorName} onChange={(e) => setPastorName(e.target.value)} />
                </div>
                <div className="w-50">
                    <span className="title-label">  Church location:</span>
                    <select name="ChurchLocation" onChange={(e) => setChurchLocation(e.target.value)} value={churchLocation}>
                        <option value=""> -- Select a church location--</option>
                        <option value="Houston">Houston</option>
                        <option value="Spring">Spring</option>
                        <option value="Dallas">Dallas</option>
                        <option value="Austin">Austin</option>
                    </select>
                </div>
            </div>
        </>
    )
}