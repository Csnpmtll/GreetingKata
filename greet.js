function case6(name){
    var x;
    var y;
    for(var i=0;i<name.length;i++){
        if(name[i].isUpperCase()){
            y=name[i]
        }else{
            x.concat(name[i])
        }
        x.concat(y)
    }return x
}function checkUpper(name){
    for(var i=0;i<name.length;i++){
        if(name[i].isUpperCase()){
            return true
        }
    }return false
}
function greet(name){
    if(name == null){
        return "Hello, my friend."
    }else if(Array.isArray(name)){
        if(name.length > 2){
            if(checkUpper(name)){
                var x=case6(name)
                //
                //
                //
                //
                //
            }else{
                return `Hello, ${name.slice(0,name.length-1).join(", ")}, and ${name[name.length-1]}.`
            }
        }else if(name.length == 2){
            return `Hello, ${name.join(" and ")}.`
        }
    }else if(name == name.toUpperCase()){
        return `HELLO ${name.toUpperCase()}!`
    }else{
        return `Hello, ${name}.`
    }
}
module.exports=greet;