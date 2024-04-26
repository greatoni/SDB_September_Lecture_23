import React from 'react'
import PresidentRow from './PresidentRow'

function PresidentTable(props) {
return (
    <div>
        <h2>[{props.title}]</h2>
    <table>
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Birth Year</th>
                <th>Passed</th>
            </tr>
        </thead>
        <tbody>
            {
            props.presidents.map((president, i) => (
                <PresidentRow
                    key={i}
                    first={president.first}
                    last={president.last}
                    year={president.year}
                />
            ))
            }
        </tbody>
    </table>
    </div>
)
}

export default PresidentTable