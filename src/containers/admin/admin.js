import React from 'react';
import './admin.css';
import axios from "../../axios.js";
import { useState,useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Select from 'react-select';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useNavigate,
    useParams
  } from "react-router-dom";
import { render } from '@testing-library/react';

  

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
    const [mails, setMails]= useState([]);
    const [sent, setSent] = useState([]);
    const [upcoming, setUpcoming] = useState([]);

    useEffect(() => {
        axios.get('/settings')
            .then(res => {
                console.log(res.data);
                setIntervals(res.data);
            });

        axios.get('/settings/getAbandoned')
              .then(res => {
                setMails(res.data);
                res.data.forEach( abandoned => {
                  var curr = new Date();
                  // if(abandoned.mail1 < curr)
                  var temp = abandoned.checkout_id;
                  console.log(temp);
                  if(abandoned.checkout_id % 2){
                    sent.push(temp);
                    console.log("Sent");
                  } else {
                    upcoming.push(temp);
                    console.log("upcoming");
                  }

                })
              });
        
    },[])

    const updateSchedule = () => {
        axios.post('/settings', intervals)
              .then(res => console.log(res.body))
              .then(window.alert("Email Schedule changed successfully."))
    }

    return (
        <div className='admin-container'>
            <Alert size="sm" variant="secondary" style={{borderRadius: 0}}>
              <h3>Admin Panel</h3>
            </Alert>
            <div style={{margin: '2rem' }}>
            <Card style={{ width: '30%', margin: '2rem' }}>
              <Card.Header>Email Schedule for Abandoned Checkouts:</Card.Header>
                <Card.Body>
                    <Table striped bordered hover size="sm">
                    <tbody>
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
                      </tbody>
                    </Table>

                    <Button variant="light" onClick={updateSchedule}>Save Changes</Button>
                </Card.Body>
            </Card>

            <Tabs
                defaultActiveKey="sent"
                id="mails"
                className="mb-3"
              >
                <Tab eventKey="sent" title="Sent mails">
                    <Table striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th>Customer</th>
                        <th>Checkout Id</th>
                        <th>Cart Total Price</th>
                        <th>Email</th>
                        <th>Sent Date</th>
                      </tr>
                    </thead>

                    <tbody>

                      {mails.map(mail => {
                        return ( [mail.mail1, mail.mail2, mail.mail3].map(a => {
                          console.log(a);
                          if(1){
                            return <tr>
                                      <td>
                                        {mail.customer.first_name}
                                      </td>

                                      <td>
                                        {mail.checkout_id}
                                      </td>

                                      <td>
                                        {mail.current_total_price}
                                      </td>

                                      <td>
                                        {mail.contact_email}
                                      </td>

                                      <td>
                                        {a}
                                      </td>
                                </tr>
                          }
                        })
                        )
                      })}

                    </tbody>
                  </Table>
                </Tab>


                <Tab eventKey="upcoming" title="Scheduled Mails">
                    <Table striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th>Customer</th>
                        <th>Checkout Id</th>
                        <th>Cart Total Price</th>
                        <th>Email</th>
                        <th>Scheduled</th>
                      </tr>
                    </thead>

                    <tbody>

                      {mails.map(mail => {
                        return ( [mail.mail1, mail.mail2, mail.mail3].map(a => {
                          console.log(a);
                          if(a){
                            return <tr>
                                      <td>
                                        {mail.customer.first_name}
                                      </td>

                                      <td>
                                        {mail.checkout_id}
                                      </td>

                                      <td>
                                        {mail.current_total_price}
                                      </td>

                                      <td>
                                        {mail.contact_email}
                                      </td>

                                      <td>
                                        {a}
                                      </td>
                                </tr>
                          }
                        })
                        )
                      })}

                    </tbody>
                  </Table>
                </Tab>
            </Tabs>
            </div>
            <hr/>

        </div>
    )
  }

  export default Admin;