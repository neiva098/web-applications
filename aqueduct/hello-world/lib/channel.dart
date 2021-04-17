import 'package:api_aqueduct/models/users.dart';
import 'api_aqueduct.dart';


class ApiAqueductChannel extends ApplicationChannel {
  @override
  Future prepare() async {
    logger.onRecord.listen(
        (rec) => print("$rec ${rec.error ?? ""} ${rec.stackTrace ?? ""}"));
  }

  @override
  Controller get entryPoint {
    final router = Router();
    final usersModel = UsersCollection();

    router.route("/users/:nome").linkFunction((request) async {
      final nome = request.path.variables['nome'];
      final users = await usersModel.getCollection().findOne({"nome": nome});

      return Response.ok(users);
    });

    router.route('/').linkFunction((request) async {
      return Response.ok('Hello world')..contentType = ContentType.text;
    });

    return router;
  }
}
