import {NavLink} from 'react-router-dom'
import './VendingMachineChoices.css'

const VendingMachineChoices = () => {
    return (
        <nav className="VendingMachineChoices">
        <NavLink exact to="/coffee">Super Power Coffee</NavLink>
        <NavLink exact to="/chicken">Chicken</NavLink>
        <NavLink exact to="/cheetos">Hot Cheetos</NavLink>
        </nav>
    )
}

export default VendingMachineChoices