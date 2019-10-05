#!/usr/bin/env ts-node

class Person {
    public children: Person[] = [];
    constructor(public name: string) { }

    addChild(child: Person): Person {
        this.children.push(child)
        return this;
    }

    introduceFamily():void{
        console.log(this.name)
        this.children.forEach((e)=>{
            console.log(e.name)
        })
    }
}

let grandpa = new Person("外公")
let child1 = new Person("孩子1")
let child2 = new Person("孩子2")

grandpa.addChild(child2).addChild(child1)
grandpa.introduceFamily()
