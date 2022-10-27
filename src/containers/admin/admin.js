import React from 'react';
import './admin.css';
import axios from "../../axios.js";
import { useState,useEffect } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useNavigate,
    useParams
  } from "react-router-dom";
import Select from 'react-select';

  

  const options1 = [
    { value: 60000, label: '1 Min' },
    { value: 300000, label: '5 Min' },
    { value: 900000, label: '15 Min' },
    { value: 1800000, label: '30 Min' },
  ];

  const options2 = [
    { value: 180000, label: '3 Min' },
    { value: 1800000, label: '30 Min' },
    { value: 3600000, label: '1 Hour' },
    { value: 86400000, label: '3 Hours' },
    { value: 21600000, label: '6 Hours' },
    { value: 43200000, label: '12 Hours' },
  ];

  const options3 = [
    { value: 300000, label: '5 Min' },
    { value: 86400000, label: '1 Day' },
    { value: 172800000, label: '2 Days' },
    { value: 259200000, label: '3 Days' },
  ];

  function Admin () {
    const [intervals, setIntervals] = useState({});
    

    useEffect(() => {
        axios.get('/settings')
            .then(res => {
                console.log(res.data);
                setIntervals(res.data);
            })
    },[])

    const updateSchedule = () => {
        axios.post('/settings', intervals)
              .then(res => console.log(res.body))
              .then(window.alert("Email Schedule changed successfully."))
    }

    return (
        <div className='container'>
            <h1>Admin Panel</h1>
            <h5>Email Schedule for Abandoned Checkouts:</h5>
            <table>
                  <tr>
                    <td>1st Email:</td>
                    <td>
                    {intervals.interval1 ? <Select
                          name="Int1"
                          value={options1.value}
                          options={options1}
                          defaultValue={options1.find(e => e.value === intervals.interval1)}
                          onChange={(e)=> setIntervals((prev) => {
                                          return {
                                            ...prev,
                                            interval1: e.value,
                                          };
                                        })
                                    }
                        />: ""}
                    </td>
                  </tr>
                  <tr>
                    <td>2nd Email:</td>
                    <td>
                    {intervals.interval1 ? <Select
                          name="Int2"
                          value={options2.value}
                          options={options2}
                          defaultValue={options2.find(e => e.value === intervals.interval2)}
                          onChange={(e)=> setIntervals((prev) => {
                                          return {
                                            ...prev,
                                            interval2: e.value,
                                          };
                                        })
                                    }
                        />:""}
                    </td>
                  </tr>
                  <tr>
                    <td>3rd Email:</td>
                    <td>
                    {intervals.interval1 ? <Select
                          name="Int3"
                          value={options3.value}
                          options={options3}
                          defaultValue={options3.find(e => e.value === intervals.interval3)}
                          onChange={(e)=> setIntervals((prev) => {
                                          return {
                                            ...prev,
                                            interval3: e.value,
                                          };
                                        })
                                    }
                        />:""}
                    </td>
                  </tr>
            </table>
            <div className='actionItems'>
                <button className='button' onClick={updateSchedule}>Save Changes</button>
            </div>
        </div>
    )
  }

  export default Admin;