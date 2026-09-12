# Saung Company Profile — React Migration Instructions

## Project Context

This project is a migration of an existing company profile website from:

* HTML
* CSS
* Vanilla JavaScript

into:

* React
* TypeScript
* Vite
* pnpm

The existing website is already implemented and is the SOURCE OF TRUTH.

The goal is NOT to redesign the website.

The goal is to reproduce the existing website in React/TypeScript as accurately as possible.

---

## ABSOLUTE REQUIREMENTS

### 1. Do NOT change the existing design

Preserve exactly:

* colors
* typography
* font sizes
* font weights
* spacing
* margins
* paddings
* borders
* border radius
* shadows
* gradients
* backgrounds
* layout
* responsive behavior
* animations
* transitions
* hover states
* active states
* button appearance
* navigation appearance
* image appearance
* positioning
* section ordering

Do not introduce a new design system.

Do not modernize the design.

Do not "improve" the UI.

Do not make aesthetic decisions that are not present in the original website.

---

### 2. Do NOT change existing content

All existing content must remain unchanged.

Preserve exactly:

* headings
* paragraphs
* labels
* button text
* navigation text
* footer text
* company information
* descriptions
* numbers
* links
* image content
* alt text where applicable

Do not rewrite copy.

Do not paraphrase text.

Do not translate text.

Do not create placeholder content.

Do not invent missing content.

If content is unclear, inspect the original source instead of guessing.

---

### 3. `tmp/` is the SOURCE OF TRUTH

The original website files are located under:

`tmp/`

Treat these files as read-only reference material.

Do NOT modify the original files inside `tmp/`.

The React implementation must adapt itself to the existing source, not the other way around.

---

### 4. Preserve the existing CSS whenever possible

Do not rewrite the entire CSS into a new styling system.

Prefer:

1. Reusing existing CSS.
2. Moving existing CSS into the React project.
3. Adjusting only paths/selectors that are necessary for React.
4. Creating additional CSS only when required by the React migration.

Do not replace the existing styling with:

* Tailwind
* Bootstrap
* Material UI
* Chakra UI
* styled-components
* CSS-in-JS

unless explicitly requested.

---

### 5. Preserve existing assets

Use the existing assets from the original project.

Do not replace images with:

* generated images
* placeholder images
* stock images
* SVG approximations
* different logos

Preserve the existing image files whenever possible.

---

### 6. Preserve JavaScript behavior

Existing Vanilla JavaScript behavior must be migrated into React.

Examples:

Vanilla JS:

```js
document.querySelector(...)
element.addEventListener(...)
classList.add(...)
classList.remove(...)
window.addEventListener(...)
```

should be converted into appropriate React mechanisms such as:

* `useState`
* `useEffect`
* `useRef`
* React event handlers
* derived state

Do not blindly copy DOM manipulation into React.

However, behavior must remain equivalent.

---

### 7. Do not over-componentize

Do not create a React component for every `<div>`.

Component boundaries should follow:

* meaningful page sections
* reusable UI elements
* repeated structures
* independent interactive behavior

Prefer semantic components such as:

```text
Header
Navigation
Hero
About
Services
Experience
CorporateInformation
Footer
```

ONLY when those sections actually exist in the original website.

Do not invent sections that do not exist.

---

### 8. Do not invent architecture before inspecting the source

Before creating components, inspect:

* HTML structure
* CSS
* JavaScript
* assets
* design-system files
* page relationships
* navigation
* responsive behavior

Then propose the React structure based on the actual source.

---

### 9. Preserve multi-page behavior

The original project contains multiple HTML pages.

Inspect the existing files and determine whether they represent:

* separate pages
* sections
* navigation targets
* standalone documents

Do not assume the routing architecture.

If routing is required, recommend the simplest React routing approach that preserves the original URL/page behavior.

Do not install additional dependencies without explaining why they are required.

---

### 10. TypeScript requirements

Use TypeScript properly.

Avoid:

```ts
any
```

unless there is a legitimate reason.

Prefer explicit types for:

* props
* component data
* state
* configuration
* event handlers

