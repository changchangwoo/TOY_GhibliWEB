import { delay } from "../Utils/delay.js"

export default async function setDetailPage  ({imgs, $parent})  {
    $parent.style.backgroundImage = `url(${imgs[0]})`
    await delay(300)
}