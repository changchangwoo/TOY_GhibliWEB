import { delay } from "../Utils/delay.js";

export default async function ImageController(element, imgs, page) {
    var current_src = page.style.backgroundImage;
    console.log(current_src);

    const regex = /url\(".*\/([^\/]+)(\d+)\.jpg"\)/; 
    var imageName = "";
    var numberBeforeJpg = 0;
    var newNumber = 0;

    const match = current_src.match(regex);

    if (match) {
        imageName = match[1];
        numberBeforeJpg = match[2];
        console.log(imageName, numberBeforeJpg);
    } else {
        console.log("매칭되는 문자열이 없습니다.");
    }

    if (element === "next") {
        newNumber = Number(numberBeforeJpg) + 1;
        if (newNumber > (imgs.length - 1)) newNumber = 0;
    } else if (element === "prev") {
        newNumber = Number(numberBeforeJpg) - 1;
        if (newNumber < 0) newNumber = imgs.length - 1;
    }
    current_src = current_src.replace(new RegExp(`${imageName}\\d+\\.jpg`), `${imageName}${newNumber}.jpg`);
    await delay(500)
    page.style.backgroundImage = current_src
}
