import { useEffect, useState } from 'react'

const BigCardModal = ({ addBigDiv }) => {
    const [input, setInput] = useState()

    return (
        <div className="card_big_modal">
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
                            placeholder="Extends"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                    </div>
                    <div
                        className="card_modal_plus_button"
                        onClick={() => addBigDiv(input, 'big')}
                    >
                        +
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
                ></div>

                <div className="big_card_plus_button">
                    <span className="big_card_plus_button_plus">+</span>
                </div>
            </div>
        </div>
    )
}

export default BigCardModal