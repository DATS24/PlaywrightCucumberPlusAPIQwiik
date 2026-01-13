import {test, expect} from '@playwright/test'

test('Create User API', async({page})=>{
    const response = await page.request.get('https://gorest.co.in/public/v2/users/8114899');
    expect(response.status()).toBe(200); //Status: OK
    const responseBody = await response.json();
    console.log(responseBody);
    expect(responseBody.name).toBe("Anusuya Johar");
    expect(responseBody.email).toBe("johar_anusuya@effertz.example");
    expect(responseBody.gender).toBe("female");
    expect(responseBody.status).toBe("active");
    expect(responseBody.id).toBe(8114899);      
})