# React + Node.js Task List

A minimal full-stack starter project:
- React + Vite frontend
- Node.js + Express backend
- `GET /api/tasks` to list tasks
- `POST /api/tasks` to add a task

## Run locally

Install Node.js (version 18 or newer), then open this folder in VS Code.

```bash
npm install
npm run dev
```

Open the Vite URL shown in the terminal (usually http://localhost:5173).

The frontend calls `/api/tasks`; Vite forwards API requests to the Express server on port 5000.

## Production build

```bash
npm run build
npm start
```

The Express server serves the built React website and API on port 5000.

## Important notes

- Tasks are stored in memory, so they reset when the backend restarts.
- For an EC2 deployment, allow the required web traffic in the instance security group.
- Do not expose development servers or backend ports publicly as a production setup. Prefer a reverse proxy such as Nginx on port 80/443.
