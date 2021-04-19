import React, { useReducer, useState } from 'react';
import logo from "./logo.jfif";
import ReactTable from "react-table";
import { Button, Form, Col, Row, Table } from 'react-bootstrap'
import Select from 'react-select'


import moment from 'moment'
import './App.scss';

import "./index.css";



const formReducer = (state, event) => {
  if (event.reset) {
    return {
      ChurchLocation: '',
      Attendance: 0,
      Pastorname: '',
    }
  }
  return {
    ...state,
    [event.name]: event.value
  }
}

function App() {

  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setFormData({
        reset: true
      })
    }, 3000);
  }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }

  return (



    <div className="wrapper">
      <header className="wrapper-header d-flex">
        <div className="app-logo-update">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div style={{ marginLeft: '5%' }}>
          <h1 style={{ textAlign: "center" }}>DEEPER LIFE BIBLE CHURCH</h1> <h1 style={{ textAlign: "center" }}>DEEPER LIFE SOUTHWEST-USA REGIONAL REPORT</h1> <h1 style={{ textAlign: "center" }}> MONTHLY AND WEEKLY ACTIVITY RECORD</h1>
        </div>
        {submitting &&
          <div>Submtting Form...</div>
        }
      </header>
      <form onSubmit={handleSubmit}>
        <fieldset disabled={submitting}>
          <label>
            <p>Week</p>
            <select name="Week" onChange={handleChange} value={formData.Week || ''}>
              <option value=""> -- Select week--</option>
              <option value="Week One">Week One</option>
              <option value="Week Two">Week Two</option>
              <option value="Week Three">Week Three</option>
              <option value="Week Four">Week Four</option>
            </select>
          </label>

          <label>
            <p>Month</p>
            <select name="Month" onChange={handleChange} value={formData.Month || ''}>
              <option value=""> -- Select Month--</option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
            </select>
          </label>
        </fieldset>
        <fieldset disabled={submitting}>
          <label>
            <p>Pastor Name</p>
            <input name="PastorName" onChange={handleChange} value={formData.PastorName || ''} />
          </label>
        </fieldset>
        <fieldset disabled={submitting}>
          <label>
            <p>Church Location</p>
            <select name="ChurchLocation" onChange={handleChange} value={formData.ChurchLocation || ''}>
              <option value=""> -- Select a church location--</option>
              <option value="Houston">Houston</option>
              <option value="Spring">Spring</option>
              <option value="Dallas">Dallas</option>
              <option value="Austin">Austin</option>
            </select>
          </label>
          <label>
            <p>Weekly Service</p>
            <select name="WeeklyService" onChange={handleChange} value={formData.WeeklyService || ''}>
              <option value=""> -- Select a day of worship--</option>
              <option value="Sunday Service">Sunday Worship Service</option>
              <option value="Bible study">Bible Study</option>
              <option value="Revival Hour">Revival Hour</option>
              <option value="Workers meeting">Workers Meeting</option>
            </select>
          </label>

          <label>
            <p>Attendance</p><label><p>Male</p></label>
            <input type="number" name="Attendance" onChange={handleChange} step="1" value={formData.Attendance || ''} />
          </label>

        </fieldset>

        <button type="submit" disabled={submitting}>Submit</button>
      </form>
    </div>
  )
}

export default App;
