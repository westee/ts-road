interface Human{
    name: string;
    age: number,
    say(word: string):void;
}

let wang: Human = {
    name: '王',
    age: 18,
    say(word: string){
        console.log(word+this.name)
    }
}

wang.say('你好')

// 方法上定义方法
interface add{
    (a: number, b: number): number;
    minus (a: number, b: number): number;
}

let fn = (): add => {
    let x: any = function(a: number, b: number): number{
        return a + b;
    }

    x.minus = function(a: number, b: number): number{
        return a - b;
    }

    return x;
}

let add: add = fn()

console.log(add.minus(3, 2))

// 接口可以继承
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}