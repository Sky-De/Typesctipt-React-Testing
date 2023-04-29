import { renderHook, act } from "@testing-library/react-hooks";
import { useApi } from "./useApi";

import { setupServer } from "msw/node";
import { rest } from "msw";

const server = setupServer(
  rest.get('/api', async (req, res, ctx) => {
    return res(
      ctx.json({
        name:"Jack",
        family:"Chan"
      })
    )
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("should response", async ()=> {
    const { result, waitForNextUpdate } = renderHook(() => useApi());
    await waitForNextUpdate();

    expect(result.current).toEqual({ name: "Jack", family: "Chan" });
})