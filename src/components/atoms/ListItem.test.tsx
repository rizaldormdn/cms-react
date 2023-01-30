import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils";
import ListItems from "./ListItem";
import { MemoryRouter } from 'react-router-dom';


let container: any;

beforeEach(() => {
	container = document.createElement("div");
	document.body.appendChild(container);
});

afterEach(() => {
	document.body.removeChild(container);
	container = null;
});

it("should contain blogs text", () => {
	act(() => {
    ReactDOM.createRoot(container).render(
      <MemoryRouter initialEntries={[{ pathname: '/admin/blogs' }]}>
        <ListItems title="blogs" goTo="/admin/blogs" />
      </MemoryRouter>
    );
  });

	const button = container.querySelector("a");

	expect(button.textContent).toBe("blogs");
});
