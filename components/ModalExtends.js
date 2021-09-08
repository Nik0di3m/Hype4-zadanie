import { useState } from 'react'

const ModalExtends = ({ close, addRowToExtendCell, item }) => {
    const [input, setInput] = useState()
    return (
        <div>
            <div className="modal_wrapper">
                <div className="modal">
                    <div className="modal_title">
                        <span>Set a row information</span>
                    </div>
                    <div className="modal_simple_box">
                        <input
                            className="modal_add_extends_cell"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                    </div>
                    <div className="modal_button_container">
                        <div
                            className="modal_close_button"
                            onClick={() => close()}
                        >
                            Close
                        </div>
                        <div
                            className="modal_save_button"
                            onClick={() => addRowToExtendCell(item.id, input)}
                        >
                            Save
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalExtends
