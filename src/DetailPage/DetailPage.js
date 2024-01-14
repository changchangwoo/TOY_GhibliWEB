import CreateLogo from "../Components/CreateLogo.js";
import { delay } from "../Utils/delay.js";
import setDetailSection from "./SetDetailSection.js";

export default function DetailPage({ $target }) {
  const $page = document.createElement("div");
  $page.className = "detailPage";
  var data = {}
  const createLogo = new CreateLogo({ $parent: $page });

  this.render = async ({ detailName }) => {
    // url 기반으로 json 데이터 읽기
        try {
          var response = await fetch('../src/datas.json');
          var {datas} = await response.json();
          data = datas[detailName]
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    // 배경 슬라이더 이미지 세팅
    await setDetailSection({imgs : data.imgs, $parent : $page})

    // detailPage 렌더링
    $target.appendChild($page);
    $page.classList.remove("show");
    await delay(200);
    $page.classList.add("show");


    // 로고 애니메이션 출력
    createLogo.startAnimation({mainText : data.eng_name, subText : data.kr_name})


  };
}