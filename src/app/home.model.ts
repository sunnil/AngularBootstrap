export class Home {
    firstname:string;
    lastname:string;
    email:string;

    constructor(
        firstname:string,
        lastname:string,
        email:string
    ){
        this.firstname = firstname,
        this.lastname = lastname,
        this.email = email
    }

    fullname(){
        return this.firstname + '' + this.lastname
    }
}
