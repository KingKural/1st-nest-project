import { Body, Injectable } from "@nestjs/common";
import { Person } from "./person.entity";

@Injectable()
export class PersonsService {

    listOfPersons: Array<Person> = new Array(
        new Person(11, "Mary Jane", 123456),
        new Person(12, "Gwen Stacy", 234567),
        new Person(13, "Liz Allen", 345678),
        new Person(14, "Felicia Hardy", 456789),
    );

    generateId() {
        let lastPerson = this.listOfPersons[this.listOfPersons.length - 1];
        return lastPerson.id + 1;
    }

    getAll(): Array<Person> {
        return this.listOfPersons;
    }

    add(name: string, phone:number): Person {
        const id = this.generateId();
        const newPerson = new Person(id,name,phone);

        this.listOfPersons.push(newPerson);
        return newPerson;
    }

    changeIt(id: number, updateData: Person): Person {


        for (let person of this.listOfPersons) {
            if (person.id == id) {
                person.name = updateData.name;
                person.phone = updateData.phone;
                return person
            }
        }
        return null;
    }

    get(id: number): Person {

        for (let person of this.listOfPersons) {
            if (person.id == id) {
                return person

            }
        }
        return null;
    }


    remove(id: number): Array<Person> {

        let nada: string = "This Person doesnt exist"

        for (let pos: number = 0; pos < this.listOfPersons.length - 1; pos++) {
            if (id == this.listOfPersons[pos].id) { this.listOfPersons.splice(pos, 1); return }
        }
        return null;
    }
}
