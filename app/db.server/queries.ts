import { AppLoadContext } from "@remix-run/cloudflare";

interface Env {
  DB: D1Database;
}

export async function getAllEvents({
  context,
  order = "asc",
}: {
  context: AppLoadContext;
  order?: "asc" | "desc";
}): Promise<
  {
    id: number;
    name: string;
    date: string;
    sponsor_name: string;
  }[]
> {
  const env = context.env as Env;

  if (order !== "asc" && order !== "desc") {
    throw new Error("order must be asc or desc");
  }

  const { results } = await env.DB.prepare(
    `SELECT id, name, date FROM events ORDER BY date ${order}`
  )
    .bind(order)
    .all();

  // @ts-expect-error -- use zod or something
  return results;
}

export async function getEvent({
  context,
  id,
}: {
  context: AppLoadContext;
  id: string;
}): Promise<{
  id: string;
  name: string;
  description: string;
  date: string;
  location: string;
  sponsor_name: string;
  speaker_name: string;
  speaker_bio: string;
  profile_src: string;
}> {
  const env = context.env as Env;

  const event = await env.DB.prepare(
    `SELECT events.NAME,
        events.date,
        events.description,
        events.location,
        sponsors.NAME        AS sponsor_name,
        speakers.NAME        AS speaker_name,
        speakers.bio         AS speaker_bio,
        speakers.profile_src AS profile_src
    FROM   events
        LEFT JOIN sponsors
            ON events.sponsor_id = sponsors.id
        LEFT JOIN speakers
            ON events.id = speakers.event_id
    WHERE  events.id = ?`
  )
    .bind(id)
    .first();

  // @ts-expect-error -- use zod or something
  return event;
}
