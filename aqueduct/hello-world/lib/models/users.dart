import 'package:mongo_dart/mongo_dart.dart';

final Db db = Db("mongodb://localhost:27017/tinDev");

class UsersCollection {
  UsersCollection() {
    db.open().then((value) {
      collection = db.collection('users');
    });
  }

  DbCollection collection;

  DbCollection getCollection() {
    return collection;
  }
}