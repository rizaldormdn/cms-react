import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils";
import Button from "./Button";

let container: any;

beforeEach(() => {
	container = document.createElement("div");
	document.body.appendChild(container);
});

afterEach(() => {
	document.body.removeChild(container);
	container = null;
});

it("should contain Test text", () => {
	act(() => {
		ReactDOM.createRoot(container).render(
			<Button title="Test" action={jest.fn()} />
		);
	});

	const button = container.querySelector("button");

	expect(button.textContent).toBe("Test");
});
