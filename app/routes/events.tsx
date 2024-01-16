import type { LoaderFunctionArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { getAllEvents } from "~/db.server/queries";

export async function loader({ context }: LoaderFunctionArgs) {
  const events = await getAllEvents({ context, order: "desc" });

  return json({ events });
}

export default function Events() {
  const { events } = useLoaderData<typeof loader>();

  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          minWidth: 300,
        }}
      >
        {events.map((event) => (
          <div key={event.id}>
            <span>{event.date}</span> -{" "}
            <Link to={`/events/${event.id}`}>{event.name}</Link>
          </div>
        ))}

        <Link to="/events/new">Create New Event</Link>
      </nav>
      <Outlet />
    </div>
  );
}
