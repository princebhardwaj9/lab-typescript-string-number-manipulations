export interface StringManipulationService{
    print(word:string): void;
    printWithSpace(sentence:string) : void;
    findVowel(str: string) : void;
}

export interface NumberManipulationService{
    findMagic(num: number) : void;
    findPrime(num: number) : void;
}