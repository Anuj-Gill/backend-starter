import client from "prom-client";

export const activeRequestsGauge = new client.Gauge({
  name: 'active_requests',
  help: 'Number of active requests'
});
