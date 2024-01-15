import { delay } from "../Utils/delay.js"

export default function DescriptionOnOff({ $parent }) {
    const $descriptionOnOff = document.createElement('div')
    $descriptionOnOff.id = "descriptionOnOff"
    $descriptionOnOff.innerHTML = `visible check`

    var visible = true

    $descriptionOnOff.addEventListener('click', () => {
        const $mainLogo = document.querySelector('#mainLogo')
        const $detailDescriptionContainer = document.querySelector('#detailDescriptionContainer')
        const $sublogo = document.querySelector('#subLogo')

        if (visible) {
            $mainLogo.classList.remove('show')
            $detailDescriptionContainer.classList.remove('show')
            $sublogo.classList.remove('show')
            visible = false
        } else if (!visible) {
            $mainLogo.classList.add('show')
            $detailDescriptionContainer.classList.add('show')
            $sublogo.classList.add('show')
            visible = true
        }
    })

    this.render = async () => {
        $descriptionOnOff.classList.remove("show")
        $parent.appendChild($descriptionOnOff)
        await delay(500);
        $descriptionOnOff.classList.add("show")

    }
}