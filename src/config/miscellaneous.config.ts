export default function (env: NodeJS.ProcessEnv) {
  return {
    port: env.PORT,
    frontEndUrl: env.FRONTEND_URL || `http://localhost:5173`,
  }
}
