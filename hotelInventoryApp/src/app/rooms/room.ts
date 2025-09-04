export interface room{
    totalRooms?:number,
    availableRooms?:number;
    bookedRooms?:number;
}
export interface roomList{
    roomNumber:number,
    roomType:string,
    amenities:string,
    price:number,
    checkInTime:Date,
    checkOutTime:Date,
    rating:number
}