export class User {
    _id!: {
      $oid: string;
    };
    id: number; 
    name: string;
    balance: number;
  
    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this.balance = balance;
    }
  }
  