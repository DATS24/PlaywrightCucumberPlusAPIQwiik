import {test, expect} from '@playwright/test'

test('Update User API', async({page})=>{
    const response = await page.request.put('https://gorest.co.in/public/v2/users/8114899', {
        data: {
            "id": 8114899,
            "name": "Test Updated",
            "email": "test.updated@playwright.com",
            "gender": "male",
            "status": "active"
        }
    });
    expect(response.status()).toBe(200); //Status: OK
    const responseBody = await response.json();
    console.log(responseBody);
    expect(responseBody.name).toBe("Test Updated");
    expect(responseBody.email).toBe("test.updated@playwright.com");
    expect(responseBody.gender).toBe("male");
    expect(responseBody.status).toBe("active");
    expect(responseBody.id).toBe(8114899);
})