import {test, expect} from '@playwright/test'

test('Create User API', async({page})=>{
    const response = await page.request.post('https://gorest.co.in/public/v2/users', {
        data: {
            "id": 8222222,
            "name": "Test",
            "email": "test@playwright.com",
            "gender": "male",
            "status": "active"
        }
    });
    expect(response.status()).toBe(201); //Status: created
    const responseBody = await response.json();
    console.log(responseBody);
    expect(responseBody.name).toBe("Test");
    expect(responseBody.email).toBe("test@playwright.com");
    expect(responseBody.gender).toBe("male");
    expect(responseBody.status).toBe("active");
    expect(responseBody.id).toBe(8222222);
})