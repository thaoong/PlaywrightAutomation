import { test, expect, request } from '@playwright/test';
import testData from '../data/users.json';

test.describe('API POST Request with multiple data sets', () => {
  for (const data of testData) {
    test(`POST request for create user : ${data.name}`, async ({ request }) => {
        const response = await request.post('https://reqres.in/api/users', {
            headers: {
                'x-api-key': 'reqres-free-v1'
            },

            data: {
                "name": data.name,
                "job": data.job
            }
        });

        const responseBody = await response.json();
        console.log(`Response for ${data.name}:`, responseBody);
        expect(response.status()).toBe(201);
        expect(responseBody.name).toBe(data.name);
        expect(responseBody.job).toBe(data.job);      
    });
  }
});
