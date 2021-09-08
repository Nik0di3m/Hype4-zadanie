import { useEffect, useState } from 'react'
import BigCell from '../components/BigCell'
import Card from '../components/Card'
import Modal from '../components/Modal'
import { drawLine } from '../lib/drawLine'
const Home = () => {
    const [active, setActive] = useState(false)
    const [cell, setCell] = useState([])
    const [bigCellRow, setBigCellRow] = useState([])

    if (process.browser) {
        drawLine()
    }
    const close = () => {
        setActive(!active)
    }
    const addCell = (text, type) => {
        setCell([...cell, { text: text, type: type, id: Math.random() * 1000 }])
    }
    const addBigCellRow = (uid, text) => {
        setBigCellRow([
            ...bigCellRow,
            { text: text, uid: uid, id: Math.random() * 1000 },
        ])
    }
    useEffect(() => {
        drawLine()
    }, [cell, bigCellRow])
    return (
        <div className="wrapper">
            <div className="header_button">
                <div className="header_text">
                    <span>People</span>
                </div>
            </div>
            <div className="row_container">
                {cell.map((item) => {
                    if (item.type === 'small') {
                        return (
                            <Card
                                key={item.id}
                                id={item.id}
                                text={item.text}
                                divs={cell}
                                setDiv={setCell}
                                item={item}
                            />
                        )
                    }
                    if (item.type === 'big') {
                        return (
                            <BigCell
                                key={item.id}
                                text={item.text}
                                cell={cell}
                                setCell={setCell}
                                item={item}
                                addBigDivInput={addBigCellRow}
                                bigCellRow={bigCellRow}
                                setBigCellRow={setBigCellRow}
                            />
                        )
                    } else {
                        false
                    }
                })}
            </div>
            <div
                className="plus_button_outline"
                onClick={() => setActive(!active)}
            >
                <div className="plus_button_inner">
                    <span className="plus">+</span>
                </div>
            </div>
            <svg id="svg">
                <line id="line" />
            </svg>
            {active && (
                <Modal
                    close={close}
                    addDiv={addCell}
                    bigCardInput={bigCellRow}
                />
            )}
        </div>
    )
}

export default Home
