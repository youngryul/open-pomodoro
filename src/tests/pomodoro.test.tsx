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
        const bgColor = "bg-yellow-300"
        const icon = "⚡️"

        render(
            <RecoilRoot>
                <Pomodoro weather={200}/>
            </RecoilRoot>
        );

        const container = screen.getByText(/Pomodoro/i).closest('div')!.parentElement;
        expect(container).toHaveClass(bgColor);

        const heading = screen.getByText(/Pomodoro/i);
        expect(heading).toHaveTextContent(icon);
    })

    it("날씨 API에서 300번대 데이터가 들어온다.", () => {
        const bgColor = "bg-green-300"
        const icon = "🌧️"

        render(
            <RecoilRoot>
                <Pomodoro weather={300}/>
            </RecoilRoot>
        );

        const container = screen.getByText(/Pomodoro/i).closest('div')!.parentElement;
        expect(container).toHaveClass(bgColor);

        const heading = screen.getByText(/Pomodoro/i);
        expect(heading).toHaveTextContent(icon);
    })

    it("날씨 API에서 500번대 데이터가 들어온다.", () => {
        const bgColor = "bg-blue-500"
        const icon = "☔️"

        render(
            <RecoilRoot>
                <Pomodoro weather={500}/>
            </RecoilRoot>
        );

        const container = screen.getByText(/Pomodoro/i).closest('div')!.parentElement;
        expect(container).toHaveClass(bgColor);

        const heading = screen.getByText(/Pomodoro/i);
        expect(heading).toHaveTextContent(icon);

    })

    it("날씨 API에서 600번대 데이터가 들어온다.", () => {
        const bgColor = "bg-slate-200"
        const icon = "❄️"

        render(
            <RecoilRoot>
                <Pomodoro weather={600}/>
            </RecoilRoot>
        );

        const container = screen.getByText(/Pomodoro/i).closest('div')!.parentElement;
        expect(container).toHaveClass(bgColor);

        const heading = screen.getByText(/Pomodoro/i);
        expect(heading).toHaveTextContent(icon);
    })

    it("날씨 API에서 700번대 데이터가 들어온다.", () => {
        const bgColor = "bg-amber-600"
        const icon = "🌫️"

        render(
            <RecoilRoot>
                <Pomodoro weather={701}/>
            </RecoilRoot>
        );

        const container = screen.getByText(/Pomodoro/i).closest('div')!.parentElement;
        expect(container).toHaveClass(bgColor);

        const heading = screen.getByText(/Pomodoro/i);
        expect(heading).toHaveTextContent(icon);
    })

    it("날씨 API에서 800번대 데이터가 들어온다.", () => {
        const bgColor = "bg-cyan-300"
        const icon = "☀️"

        render(
            <RecoilRoot>
                <Pomodoro weather={800}/>
            </RecoilRoot>
        );

        const container = screen.getByText(/Pomodoro/i).closest('div')!.parentElement;
        expect(container).toHaveClass(bgColor);

        const heading = screen.getByText(/Pomodoro/i);
        expect(heading).toHaveTextContent(icon);
    })

    it("날씨 API에서 900번대 데이터가 들어온다.", () => {
        const bgColor = "bg-rose-300"
        const icon = "🌪️"

        render(
            <RecoilRoot>
                <Pomodoro weather={900}/>
            </RecoilRoot>
        );

        const container = screen.getByText(/Pomodoro/i).closest('div')!.parentElement;
        expect(container).toHaveClass(bgColor);

        const heading = screen.getByText(/Pomodoro/i);
        expect(heading).toHaveTextContent(icon);
    })
})


