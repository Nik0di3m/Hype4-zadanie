import { useState } from 'react'

const SmallCellModal = ({ addSmallCard }) => {
    const [input, setInput] = useState()
    return (
        <div className="card">
            <div className="card_gradient"></div>
            <div className="card_content">
                <div>
                    <input
                        type="text"
                        placeholder="Simple"
                        className="card_modal_input"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                </div>
                <div
                    className="card_modal_plus_button"
                    onClick={() => addSmallCard(input, 'small')}
                >
                    +
                </div>
            </div>
        </div>
    )
}

export default SmallCellModal
