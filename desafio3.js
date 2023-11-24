
class hero {
    constructor(name,age,type){
        this.name = name;
        this.age = age;
        this.type = type;
    }   
    
    atacar(){
        let type = this.type;
        let ataque
        switch (type) {
            case "mago":
                ataque = "magia"
                break
            case "guerreiro":
                ataque = "espada"
                break
            case "monge":
                ataque = "artes marciais"
                break
            case "ninja":
                ataque = "shuriken"
                break
        }
        console.log(`o ${type} atacou usando ${ataque}`);
    }
}

let oPoderoso = new hero("Sung Jin Woo",19,"guerreiro")
oPoderoso.atacar();