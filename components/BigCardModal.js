import { useEffect, useState } from 'react'

const BigCardModal = ({ addBigDiv, close }) => {
    const [input, setInput] = useState()
    const addCell = () => {
        if (input.length > 0) {
            addBigDiv(input, 'big')
            setInput('')
        }
        null
    }
    return (
        <div className="card_big_modal">
            <div className="card_col">
                <div className="card_big_gradient"></div>
                <div className="card_big_content">
                    <input
                        type="text"
                        className="big_card_input"
                        placeholder="Add a text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />

                    <div
                        className="card_modal_plus_button"
                        onClick={() => addCell() & close()}
                    >
                        +
                    </div>
                </div>

                <div className="big_card_plus_button">
                    <span className="big_card_plus_button_plus">+</span>
                </div>
            </div>
        </div>
    )
}

export default BigCardModal
