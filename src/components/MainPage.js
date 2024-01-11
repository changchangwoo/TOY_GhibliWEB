export default function MainPage({$target}) {
    const $page = document.createElement('div')
    $page.className = 'Hello'
    $page.innerHTML = '<h1>렌더링 됌</h1>'

    console.log($target, $page)


    this.render = () => {
        $target.appendChild($page)
        console.log('메인페이지임')
        
    }
}