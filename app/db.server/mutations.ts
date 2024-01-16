import { AppLoadContext } from "@remix-run/cloudflare";
import { Env } from "./queries";

export async function createEvent({
  context,
  ...args
}: {
  context: AppLoadContext;
  name: string;
  description: string;
  location: string;
  date: string;
  speakerId: number;
  sponsorId: number;
}): Promise<{
  id: number;
}> {
  const env = context.env as Env;
  let { event_id } = (await env.DB.prepare(
    "SELECT MAX(id) as event_id FROM events"
  ).first()) as {
    event_id: number;
  };

  console.log("eventId", event_id);

  event_id++;

  console.log({
    event_id,
    speakerId: args.speakerId,
    sponsorId: args.sponsorId,
  });

  await env.DB.prepare(
    `INSERT INTO events (id, name, description, date, location, speaker_id, sponsor_id) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7);`
  )
    .bind(
      event_id,
      args.name,
      args.description,
      args.date,
      args.location,
      args.speakerId,
      args.sponsorId
    )
    .run();

  return { id: event_id };
}
