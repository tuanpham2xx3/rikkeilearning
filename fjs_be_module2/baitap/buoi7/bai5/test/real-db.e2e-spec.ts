import { PostgreSqlContainer } from '@testcontainers/postgresql';

describe.skip('E2E with Testcontainers PostgreSQL', () => {
  let container: Awaited<ReturnType<PostgreSqlContainer['start']>>;
  beforeAll(async () => { container = await new PostgreSqlContainer('postgres:16-alpine').start(); });
  afterAll(async () => { await container.stop(); });
  it('starts a real isolated PostgreSQL instance', () => { expect(container.getDatabase()).toBeTruthy(); });
});
