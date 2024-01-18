import React from 'react'
import DisplayTotals from './DisplayTotals'

const votes = [
    { name: "Abe Lincoln", count: 139033},
    { name: "Stephen Douglas", count: 115509},
  ]

export default function PresidentVotes() {
    return (
        <>
            {
                votes.map((data, index) => (
                    <DisplayTotals
                        key= {index}
                        name ={data.name}
                        count={data.count}
                    />
                ) )
            }
        </>
    )
}
