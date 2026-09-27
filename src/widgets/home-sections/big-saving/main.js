for (let i = 0;i<3;i++){
    try{if(i===0)break;
        console.log("try: ",i);
    }finally {
        console.log("finaly",i);
    }
}

// class NotFoundError extends Error {
//     constructor(message = "Resource not found", url = null) {
//         super(message);
//         this.name = "NotFoundError";
//         this.status = 404;
//         this.url = url;
//     }
// }

// try {
//     const requestedUrl = "/api/users/999";
//     throw new NotFoundError("Пользователь не найден", requestedUrl);
// } catch (e) {
//     console.log("Имя ошибки:", e.name);
//     console.log("Сообщение:", e.message);
//     console.log("Статус-код:", e.status);
//     console.log("Адрес (URL):", e.url);   
//     console.log("Это NotFoundError?", e instanceof NotFoundError); 
// }


// class ValidationError extends Error {
// constructor(message, field) {
// super(message);
// this.name = "ValidationError";
// this.field = field;
// }
// }



// try {
//     throw new ValidationError("NOOO");
// }catch (e){
//     console.log(e.name,e.field,e instanceof ValidationError);
// }
// function getUser(id){
//     if (id !==1){
//         throw new Error("User is not")
//     }return {id,name:"Alice"}
// }

// try {
//     const user = getUser(2);
//     console.log(user);
// }catch (e){
//     console.log("aasas",e.message)
// }getUser(2)