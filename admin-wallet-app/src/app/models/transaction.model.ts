export class Transaction {
    id: number;
    userId: number;
    amount: number;
    type: 'deposit' | 'withdrawal';
    timestamp: string;

    constructor(id: number, userId: number, amount: number, type: 'deposit' | 'withdrawal', timestamp: string){
        this.id = id;
        this.userId = userId;
        this.amount = amount;
        this.type = type;
        this.timestamp = timestamp;
    }

  }
  