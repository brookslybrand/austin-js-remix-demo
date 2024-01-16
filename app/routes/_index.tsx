import type { LoaderFunctionArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { getAllEvents } from "~/db.server/queries";

export async function loader({ context }: LoaderFunctionArgs) {
  const events = await getAllEvents({ context, order: "desc" });

  return json({ events });
}

export default function Index() {
  const { events } = useLoaderData<typeof loader>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Austin JS Meetups</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <span>{event.date}</span> -{" "}
            <a href={`/events/${event.id}`}>{event.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
