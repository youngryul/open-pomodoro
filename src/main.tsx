import ReactDOM from 'react-dom/client';
import App from './App';
import {RecoilRoot} from "recoil";
// @ts-ignore
import "./global.css";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <RecoilRoot>
        <App />
    </RecoilRoot>
);

