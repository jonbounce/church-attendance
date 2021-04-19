import React, { useReducer, useState } from 'react';
import ChallengeEncounter from '../ChallengeEncounter/challengeEncounter';
import Headerbar from '../HeaderBar/HeaderBar';
import logo from "../logo.jfif";
import TextAreaBox from '../SingleTextArea/singleTextArea';
import SpecialEvents from '../SpecialEvents/specialEvents';
import Title from '../Title/Title';
import WeeklyMeeting from '../WeeklyMeeting/WeeklyMeeting';

const Header = () => (
    <header className="wrapper-header d-flex-center mt-5">
        <div className="app-logo-update">
            <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div style={{ marginLeft: '5%' }}>
            <h3 style={{ textAlign: "center" }}>DEEPER LIFE BIBLE CHURCH</h3> <h3 style={{ textAlign: "center" }}>DEEPER LIFE SOUTHWEST-USA REGIONAL REPORT</h3> <h3 style={{ textAlign: "center" }}> MONTHLY AND WEEKLY ACTIVITY RECORD</h3>
        </div>
    </header>
)

export default function Main() {
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
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useReducer(formReducer, {});
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
    const SubmitButton = () => {
        return (
            <>
                <button className="submit-button">SUBMIT</button>
            </>
        )
    }
    return (
        <>
            <Header />
            <Title />
            <Headerbar label="Weekly Meeting Attendance" />
            <WeeklyMeeting />
            <Headerbar label="Evangelistic Outreach To Non Members And Visitors" />
            <TextAreaBox />
            <Headerbar label="Visitation To Members" />
            <TextAreaBox />
            <Headerbar label="Challenges Encounters" />
            <ChallengeEncounter />
            <Headerbar label="Special Events And Programs" />
            <SpecialEvents />
            <Headerbar label="Testimony/Information" />
            <TextAreaBox />
            <Headerbar label="Other Remarks/Observations" />
            <TextAreaBox />
            <SubmitButton />
        </>
    )
}
