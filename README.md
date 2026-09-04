# Caricature Website Front

An Angular single-page application for a caricature-art platform, with public browsing pages and a protected admin dashboard.

## Overview

This is the front-end client for a caricature marketplace/portfolio site. Visitors can browse artists, authors, characters, and a caricature gallery, read a blog, and get in touch via a contact form and a simple keyword-based chatbot widget. Registered users can log in and manage their profile, while admin users get a dedicated dashboard to manage users, artists, authors, characters, and caricatures. Authentication is JWT-based, with route guards protecting the profile page and the entire admin area.

## Features

- Public pages: home, artist list/details, author list/details, character gallery, caricature gallery, blog, contact form
- User registration and login with JWT token storage and decoding
- Protected user profile route (`UserGuard`)
- Admin dashboard (`AuthGuardGuard`) with sub-sections for:
  - User management
  - Artist management
  - Author management
  - Character management
  - Caricature management
- Simple rule-based chatbot widget (Arabic prompts/responses)
- Shared header/footer layout and a not-found (404) page
- Bootstrap/Angular Material based UI with FontAwesome icons and jQuery-driven UI helpers (easing, admin theme scripts)

## Tech stack

- Angular 15 (CLI-based project) with TypeScript
- Angular Material and Angular CDK
- Bootstrap 5, ngx-bootstrap
- RxJS
- jQuery, Popper.js, FontAwesome
- ngx-toastr for notifications
- jwt-decode for client-side JWT parsing
- Karma + Jasmine for unit testing

## Getting started

### Prerequisites

- Node.js and npm
- Angular CLI (`npm install -g @angular/cli`), optional if using `npx ng`

### Install

```bash
npm install
```

### Run (development server)

```bash
npm start
```

Navigate to `http://localhost:4200/`. The app reloads automatically on source changes.

### Build

```bash
npm run build
```

Build artifacts are written to `dist/caricature-website-front`.

### Watch build

```bash
npm run watch
```

### Test

```bash
npm test
```

Runs unit tests via Karma/Jasmine.

### Configuration

The authentication service currently points to a hardcoded API base URL (`http://localhost:5000`) in `src/app/core/authentication/authentication.service.ts`; update this to match your backend API when deploying or integrating with a different environment.

## Project structure

```
src/
  app/
    core/                # Core module: HTTP service, authentication service
    features/
      components/        # Home, blog, login, register, profile, artist/author lists & details, character, caricature gallery
      Services/           # Feature services (caricature gallery, artist/author lists, character, profile, contact-us, chatbot)
      Interfaces/         # TypeScript models/interfaces
      models/
    admin/
      components/         # Admin dashboard, user/artist/author/character/caricature management
      admin-routing.module.ts
    shared/
      components/         # Header, footer, contact-us, chatbot, not-found
      guard/              # UserGuard, AuthGuardGuard route guards
    app-routing.module.ts  # Public route definitions
  assets/                 # Images, caricature/character images, CSS/JS vendor libraries
```

## Notes

- End-to-end testing is not configured; `ng e2e` requires adding a separate package.
- The `authentication.service.ts` base URL is a local development placeholder and should be externalized (e.g., environment files) before production use.
