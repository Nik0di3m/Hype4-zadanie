export const drawLineInDiv = (id) => {
    const line = document.getElementById(`line2${id}`)
    const div1 = document.getElementById(`big_card_input${id}`)
    const div2 = document.getElementById(`big_card_plus_button${id}`)

    const x1 = div1.offsetLeft + div1.clientWidth / 6.4
    const y1 = div1.offsetTop + div1.clientHeight / 2
    const x2 = div2.offsetLeft + div2.clientWidth / 2
    const y2 = div2.offsetTop + div2.clientHeight / 2
    line.setAttribute('x1', x1)
    line.setAttribute('y1', y1)
    line.setAttribute('x2', x2)
    line.setAttribute('y2', y2)
}
