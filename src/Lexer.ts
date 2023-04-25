export class Lexer{
    public components:string[]=[]
    constructor(){}
    public breakdown(data:string){
        const output = data
        .replace(/=/gm, "<span>=</span>")
        .replace(/;/gm, "<span>;</span><br>")
        .replace(/(var|const|let) (.+?)/gm,"<span class='variable'>$1 </span><span>$2</span>")
        .replace(/([0-9]+)/gm, "<span>$1</span>")
        .replace(/function (.+?)( |){/gm, "<span class='function'>function </span><span>$1</span>{<br>")
        .replace(/console/gm, "<span class='variable'>console</span>")
        .replace(/(\..+?)\;/gm, "$1")
        .replace(/}/gm, "<br><span>}</span>")


        console.log(output)
        return(output)
    }
}