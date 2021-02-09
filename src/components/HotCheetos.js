import React, {useState} from 'react'

const hotCheeto = <img src="https://i1.sndcdn.com/avatars-000440412732-2ehkou-large.jpg"
></img>

const HotCheetos = () => {
    const [eatCount, setEatCount] = useState(0)
    const [cheeto, setCheeto] = useState([])


    const cheetoEaten = () =>{
        setEatCount(cheeto => cheeto + 1)
        setCheeto(cheeto => [...cheeto, hotCheeto])
    }

    return (
        <div>
        <p>{cheeto}</p>
        <button onClick={cheetoEaten}>Eat a cheeto.</button>
        <p>Cheetos eaten: {eatCount}</p>
        </div>
    )
}

export default HotCheetos