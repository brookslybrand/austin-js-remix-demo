import { ActionFunction, LoaderFunction } from "@remix-run/cloudflare";

export const action: ActionFunction = async ({ request }) => {
  console.log("action: request.method", request.method); // POST
  return null;
};

export const loader: LoaderFunction = async ({ request }) => {
  console.log("loader: request.method", request.method); // GET ???
  return null;
};

export default function Example() {
  console.log("render: Example");
  return <div>Example</div>;
}
