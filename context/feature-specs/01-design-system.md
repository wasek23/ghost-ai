Read `AGENTS.md` before starting.

We are adding the design system and UI premitive components.

Install and configure `shadcn/ui`.

Add this shadcn components:
- Button
- Card
- Dialog
- Input
- Tabs
- Textarea
- ScrollArea

Do not modify the generated `components/ui/*` files after the installation.

Also install the `lucide-react` icons library.

Create `lib/utils.ts` with a reusable `cn()` helper for marging Tailwind classes.

Ensure all the components are match the existing dark theme in `globals.css`.

### Check when done
- All components import without errors
- `cn()` works perfectly
- No default light styling appears
