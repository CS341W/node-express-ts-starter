import { JSONFileSyncPreset } from "lowdb/node";
const initialData = {
    animals: [
        {
            name: "Dog",
            family: "mammal",
        },
        {
            name: "Cat",
            family: "mammal",
        },
        {
            name: "Snake",
            family: "reptile",
        },
    ],
};
const db = JSONFileSyncPreset("db.json", initialData);
export const database = {
    animals: {
        list() {
            db.read();
            return db.data.animals;
        },
        create(animal) {
            db.data.animals.push(animal);
            db.write();
        },
        remove(name) {
            const index = db.data.animals.findIndex((animal) => animal.name === name);
            db.data.animals.splice(index, 1);
            db.write();
        },
        favorite(name) {
            const index = db.data.animals.findIndex((animal) => animal.name === name);
            db.data.animals[index].isFavorite = !db.data.animals[index].isFavorite;
            db.write();
        },
    },
};
