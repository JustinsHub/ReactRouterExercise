import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import VendingMachineChoices from './VendingMachineChoices'
import SuperPowerCoffee from './SuperPowerCoffee'
import Chicken from './Chicken'
import HotCheetos from './HotCheetos'
import Home from './Home'
import './VendingMachine.css'

const home = <Link exact to ="/">Go back to vending machine.</Link>

const VendingMachine = () => {
    return (
        <div className="VendingMachine">
            <BrowserRouter>
            <Route exact path="/"><Home/><VendingMachineChoices/></Route>
            <Route exact path="/coffee"><SuperPowerCoffee/>{home}</Route>
            <Route exact path="/chicken"><Chicken/>{home}</Route>
            <Route exact path="/cheetos"><HotCheetos/>{home}</Route>
            </BrowserRouter>
        </div>
    )
}

export default VendingMachine