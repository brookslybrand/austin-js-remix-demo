import type { LoaderFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

interface Env {
  DB: D1Database;
}

export const loader: LoaderFunction = async ({ context }) => {
  const env = context.env as Env;

  // Select all events from earliest to latest
  const { results } = await env.DB.prepare(
    "SELECT * FROM events ORDER BY date DESC"
  ).all();

  return json(results);
};

export default function Index() {
  const results = useLoaderData<typeof loader>();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <div>
        A value from D1:
        <pre>{JSON.stringify(results, null, 2)}</pre>
      </div>
    </div>
  );
}
