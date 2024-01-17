## Getting starting

Install dependencies

```sh
npm install
```

Create and seed the DB

```sh
npm run migrate:db
```

Start the dev server

```sh
npm run dev
```

1. Create a new project with the CLI

- `npm create cloudflare@latest my-remix-app -- --framework=remix`
- `npm run db:migrate`

2. Load data

- `_index.tsx`
- `getAllEvents` function

3. Load data for events

- `events.$id.tsx`

4. Create a nested layout with all the events

- `events.tsx`
- `events._index.tsx`

5. Mutate data

- `events.new.tsx`
