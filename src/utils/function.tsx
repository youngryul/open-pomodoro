export default function switchWeather(weather:number) {
    switch (weather) {
        case 200:
        case 201:
        case 202:
        case 210:
        case 211:
        case 212:
        case 221:
        case 230:
        case 231:
        case 232:
            return {bgColor: 'bg-yellow-300', icon: '⚡️'}; // 200번대: 천둥구름 관련
            break;
        case 300:
        case 301:
        case 302:
        case 310:
        case 311:
        case 312:
        case 313:
        case 314:
        case 321:
            return {bgColor: 'bg-green-300', icon: '🌧️'}; // 안개비 및 소나기 관련
        case 500:
        case 501:
        case 502:
        case 503:
        case 504:
            return {bgColor: 'bg-blue-500', icon: '☔️'}; // 비 관련
        case 600:
        case 601:
        case 602:
        case 611:
        case 612:
        case 615:
        case 616:
        case 620:
        case 621:
        case 622:
            return {bgColor: 'bg-slate-200', icon: '❄️'}; // 눈 및 진눈깨비 관련
        case 701:
        case 711:
        case 721:
        case 731:
        case 741:
        case 751:
        case 761:
        case 762:
        case 771:
            return {bgColor: 'bg-amber-600', icon: '🌫️'}; // 안개 및 먼지 관련
        case 800:
        case 801:
        case 802:
        case 803:
        case 804:
            return {bgColor: 'bg-cyan-300', icon: '☀️'}; // 맑은 하늘 및 구름 관련
        case 900:
        case 901:
        case 902:
        case 903:
        case 904:
        case 905:
        case 906:
        case 951:
        case 952:
        case 953:
        case 954:
        case 955:
        case 956:
        case 957:
        case 958:
        case 959:
        case 960:
        case 961:
        case 962:
            return {bgColor: 'bg-rose-300', icon: '🌪️'}; // 폭풍 및 허리케인 관련
        default:
            return {bgColor: 'bg-gray-200', icon: '❓'}; // 기본 색상
    }
}
