interface NumberManipulationService{
    findPrime(num: number) : void;
    findMagic(num: number) : void;
}

class NumbersManipulations{
    num:number;
    findPrime(num: number) : void{
        let n=Math.floor(num/2);
        let nn:boolean=false;
        for(var i=2;i<n;i++){
            if(num%i==0){
                nn=true;
                break;
            }
            else{
                nn=false;
            }
        }
        if(nn){
            console.log("It is not a Prime Number");
        }
        else{
            console.log("Yes its a Prime Number");
        }
    }

    constructor(num:number){
        this.num=num;
    }

}