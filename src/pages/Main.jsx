import { useNavigate } from "react-router-dom";
import mainimg from "../img/mainimg.png";

const Main = () => {
  const navigate = useNavigate();

  const clickButton = () => navigate("/ingredients");

  return (
    <div className="flex flex-col items-center w-full min-h-screen p-5">
      <div className="self-start m-4 text-5xl font-extrabold">
        모두의
        <br />
        쿠킹
      </div>
      <div className="self-start ml-4 text-sm font-semibold text-gray-500">
        ChatGPT가 냉장고 털이를 도와드립니다!
        <br />
        냉장고 속 재료를 입력하고 레시피를 받아보세요~
      </div>
      <img
        className="mt-32 mb-5 ml-8"
        src={mainimg}
        alt="main img"
        width="200px"
        height="200px"
      />
      <div className="w-1/2 m-4" onClick={clickButton}>
        <button className="w-full p-1.5 font-semibold text-white bg-pink-500 rounded-md">
          재료 입력 &nbsp; &nbsp; &nbsp; &nbsp; &gt;
          <br />
          바로 가기 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
        </button>
      </div>
    </div>
  );
};

export default Main;
