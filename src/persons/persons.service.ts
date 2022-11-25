import { Body, Injectable } from "@nestjs/common";
import { Person } from "./person.model";

@Injectable()
export class PersonsService {

    listOfPersons: Array<Person> = [
        {
            id: 11,
            name: "Mary Jane",
            phone: 123456

        },
        {
            id: 12,
            name: "Gwen Stacy",
            phone: 234567

        },
        {
            id: 13,
            name: "Felicia hardy",
            phone: 345678

        },
        {
            id: 14,
            name: "Liz Allen",
            phone: 456789

        },
    ];

    generateId() {
        let lastPerson = this.listOfPersons[this.listOfPersons.length - 1];
        return lastPerson.id + 1;
    }

    getAll(): Array<Person> {
        return this.listOfPersons;
    }

    add(newPerson: Person): Person {
        newPerson.id = this.generateId();
        this.listOfPersons.push(newPerson);
        return newPerson;
    }

    changeIt(id: number, updateData:Person): Person {


        for (let person of this.listOfPersons) {
            if (person.id == id) {
                person.name = updateData.name;
                person.phone = updateData.phone;
                return person
            }
        }
    }

    get(id: number): Person {

        for (let person of this.listOfPersons) {
            if (person.id == id) {
                return person

            }
        }
    }


    remove(id: number): Array<Person> {

        let nada: string = "This Person doesnt exist"

        for (let pos: number = 0; pos < this.listOfPersons.length - 1; pos++) {
            if (id == this.listOfPersons[pos].id) { this.listOfPersons.splice(pos, 1); return }
        }
    }
}
