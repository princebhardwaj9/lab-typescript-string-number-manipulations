interface StringManipulationService{
    print(word:string): void;
    printWithSpace(sentence:string) : void;
    findVowel(str: string) : void;
}

class StringManipulations implements StringManipulationService{

    print(word:string): void{
        console.log(word);
        console.log(word.toUpperCase());
        console.log(word.toLowerCase());
        console.log("Char At"+word.charAt(2));
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