# Grameen Bus — Landing Page

Landing page only (no backend, no booking flow pages) for a rural bus platform.

## Run it

```bash
npm install
npm run dev
```

## Stack

- React + Vite
- Tailwind CSS
- react-three-fiber / drei / three for the hero's 3D bus

## Design notes

- **Concept:** the visual language borrows from real Indian state-transport
  buses and bus-stand furniture — painted destination boards, ticket stubs
  with perforated edges, and a mechanical split-flap ("Solari") departure
  board, which is the page's signature element (see
  `src/components/shared/SplitFlapBoard.jsx`, used in the Hero's live
  departure ticker).
- **Palette:** warm khaki paper (`paper` `#EDE6D6`), route-board brick red
  (`route` `#B23A2E`), state-transport green (`signal` `#3F5F42`), and
  roadside marigold (`marigold` `#DFA23A`), all defined as Tailwind tokens
  in `tailwind.config.js`.
- **Type:** Oswald (condensed, bold — mimics hand-painted route boards) for
  display, Work Sans for body copy, JetBrains Mono for timetable/data text.
- **3D bus:** `public/models/bus.glb` referenced in the original folder tree
  doesn't exist in this environment, so `src/components/Hero/BusScene.jsx`
  builds a low-poly bus procedurally out of Three.js primitives instead of
  loading a GLTF. If you drop a real `bus.glb` into `public/models/`, swap
  in `useGLTF` as noted in a comment at the top of that file.

## What's included

Only the components/pages needed for the landing page:
Navbar, Hero (+ BusScene), Booking search widget (Location/Date/Passenger
selectors), PopularRoutes, HowItWorks, Features, Testimonials, FAQ, Footer,
plus static data in `src/data/`. Pages like SeatSelection, BookingStatus,
TrackBus, etc. from the original tree are out of scope for this pass.
