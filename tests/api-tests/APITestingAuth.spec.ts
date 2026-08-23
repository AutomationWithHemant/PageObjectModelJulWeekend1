import {test,expect,request} from '@playwright/test'

let tokenValue: string
test.beforeAll('Authenticate Using token',async({request})=>{

    const respToken = await request.post('https://restful-booker.herokuapp.com/auth',{
        data:{
            "username" : "admin",
            "password" : "password123"
        }
    })
        const jsonToken = await respToken.json()
        console.log(jsonToken)
        tokenValue = await jsonToken.token
}) 

/*test('Authenticate Using token',async({request})=>{

    const respToken = await request.post('https://restful-booker.herokuapp.com/auth',{
        data:{
            "username" : "admin",
            "password" : "password123"
        }
    })
        const tokenValue = await respToken.token
})   */   


test('API Testing - PUT request',async({request})=>{
    const respPUT = await request.put('booking/2',{
        headers:{
            Cookie: `token=${tokenValue}`
        },
        data: {
            firstname: "Ram",
            lastname: "Kumar",
            totalprice: 342,
            depositpaid: false,
            bookingdates : {
                checkin : "2020-01-01",
                checkout : "2021-01-01"
            },
        additionalneeds : "Breakfast"
        }
    });
    const jsonResp = await respPUT.json()
    console.log(await respPUT.json())
    expect(respPUT.status()).toBe(200)
    expect(respPUT.statusText()).toBe("OK")
    expect(respPUT.ok()).toBeTruthy() 
    expect(jsonResp).toMatchObject({
            firstname: "Ram",
            lastname: "Kumar",
            totalprice: 342,
            depositpaid: false,
            bookingdates : {
                checkin : "2020-01-01",
                checkout : "2021-01-01"
            },
        additionalneeds : "Breakfast"
       })
})