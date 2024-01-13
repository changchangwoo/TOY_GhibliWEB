export default function DetailPage({$target}) {
    const $temp = document.createElement('div')
    $temp.innerHTML = `<h1>임시</h1>`
    this.render = () => {
        $target.appendChild($temp)
    }

}