import Pomodoro from "../components/pomodoro/Pomodoro.tsx";
import {describe} from "vitest";
import {render, screen} from "@testing-library/react";
import {RecoilRoot} from "recoil";

describe("pomodoro", () => {
    it("pomodoro.tsx가 정상적으로 render된다.", () => {
        render(
            <RecoilRoot>
                <Pomodoro weather={0} />
            </RecoilRoot>
        );

        const pomodoroElement = screen.getByText((content) =>
            content.includes('Pomodoro')
        );
        expect(pomodoroElement).toBeInTheDocument();
    });

    it("날씨 API에서 200번대 데이터가 들어온다.", () => {
        render(
            <RecoilRoot>
                <Pomodoro weather={200} />
            </RecoilRoot>
        );

    })
})


