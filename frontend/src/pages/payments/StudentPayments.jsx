import React, { useState, useEffect } from 'react';
import Wrapper from '../../components/Wrapper';
import Cookies from "js-cookie"
import Dayjs from 'dayjs'
import { BACKEND_URL } from '../../services/constants';


const StudentPayments = () => {
    const [studentPayments, setStudentPayments] = useState([])
    
    useEffect(() => {
        const getStudentPayments = async() => {
            try {
                const response = await fetch(`${BACKEND_URL}/payments/subscription-payments/`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${Cookies.get('token')}`
                    }
                })
                const data = await response.json()
                console.log(data)
                setStudentPayments(data)
            } catch (error) {
                console.log(error)
            }
        }
        getStudentPayments()
    }, [0])

  return (
    <Wrapper>
        <div className="card">
            <h2>Your Payments</h2>
            <table className="assignments-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Paid On</th>
                        <th>Amount Paid</th>
                        <th>Payment Method</th>
                        <th>Expected Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {studentPayments.map((payment, index) => (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{Dayjs(payment.createdAt).format("YYYY-MM-DD h:mm A")}</td>
                            <td>{payment.amount}</td>
                            <td>{payment.payment_method}</td> 
                            <td>{payment.expected_date}</td>
                            <td>{payment.status}</td>
                        </tr>
                    ))}
                        
                </tbody>
            </table>
    </div>
    </Wrapper>
  )
}

export default StudentPayments