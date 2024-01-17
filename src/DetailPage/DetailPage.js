import CreateLogo from "../components/CreateLogo.js";
import { delay } from "../utils/delay.js";
import DescriptionOnOff from "./DescriptionOnOff.js";
import DetailDescription from "./DetailDescription.js";
import setDetailPage from "./SetDetailPage.js";

export default function DetailPage({ $target }) {
  const $page = document.createElement("div");
  $page.className = "detailPage";
  var data = {};
  const createLogo = new CreateLogo({ $parent: $page });
  const detailDescription = new DetailDescription({ $parent: $page });
  const descriptionOnOff = new DescriptionOnOff({ $parent: $page });

  this.render = async ({ detailName }) => {
    // url 기반으로 json 데이터 읽기
    try {
      var response = await fetch("../src/data.json");
      var { datas } = await response.json();
      data = datas[detailName];
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    // 배경 이미지 세팅
    await setDetailPage({ imgs: data.imgs, $parent: $page });
    // detailPage 렌더링
    $page.classList.remove("show");
    $target.appendChild($page);

    await delay(200);
    $page.classList.add("show");

    // 로고 애니메이션 출력
    createLogo.startAnimation({
      mainText: data.eng_name,
      subText: data.kr_name,
    });
    await delay(300);

    // 작품 소개 섹션 렌더링
    detailDescription.render({
      imgs: data.imgs,
      description: data.description,
    });

    // 작품 소개 visible 렌더링
    descriptionOnOff.render();
  };
}
