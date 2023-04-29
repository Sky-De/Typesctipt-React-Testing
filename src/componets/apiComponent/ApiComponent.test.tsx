import { render, screen } from "@testing-library/react";
import ApiComponent from "./ApiComponent";
import { setupServer } from "msw/node";
import { rest } from "msw";

const server = setupServer(
  rest.get('/api', async (req, res, ctx) => {
    return res(
      ctx.json({
        name:"Sam"
      })
    )
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


test("gets data", async()=> {
    render(<ApiComponent />);

    const out = await screen.findByRole('contentinfo');
    expect(out).toHaveTextContent("Name is Sam");
})