INSERT INTO sponsors (id, name) VALUES
(1, 'Cloudflare');

INSERT INTO speakers (id, name, bio, profile_src) VALUES
(1, 'Jeff Lindsay', 'Webhooks, TIGSource, SHDH, NASA, Twilio, Docker, plenty more. Optimism of the will. Follow your curiosity.', 'https://austinjavascript.com/assets/avatar/p5r76YVWyR-96.jpeg'),
(2, 'Dave Rupert', 'Dave Rupert is lead developer and 1/3rd of Paravel. He is also the host of the ATX Web Show, a not-so-weekly podcast all about the local web design and development scene here in Austin, TX.', 'https://austinjavascript.com/assets/avatar/eBfu-6JNRD-96.jpeg'),
(3, 'Bradley Farias', 'Head of Open Source Security at @SocketSecurity. Thoughts are my own. He/him.', 'https://austinjavascript.com/assets/avatar/I7ujQtgPaC-96.jpeg'),
(4, 'Charles Lowell', 'Charles has been delivering bullet-proof software for over 18 years. An avid contributor to open source, he founded the Frontside in 2005 to help businesses deliver game-changing user interfaces to their customers. Also, he really, really, really, really likes to code. Really.', 'https://austinjavascript.com/assets/avatar/5hczD9uc8g-96.jpeg'),
(5, 'Anton Astashov', 'Anton is a real-deal code slinger based in Austin and currently working at Mixbook.com.', 'https://austinjavascript.com/assets/avatar/Mb8LHQi_iN-96.jpeg'),
(6, 'Brooks Lybrand', 'Remix Developer Relations Manager at Shopify', 'https://austinjavascript.com/assets/avatar/148u8dxev7-96.jpeg');


INSERT INTO events (id, name, description, date, location, speaker_id, sponsor_id) VALUES
(1, 'Building Semi-hosted SaaS', 'Hosted software as a service is great, but can give the provider too much leverage over your data and the software itself. Meanwhile, self-hosted software, like many open source solutions, takes away the key value proposition of SaaS. Luckily, ''semi-hosted'' is a model that provides the best of both worlds and enables customization and extensibility not usually possible. I want to talk about this pattern and show what you can do with it by demonstrating a semi-hosted personal organizer I''ve been building with Deno and Mithril.js called Treestar.', '2023-06-20', 'Cloudflare Austin', 1, 1),
(2, 'HTML with Superpowers: An introduction to Web Components', 'A short dive into web components taking a look at what they are, how they work, what problems they solve, what problems they have, and why you may want to use them on your next project.

Dave Rupert is co-founder of Luro, a tool for tracking component usage and insights. He also co-hosts Shoptalk, a web design and development podcast with Chris Coyier from CSS-Tricks.', '2023-07-18', 'Cloudflare Austin', 2, 1),
(3, '4 or more package managers, what''s the worst that could happen?', 'JavaScript has a horribly rich history of writing package managers with none fully reigning as the final winner in a perpetual war for popularity and utility. Let''s cover some of their differences, that actually end up with some fun surprises about nuances in how they work along the way!', '2023-08-15', 'Cloudflare Austin', 3, 1),
(4, 'The Rise of Structured Concurrency', 'Rule 1. Highly concurrent programs are hard.

Rule 2. Every non-trivial program is highly concurrent.

JavaScript gives us some primitives to express asynchrony like promises, and async functions, but unfortunately they do not guarantee correctness. In fact far from it. Most async code is full of edge-cases and foot guns that never reveal themselves until you''re at scale. In this talk, we''ll put names to all these edge-cases and footguns so that you can recognize them instantly when they happen to you. After showing the ills, we''ll talk about the the cure: an exciting new way of thinking about our programs called Structured Concurrency. Language communities from Go, and Rust to Swift and Java, are all ablaze with talk of it, so whether you''ve explored this topic before or this is the first you''ve heard of it, you won''t want to miss this talk, because in ten years time, it will be the norm and we''ll all wonder how we ever did without it.', '2023-09-19', 'Cloudflare Austin', 4, 1),
(5, 'Native Mobile Apps with Vanilla JavaScript', 'Build native mobile apps in JavaScript! Just regular JavaScript without any mobile frameworks.

This can be a great solution if you’re a web developer and JavaScript is your bread and butter. Apps built this way work fast, are quick to deploy, and don’t have to pass App Store reviews every time! So come and learn about the pros and cons of this approach, and what it takes to build a JS native mobile app.', '2023-10-17', 'Cloudflare Austin', 5, 1),
(6, 'Remix: Teaching Young Dogs new Tricks', 'Remix is a full stack web framework that lets you focus on the user interface and work back through web standards to deliver a fast, slick, and resilient user experience. In this talk Brooks will show you how Remix makes it easy to iteratively build solid, engaging, and user-centric experiences using the basic building blocks of the web.', '2024-01-16', 'Cloudflare Austin', 6, 1);
