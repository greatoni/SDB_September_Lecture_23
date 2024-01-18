import React from 'react'
import EmployeeInfo from './EmployeeInfo';

let employeeRecords = [
    {
        name: "Jester Bash",
        city: "Miami",
        state: "FL" ,
        position: "WebDev",
        food: "Pizza"
    },
    {
        name: "Tom Jones",
        city: "Louisville",
        state: "KY", 
        position: "WebDev",
        food: "Pizza"
    },
    {
        name: "Janet James",
        city: "New York City",
        state: "NY" ,
        position: "WebDev",
        food: "Pizza"
    },
];

export default function Employee() {
  return (
    <>
        <h1>HEllo from Employees!!!</h1>
        {
            employeeRecords.map((record, index) => (
                <EmployeeInfo
                    key={index}
                    name ={record.name}
                    city={record.city}
                    state={record.state}
                    position={record.position}
                    food={record.food}
                />
            ) )
        }
    </>
  )
}
