import { StringManipulationService } from './main-service';
import { NumberManipulationService } from './main-service';

class StringManipulations implements StringManipulationService{

    print(word:string): void{
        console.log(word);
        console.log(word.toUpperCase());
        console.log(word.toLowerCase());
        console.log("Char At 2"+word.charAt(2));
        console.log(word.concat(" Bhardwaj"));
        console.log(word.slice(0,3));
        console.log(word.length);
    }

    printWithSpace(sentence:string) : void{
        console.log(sentence.split('').join(' '));
    }

    findVowel(str: string) : void{
        var vcount:number=0;
        let word=str.toString().toLowerCase();
        for(var i=0;i<str.length;i++){
            if(word.charAt(i)=="a" || word.charAt(i)=="e" || word.charAt(i)=="i" || word.charAt(i)=="o" || word.charAt(i)=="u"){
                vcount=vcount+1;
            }
        }
        console.log("Their are "+vcount+" vowels in "+str);
    }
}

class NumbersManipulations implements NumberManipulationService{
    
    num:number;

    findMagic(num: number) : void{
        let sum = 0; 
        while (num > 0 || sum > 9)  
        { 
            if (num == 0) { 
                num = sum; 
                sum = 0; 
            } 
            sum += num % 10; 
            num /= 10; 
        }
        if(sum==1){
            console.log("This is magic number");
        }
        else{
            console.log("This is not a magic number");
        }
    }

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