import { useEffect, useState } from 'react'
import { drawLineInDiv } from '../lib/drawLineInDiv'
import BigCellRow from './BigCellRow'
import ModalExtends from './ModalExtends'

const BigCell = ({
    text,
    bigDiv,
    setBigDiv,
    item,
    addBigDivInput,
    bigCellRow,
    setBigCellRow,
}) => {
    const [activeModal, setActiveMoadl] = useState(false)
    const deleteHandler = () => {
        setBigDiv(bigDiv.filter((el) => el.id !== item.id))
    }
    const closeModal = () => {
        setActiveMoadl(!activeModal)
    }
    useEffect(() => {
        drawLineInDiv(item.id)
    })
    return (
        <div className="card_row">
            <div className="and">
                <span>And</span>
            </div>
            <div className="card_wrapper">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="line"></div>
                    <div className="card_big">
                        <div className="card_col">
                            <div className="card_big_gradient"></div>
                            <div className="card_big_content">
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                    }}
                                >
                                    <input
                                        type="text"
                                        className="big_card_input"
                                        id={`big_card_input${item.id}`}
                                        readOnly
                                        value={text}
                                    />
                                </div>
                                <div
                                    className="big_card_minus_button"
                                    onClick={() => deleteHandler()}
                                >
                                    <div className="minus"></div>
                                </div>
                            </div>
                            <div
                                style={{
                                    width: '426px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    margin: '0 auto',
                                }}
                            >
                                {bigCellRow.map((i) => {
                                    if (i.uid == item.id) {
                                        return (
                                            <BigCellRow
                                                key={i.id}
                                                text={i.text}
                                                bigCardInput={bigCellRow}
                                                setBigCellRow={setBigCellRow}
                                                item={i}
                                            />
                                        )
                                    }
                                })}
                            </div>
                            <div
                                className="big_card_plus_button"
                                id={`big_card_plus_button${item.id}`}
                                // onClick={() => addBigDivInput(item.id)}
                                onClick={() => setActiveMoadl(!activeModal)}
                            >
                                <span className="big_card_plus_button_plus">
                                    +
                                </span>
                            </div>
                        </div>
                        <svg id="svg2">
                            <line id={`line2${item.id}`} className="line2" />
                        </svg>
                    </div>
                </div>
            </div>
            {activeModal && (
                <ModalExtends
                    close={closeModal}
                    addRowToExtendCell={addBigDivInput}
                    item={item}
                />
            )}
        </div>
    )
}

export default BigCell
