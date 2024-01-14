export default async function asySetDetailSection  ({imgs, $parent})  {
    $parent.innerHTML = ``
    const $DetailSection = document.createElement('div')
    $DetailSection.className = "DetailSection"
    imgs.forEach((img, i) => {
        let $detaliSlide = document.createElement('div')
        $detaliSlide.id = `detailSlide${i}`
        $detaliSlide.style.backgroundImage = `url(${img})`
        $DetailSection.appendChild($detaliSlide)
    });

    $parent.appendChild($DetailSection)

    console.log(imgs, $parent)

}