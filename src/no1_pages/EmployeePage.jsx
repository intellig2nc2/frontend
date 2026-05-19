import React, { useState } from 'react'
import EmployeeTable from '../no2_components/employee/EmployeeTable';
import Register from '../no2_components/employee/Register'

const initialState = [
    {id: 1, name: "John", email: "John@example.com", job:"frontend", pay:100},
    {id: 2, name: "Peter", email: "Peter@example.com", job:"backend", pay:300},
    {id: 3, name: "Susan", email: "Susan@example.com", job:"db", pay:500},
    {id: 4, name: "Sue", email: "Sue@example.com", job:"ai", pay:700},
]

const EmployeePage = () => {
    const [infos, setInfos] = useState(initialState);
  return (
    <div>
      <EmployeeTable infos={infos}/>
      <Register setInfos={setInfos}/>
    </div>
  )
}

export default EmployeePage
