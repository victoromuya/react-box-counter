import React from "react"
import boxData from "./BoxesData.js"
import './styles/box.css';
import Box  from './components/Box.js'

export default function App() {
    const [squares, setSquares] = React.useState(boxData)


    function toggle(id){
        setSquares(prevSquare => {
            return prevSquare.map(square => {
                return square.id === id ? {...square, on: !square.on} : square
            })
        })
    }

    const squareElements = squares.map(square =>(
        <Box key={square.id} on={square.on} id={square.id} toggle={toggle} />
    ))

    return (
        <main>
            {squareElements}
        </main>
    )
}