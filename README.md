# Backend Starter Template

A robust, production-ready backend starter template built with Express, TypeScript, Prisma, and integrated monitoring tools.

## Overview

This starter template provides a solid foundation for building scalable backend applications with modern best practices. It includes:

- **TypeScript** for type-safe code
- **Express** as the web framework
- **Prisma** for database ORM
- **Winston** for logging
- **ESLint & Prettier** for code quality
- **Prometheus & Grafana** for monitoring

## File Structure

```
.
├── .husky/                  # Git hooks
├── dist/                    # Compiled JavaScript files
├── docker/                  # Docker configuration files
├── node_modules/            # Dependencies
├── prisma/                  # Prisma schema and migrations
├── src/                     # Source code
│   ├── api/                 # API routes and controllers
│   ├── config/              # Configuration files
│   ├── db/                  # Database connection and utilities
│   ├── monitoring/          # Monitoring setup (Prometheus)
│   ├── services/            # Business logic
│   ├── types/               # TypeScript type definitions
│   ├── utils/               # Utility functions
│   ├── index.ts             # Application entry point
│   └── server.ts            # Express server setup
├── tests/                   # Test files
├── .env                     # Environment variables (not tracked by git)
├── .env.example             # Example environment variables
├── .gitignore               # Git ignore configuration
├── .prettierignore          # Prettier ignore configuration
├── .prettierrc              # Prettier configuration
├── Dockerfile               # Docker build instructions
├── docker-compose.yml       # Docker Compose services
├── eslint.config.mjs        # ESLint configuration
├── package-lock.json        # Lock file for dependencies
├── package.json             # Project metadata and dependencies
├── prometheus.yml           # Prometheus configuration
├── tsconfig.json            # TypeScript configuration
└── tsconfig.tsbuildinfo     # TypeScript build info
```

## Prerequisites

- Node.js (v16 or newer)
- Docker and Docker Compose (for running with monitoring)
- npm or yarn

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/backend-starter.git
cd backend-starter
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Set up environment variables

```bash
cp .env.example .env
# Edit the .env file with your configuration
```

### 4. Running the application

#### Option 1: With Docker (including Prometheus and Grafana)

This option starts the application along with Prometheus and Grafana for monitoring.

```bash
docker-compose up
```

Access the application at http://localhost:3000 (or your configured port)
Access Grafana dashboards at http://localhost:3000/grafana

#### Option 2: Development mode (without monitoring)

```bash
# Using ts-node (for development)
npm run dev
# or
ts-node src/index.ts
```

#### Option 3: Production build

```bash
# Compile TypeScript to JavaScript
npm run build
# or
npx tsc -b

# Run the compiled JavaScript
npm start
# or
node dist/index.js
```

## Database Setup with Prisma

This template uses Prisma as an ORM. To set up your database:

```bash
# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev

# (Optional) Explore your database with Prisma Studio
npx prisma studio
```

## Monitoring

The template includes Prometheus and Grafana for monitoring:

- **Prometheus**: Collects metrics from your application
- **Grafana**: Visualizes the metrics in customizable dashboards

When running with `docker-compose up`, these services are automatically configured and connected.

## Code Quality Tools

The repository is set up with:

- **ESLint**: For code linting
- **Prettier**: For code formatting
- **Husky**: For pre-commit hooks

Run code quality checks with:

```bash
# Lint code
npm run lint

# Format code
npm run format
```

## Testing

Run tests with:

```bash
npm test
```

## Deployment

The included Dockerfile and docker-compose.yml files can be used as a starting point for deploying to various environments.

For production deployment, consider:
- Setting appropriate environment variables
- Configuring proper database connections
- Securing your APIs with appropriate authentication/authorization
- Setting up proper logging and monitoring

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

[MIT](LICENSE)

## Acknowledgements

- [Express](https://expressjs.com/)
- [Prisma](https://www.prisma.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Winston](https://github.com/winstonjs/winston)
- [Prometheus](https://prometheus.io/)
- [Grafana](https://grafana.com/)
