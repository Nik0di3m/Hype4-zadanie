export const drawLine = () => {
    const line = document.getElementById('line')
    const div1 = document.getElementsByClassName('header_button')
    const div2 = document.getElementsByClassName('plus')

    const x1 = div1[0].offsetLeft + div1[0].clientWidth / 2
    const y1 = div1[0].offsetTop + div1[0].clientHeight / 2
    const x2 = div2[0].offsetLeft + div2[0].clientWidth / 2
    const y2 = div2[0].offsetTop + div2[0].clientHeight / 2
    line.setAttribute('x1', x1)
    line.setAttribute('y1', y1)
    line.setAttribute('x2', x2)
    line.setAttribute('y2', y2)
}
