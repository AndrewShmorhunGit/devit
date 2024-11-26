# Dev IT Mono

**Dev IT Mono** is a monorepo for a test task. It includes both client and server applications, each with its own local scripts for development and build processes.

## Installation and Running

### 1. Install `pnpm`

Before starting, make sure `pnpm` is installed. If not, install it globally:

```bash
npm install -g pnpm
```

Check the installed version:

```bash
pnpm --version
```

---

### 2. Install Dependencies

Run the following command in the root directory to install all dependencies:

```bash
pnpm install
```

If dependencies for individual apps are not installed automatically, install them manually:

```bash
# Install dependencies for the client
cd apps/client
pnpm install

# Install dependencies for the server
cd ../server
pnpm install
```

---

### 3. Running the Applications

#### Run the Entire Project Locally

To run both the client and server simultaneously, use the following command in the root directory:

```bash
pnpm run dev:local
```

**Important**

- Client host have to be `3000` otherwise auth lambda will not response because of CORS issues!

- Login credentials:

```json
{
  "login": "login",
  "password": "password"
}
```

#### Run Individual Applications

- **Client**  
  Navigate to the client directory and start the development server:

  ```bash
  cd apps/client
  pnpm run dev:local
  ```

- **Server**  
  Navigate to the server directory and start the development server:

  ```bash
  cd apps/server
  pnpm run dev:local
  ```

---

### 4. Build the Applications

You can build each application separately.

- **Client**  
  Navigate to the client directory and run the build command:

  ```bash
  cd apps/client
  pnpm run build
  ```

- **Server**  
  Navigate to the server directory and run the build command:

  ```bash
  cd apps/server
  pnpm run build
  ```

---

### 5. Available Scripts

#### Root-level Scripts:

- `pnpm run dev:local` — Runs both client and server applications locally.
- `pnpm install` — Installs dependencies for the entire monorepo.

#### Client Scripts (`apps/client`):

- `pnpm run dev:local` — Starts the client in development mode.

#### Server Scripts (`apps/server`):

- `pnpm run dev:local` — Starts the server in development mode.

---

### 6. Project Structure

```plaintext
dev-it-mono/
├── apps/
│   ├── client/    # Client-side application
│   └── server/    # Server-side application
├── package.json   # Root package configuration
├── pnpm-lock.yaml # pnpm lock file
└── README.md      # Documentation
```

---

### 7. Notes

- Use the `.env.local` file for local development.
- The client application is powered by Vite, and the server application runs on Node.js with `ts-node` and `nodemon`.
- You may visit a client app on [devit.shmorhun.com](https://www.devit.shmorhun.com/)

Follow this steps to start server:

1. Add .env.dev file:

.env.dev

```
NODE_ENV=dev
ALLOW_ORIGIN=https://www.devit.shmorhun.com
PORT=5000
```

2. Run this commands

```bash
  cd .\apps\server\
  pnpm run build:dev
  pnpm run dev

```
