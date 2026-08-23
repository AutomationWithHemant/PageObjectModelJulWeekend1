import {test,expect,request} from '@playwright/test'

test('API Testing - PUT request',async({request})=>{
    const respPUT = await request.put('booking/2',{
        headers:{
            Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
        },
        data: {
            firstname: "Hemant",
            lastname: "Gandhi",
            totalprice: 111,
            depositpaid: true,
            bookingdates : {
                checkin : "2018-01-01",
                checkout : "2019-01-01"
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
            firstname: "Hemant",
            lastname: "Gandhi",
            totalprice: 111,
            depositpaid: true,
            bookingdates : {
                checkin : "2018-01-01",
                checkout : "2019-01-01"
            },
        additionalneeds : "Breakfast"
    })
})