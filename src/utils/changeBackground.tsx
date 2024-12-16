/*
    function name : changeBackground
    function description : openWeather Api를 가져와서 날씨별로 배경과 아이콘이 변경되는 로직
                           weather id 값을 가져와서 백의 자리 수를 가져와 처리
 */

export default function changeBackground(weather: number) {
  const index = Math.floor(weather / 100);

  switch (index) {
    case 2:
      return { bgColor: "bg-yellow-300", icon: "⚡️" }; // 천둥구름 관련
    case 3:
      return { bgColor: "bg-green-300", icon: "🌧️" }; // 안개비 및 소나기 관련
    case 5:
      return { bgColor: "bg-blue-500", icon: "☔️" }; // 비 관련
    case 6:
      return { bgColor: "bg-slate-200", icon: "❄️" }; // 눈 및 진눈깨비 관련
    case 7:
      return { bgColor: "bg-amber-600", icon: "🌫️" }; // 안개 및 먼지 관련
    case 8:
      return { bgColor: "bg-cyan-300", icon: "☀️" }; // 맑은 하늘 및 구름 관련
    case 9:
      return { bgColor: "bg-rose-300", icon: "🌪️" }; // 폭풍 및 허리케인 관련
    default:
      return { bgColor: "bg-gray-200", icon: "❓" }; // 기본 색상
  }
}
