class Response {
    constructor(statusCode,httpStatus,message,data){
        //we are dynamically adding timeStamp as a property to new objects
        //hence why we didnt need to declare it
        this.timeStamp = new Date().toLocaleDateString();
        this.statusCode = statusCode;
        this.httpStatus = httpStatus;
        this.message = message;
        this.data = data;
    }
}


export default Response;