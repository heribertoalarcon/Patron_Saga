"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const { DynamoDB } = require('aws-sdk');
exports.handler = async function (event) {
    console.log("request:", JSON.stringify(event, undefined, 2));
    let reservationID = '';
    if (typeof event.ReserveCarRentalResult !== 'undefined') {
        reservationID = event.ReserveCarRentalResult.Payload.booking_id;
    }
    const dynamo = new DynamoDB();
    var params = {
        TableName: process.env.TABLE_NAME,
        Key: {
            'pk': { S: event.trip_id },
            'sk': { S: 'CAR#' + reservationID }
        }
    };
    // Call DynamoDB to delete the item from the table
    let result = await dynamo.deleteItem(params).promise().catch((error) => {
        throw new Error(error);
    });
    console.log('deleted car rental  reservation:');
    console.log(result);
    return { status: "ok" };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuY2VsUmVudGFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGFtYmRhcy9yZW50YWxzL2NhbmNlbFJlbnRhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRzNCLFFBQUEsT0FBTyxHQUFHLEtBQUssV0FBVSxLQUFTO0lBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRzdELElBQUksYUFBYSxHQUFHLEVBQUUsQ0FBQztJQUN2QixJQUFJLE9BQU8sS0FBSyxDQUFDLHNCQUFzQixLQUFLLFdBQVcsRUFBRTtRQUN2RCxhQUFhLEdBQUcsS0FBSyxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7S0FDakU7SUFHRCxNQUFNLE1BQU0sR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO0lBRTlCLElBQUksTUFBTSxHQUFHO1FBQ1gsU0FBUyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVTtRQUNqQyxHQUFHLEVBQUU7WUFDSCxJQUFJLEVBQUcsRUFBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBQztZQUN6QixJQUFJLEVBQUcsRUFBQyxDQUFDLEVBQUUsTUFBTSxHQUFDLGFBQWEsRUFBQztTQUNqQztLQUNGLENBQUM7SUFFRixrREFBa0Q7SUFDbEQsSUFBSSxNQUFNLEdBQUcsTUFBTSxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFO1FBQzFFLE1BQU0sSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7SUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUdwQixPQUFPLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyxDQUFBO0FBQ3ZCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgRHluYW1vREIgfSA9IHJlcXVpcmUoJ2F3cy1zZGsnKTtcbmV4cG9ydCB7fTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZXIgPSBhc3luYyBmdW5jdGlvbihldmVudDphbnkpIHtcbiAgY29uc29sZS5sb2coXCJyZXF1ZXN0OlwiLCBKU09OLnN0cmluZ2lmeShldmVudCwgdW5kZWZpbmVkLCAyKSk7XG5cblxuICBsZXQgcmVzZXJ2YXRpb25JRCA9ICcnO1xuICBpZiAodHlwZW9mIGV2ZW50LlJlc2VydmVDYXJSZW50YWxSZXN1bHQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmVzZXJ2YXRpb25JRCA9IGV2ZW50LlJlc2VydmVDYXJSZW50YWxSZXN1bHQuUGF5bG9hZC5ib29raW5nX2lkO1xuICB9XG5cblxuICBjb25zdCBkeW5hbW8gPSBuZXcgRHluYW1vREIoKTtcblxuICB2YXIgcGFyYW1zID0ge1xuICAgIFRhYmxlTmFtZTogcHJvY2Vzcy5lbnYuVEFCTEVfTkFNRSxcbiAgICBLZXk6IHtcbiAgICAgICdwaycgOiB7UzogZXZlbnQudHJpcF9pZH0sXG4gICAgICAnc2snIDoge1M6ICdDQVIjJytyZXNlcnZhdGlvbklEfVxuICAgIH1cbiAgfTtcbiAgXG4gIC8vIENhbGwgRHluYW1vREIgdG8gZGVsZXRlIHRoZSBpdGVtIGZyb20gdGhlIHRhYmxlXG4gIGxldCByZXN1bHQgPSBhd2FpdCBkeW5hbW8uZGVsZXRlSXRlbShwYXJhbXMpLnByb21pc2UoKS5jYXRjaCgoZXJyb3I6IGFueSkgPT4ge1xuICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gIH0pO1xuXG4gIGNvbnNvbGUubG9nKCdkZWxldGVkIGNhciByZW50YWwgIHJlc2VydmF0aW9uOicpO1xuICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuXG5cbiAgcmV0dXJuIHtzdGF0dXM6IFwib2tcIn1cbn07Il19