//Dog.ts
import * as Realm from 'realm';

export default class Dog extends Realm.Object {

  _id!: Realm.BSON.ObjectId;
  _name!: string;

  // Use a generate function instead of a constructor to avoid problems stemming from extending Realm.Object
  static generate(name: string) {
    return {
      _id: new Realm.BSON.ObjectId(),
      _name: name,
    };
  }

  // To use a class as a Realm object type, define the object schema on the static property "schema".
  static schema = {
    name: 'Dog',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      _name: 'string',
    },
  };

  getNameAllUppercase() {
    return this._name.toUpperCase();
  }
}
