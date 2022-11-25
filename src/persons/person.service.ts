import { Body, Injectable } from "@nestjs/common";
import { NotFoundException } from "src/config/not-found.exception";
import { Person } from "./person.entity";

@Injectable()
export class PersonsService {

    listOfPersons: Array<Person> = new Array(
        new Person(11, "Mary Jane", 123456),
        new Person(12, "Gwen Stacy", 234567),
        new Person(13, "Liz Allen", 345678),
        new Person(14, 'Felicia Hardy', 456789),
    );

    generateId() {
        let lastPerson = this.listOfPersons[this.listOfPersons.length - 1];
        return lastPerson.getId() + 1;
    }

    getAll(searchName: string): Array<Person> {
        if (searchName != null) {
            let result = [];

            for (let person of this.listOfPersons) {
                if (person.getName() == searchName) {
                    result.push(person);
                }
            }

            return result;
        }

        return this.listOfPersons;
    }

    add(name: string, phone: number): Person {
        const id = this.generateId();
        const newPerson = new Person(id, name, phone);

        this.listOfPersons.push(newPerson);
        return newPerson;
    }

    update(id: number, name: string, phone: number): Person {

        for (let person of this.listOfPersons) {
            if (id == person.getId()) {
                person.changeName(name);
                person.changePhoneNumber(phone);
                return person;
            }
        }

    }

    get(id: number): Person {

        for (let person of this.listOfPersons) {
            if (person.getId() == id) {
                return person

            }
        }
        throw new NotFoundException(`Person with id ${id} not found!`);
    }


    remove(id: number): void {
        for (let pos: number = 0; pos < this.listOfPersons.length; pos++) {
            if (id == this.listOfPersons[pos].getId()) { this.listOfPersons.splice(pos, 1); return }
        }
        throw new NotFoundException(`Person with id ${id} not found!`);
    }
}
