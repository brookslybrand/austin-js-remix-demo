import { LoaderFunctionArgs, redirect } from "@remix-run/cloudflare";
import { Form, Link, useLoaderData } from "@remix-run/react";
import { createEvent } from "~/db.server/mutations";
import { getSponsors, getSpeakers } from "~/db.server/queries";

export async function loader(args: LoaderFunctionArgs) {
  const [sponsors, speakers] = await Promise.all([
    getSponsors(args),
    getSpeakers(args),
  ]);

  return { sponsors, speakers };
}

export async function action({ request, context }: LoaderFunctionArgs) {
  const formData = await request.formData();

  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const location = formData.get("location") as string;
  const date = formData.get("date") as string;
  const speakerId = Number(formData.get("speakerId"));
  const sponsorId = Number(formData.get("sponsorId"));

  const { id } = await createEvent({
    context,
    name,
    description,
    location,
    date,
    speakerId,
    sponsorId,
  });

  return redirect(`/events/${id}`);
}

export default function NewEvent() {
  const { sponsors, speakers } = useLoaderData<typeof loader>();
  return (
    <div>
      <Link to="/events">Back to events</Link>
      <h1>Create a new event</h1>
      <Form
        style={{
          marginTop: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: 300,
        }}
      >
        <label>
          Name: <input type="text" name="name" />
        </label>
        <label>
          Description: <input type="text" name="description" />
        </label>
        <label>
          Location: <input type="text" name="location" />
        </label>
        <label>
          Date: <input type="date" name="date" />
        </label>

        <select name="speakerId">
          {speakers.map((speaker) => (
            <option key={speaker.id} value={speaker.id}>
              {speaker.name}
            </option>
          ))}
        </select>

        <select name="sponsorId">
          {sponsors.map((sponsor) => (
            <option key={sponsor.id} value={sponsor.id}>
              {sponsor.name}
            </option>
          ))}
        </select>

        <button type="submit" formMethod="POST">
          Create new event
        </button>
      </Form>
    </div>
  );
}
