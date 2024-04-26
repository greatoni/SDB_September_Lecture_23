import React from 'react'
import PresidentTable from './PresidentTable'
import { presidentsArray } from './presidents.constant'

function Presidents() {

        const livingPresidents = presidentsArray.filter(president => {
            return president.passed === undefined
        })

        const deadPresidents = presidentsArray.filter(president => {
          return president.passed !== undefined
      })


        

  return (
    <div>
    <PresidentTable title={'Living Presidents'} presidents={livingPresidents}/>
    <PresidentTable title={'Dead Presidents'} presidents={deadPresidents}/>
    </div>
  )
}

export default Presidents