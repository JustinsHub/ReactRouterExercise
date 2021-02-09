import {NavLink} from 'react-router-dom'


const VendingMachineChoices = () => {
    return (
        <div>
        <NavLink exact to="/coffee">Super Power Coffee</NavLink>
        <NavLink exact to="/chicken">Chicken</NavLink>
        <NavLink exact to="/cheetos">Hot Cheetos</NavLink>
        </div>
    )
}

export default VendingMachineChoices