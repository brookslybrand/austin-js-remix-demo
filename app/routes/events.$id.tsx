import { LoaderFunctionArgs } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { getEvent } from "~/db.server/queries";

export async function loader({ context, params }: LoaderFunctionArgs) {
  if (params.id === undefined) {
    throw new Error("No ID provided");
  }
  const event = await getEvent({ context, id: params.id });

  return { event };
}

export default function Event() {
  const { event } = useLoaderData<typeof loader>();
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ minWidth: 300, width: "80ch" }}>
          <h1>{event.name}</h1>
          <p>{event.date}</p>
          <p>{event.description}</p>
          <p>{event.location}</p>
        </div>
        <aside style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
          <img
            src={event.profile_src}
            alt={event.name}
            width={96}
            height={96}
          />
          <div>
            <p>{event.speaker_name}</p>
            <p>{event.speaker_bio}</p>
          </div>
        </aside>
      </div>

      <div>
        <h2>Sponsor: {event.sponsor_name}</h2>
      </div>
    </div>
  );
}
