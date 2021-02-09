import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import VendingMachineChoices from './VendingMachineChoices'
import SuperPowerCoffee from './SuperPowerCoffee'
import Chicken from './Chicken'
import HotCheetos from './HotCheetos'

const VendingMachine = () => {
    return (
        <div>
            <BrowserRouter>
            <Route exact path="/coffee"><SuperPowerCoffee/></Route>
            <Route exact path="/chicken"><Chicken/></Route>
            <Route exact path="/cheetos"><HotCheetos/></Route>
            <VendingMachineChoices/>
            </BrowserRouter>
        </div>
    )
}

export default VendingMachine