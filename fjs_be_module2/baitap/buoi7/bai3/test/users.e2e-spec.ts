import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';
import { AppModule } from '../src/app.module';

describe('Users authentication flow (e2e)', () => {
  let app: INestApplication;
  beforeAll(async () => { app = await (await Test.createTestingModule({ imports: [AppModule] }).compile()).createNestApplication().init(); });
  afterAll(async () => app.close());

  it('logs in then calls a protected-style profile endpoint with Bearer token', async () => {
    const login = await request(app.getHttpServer()).post('/auth/login').send({ email: 'test@example.com', password: 'secret' }).expect(201);
    await request(app.getHttpServer()).get('/users/profile').set('Authorization', `Bearer ${login.body.access_token}`).expect(200);
  });
});
