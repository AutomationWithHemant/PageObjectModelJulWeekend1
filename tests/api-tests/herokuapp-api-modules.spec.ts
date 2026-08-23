import {expect} from '@playwright/test'
import {test} from '../../fixtures/pom-fixtures'
import restfulAPIData  from '../../data/restful-booker-api-module-data.json'
import apiPathData from '../../data/api-path-data.json'
test('API Testing',{
        tag:['@API','@Sanity'],
        annotation: {
            type: "Test case link",
            description: "Journeytoautomation.org"
        }
    },async({request})=>{
    const bookingIds = await request.get('https://restful-booker.herokuapp.com/booking')
    console.log(await bookingIds.json())
})


test('API Testing 2',
    {
        tag:['@API','@Smoke'],
        annotation: {
            type: "Test case link",
            description: "Journeytoautomation.org"
        }
    },async({request})=>{
    const bookingIds = await request.get('https://restful-booker.herokuapp.com/booking')
    console.log(await bookingIds.json())
})

test('Verify restful bookings and getting valid response',
    {
        tag:['@API','@UAT'],
        annotation: {
            type: "Test case link",
            description: "Journeytoautomation.org"
        }
    },async({request})=>{
    const bookingIdResp = await request.get(apiPathData['booking_path']+apiPathData['booking_id'])
    const bookingIdJsonResp = await bookingIdResp.json()
    console.log(bookingIdJsonResp)
    expect(bookingIdResp.status()).toBe(200)
    expect(bookingIdJsonResp).not.toBeNull()
    expect(bookingIdResp.headers()['content-type']).toBe(restfulAPIData['content-type'])
    expect(bookingIdJsonResp).toMatchObject({
    "firstname": "John",
    "lastname": "Smith",
    "totalprice": 111,
    "depositpaid": true,
    "bookingdates": {
        "checkin": "2018-01-01",
        "checkout": "2019-01-01"
    },
    "additionalneeds": "Breakfast"
})
})
