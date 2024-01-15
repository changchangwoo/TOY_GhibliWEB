export default async function setDetailPage  ({imgs, $parent})  {
    $parent.style.backgroundImage = `url(${imgs[0]})`
    const $mainLogo = document.querySelector('#mainLogo')
    const $subLogo = document.querySelector('#subLogo')
    $mainLogo.style.width = '70%'
    $mainLogo.style.textAlign = 'right'
    $subLogo.style.width = '70%'
    $subLogo.style.textAlign = 'right'
}