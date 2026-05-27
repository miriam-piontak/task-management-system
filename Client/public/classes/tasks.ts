export class Tasks{
    id:number;
    description:string;
    date:Date;
    typeTaskId:number;
    color:string
    constructor(id:number,description:string,date:Date,typeTaskId:number,color:string)
    {
        this.id=id;
        this.description=description;
        this.date=date;
        this.typeTaskId=typeTaskId;
        this.color=color;
    }
}