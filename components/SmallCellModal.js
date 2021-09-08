import { useState } from 'react'

const SmallCellModal = ({ addSmallCard, close }) => {
    const [input, setInput] = useState('')
    const [displayError, setDisplayError] = useState(false)

    const addCell = () => {
        if (input.length > 0) {
            addSmallCard(input, 'small')
            setInput('')
        }
        null
    }
    return (
        <div className="card">
            <div className="card_gradient"></div>
            <div className="card_content">
                <div>
                    <input
                        type="text"
                        placeholder="Add a text"
                        className="card_modal_input"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                </div>
                <div
                    className="card_modal_plus_button"
                    onClick={() => addCell() & close()}
                >
                    +
                </div>
            </div>
        </div>
    )
}

export default SmallCellModal
