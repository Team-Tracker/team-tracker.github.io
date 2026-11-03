# Team-Tracker

> [!IMPORTANT]
> **The new Team-Tracker is live at [teamtracker.geyser.at](https://teamtracker.geyser.at).**
> This repository hosts the landing page of the original HTL project. Active development continues on the new Team-Tracker.

Team-Tracker is a team management tool offering real-time collaboration, task assignments and progress tracking, with clients for Android, iOS, Desktop and Web.

- 🚀 **New Team-Tracker:** <https://teamtracker.geyser.at>
- 🌐 **This site:** <https://team-tracker.github.io>
- 🏫 **HTL project page:** <https://www.htl-hl.ac.at/web/it/projekte/team-trackr/>

## Development

This site is a React app (Create React App, React-Bootstrap, styled-components) that pulls the organization's repositories from the GitHub API.

```bash
npm install
npm start        # dev server on http://localhost:3000
npm run build    # production build
npm run deploy   # build and publish to GitHub Pages
```

Site content (technologies, links, the URL of the new Team-Tracker, …) is configured in [`src/config.js`](src/config.js).