---

### 11. Do not modify package versions unnecessarily

The project currently uses:

* React
* React DOM
* Vite
* TypeScript
* pnpm

Do not upgrade or downgrade dependencies unless required.

Do not add libraries simply for convenience.

If a dependency is necessary, explain:

1. Why it is needed.
2. What problem it solves.
3. Whether the same behavior can be implemented without it.

---

### 12. Docker compatibility

The project already uses Docker for development.

Do not break:

```text
Dockerfile.dev
docker-compose.yml
.dockerignore
```

The application must continue to work inside the existing Docker development environment.

---

# MIGRATION WORKFLOW

Follow this exact workflow.

## Phase 1 — Audit

Before writing React code, inspect the original source.

Inspect:

```text
tmp/*.html
tmp/**/*.html
tmp/**/*.css
tmp/**/*.js
tmp/assets/*
tmp/_ds/*
```

Determine:

1. Main page.
2. Other pages.
3. CSS dependencies.
4. JavaScript dependencies.
5. Assets.
6. Design tokens.
7. Existing responsive rules.
8. Existing interactions.
9. Navigation behavior.
10. External resources.

Do NOT modify anything yet.

After the audit, provide a concise migration map.

---

## Phase 2 — Asset Migration

Move/copy required assets into the React source structure.

Example:

```text
src/assets/
```

Preserve filenames where possible.

Update only the references required for React/Vite.

Do not alter image dimensions or visual properties unless required by the original implementation.

---

## Phase 3 — CSS Migration

Bring the original CSS into the React project.

Preserve:

* selectors
* variables
* media queries
* animations
* typography
* spacing
* colors
* responsive behavior

If the `_ds` directory contains design-system tokens, inspect and preserve them.

Do not recreate the design system from memory.

---

## Phase 4 — HTML → JSX

Convert the original HTML into React JSX.

Perform only the transformations required by JSX.

Examples:

```html
class=""
```

becomes:

```tsx
className=""
```

and:

```html
for=""
```

becomes:

```tsx
htmlFor=""
```

Do not change the actual content.

Do not redesign the markup unless React requires it.

---

## Phase 5 — Componentization

After the JSX structure works, split the page into meaningful React components.

Componentization must be based on the original HTML structure.

Do not refactor aggressively.

The first priority is visual and behavioral parity.

---

## Phase 6 — JavaScript → React

Inspect the original JavaScript.

For each behavior, document:

```text
Original behavior
↓
Original JS implementation
↓
React equivalent
```

Use:

* useState
* useEffect
* useRef
* event handlers

where appropriate.

Do not change the user-visible behavior.

---

## Phase 7 — Verification

After implementation, compare the React application with the original website.

Verify:

### Content

* [ ] Text identical
* [ ] Navigation identical
* [ ] Images identical
* [ ] Links identical

### Visual

* [ ] Layout identical
* [ ] Colors identical
* [ ] Typography identical
* [ ] Spacing identical
* [ ] Responsive behavior identical
* [ ] Animations identical

### Behavior

* [ ] Navigation works
* [ ] Buttons work
* [ ] Menus work
* [ ] Interactive elements work
* [ ] Scroll behavior works
* [ ] Responsive interactions work

### Technical

Run:

```bash
pnpm lint
pnpm build
```

The migration is not complete until both pass.

---

# IMPORTANT COPILOT BEHAVIOR

When information is missing:

DO NOT GUESS.

Instead:

1. Inspect the relevant source file.
2. Search the repository.
3. Determine the original behavior.
4. Ask for clarification only if the source is genuinely ambiguous.

Never invent:

* content
* design
* colors
* components
* assets
* behavior
* business information

The original website is always the authority.

---

# Implementation Priority

Always prioritize:

1. Functional correctness
2. Content parity
3. Visual parity
4. Behavioral parity
5. Maintainability
6. Refactoring

Do NOT prioritize "clean architecture" over visual/behavioral parity during the initial migration.

The first implementation should be a faithful React migration.

Refactoring can happen after parity is achieved.
