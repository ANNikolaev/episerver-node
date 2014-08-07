/**
* Created by ANNikolaev on 07.08.2014.
*/
///<reference path="../.d.ts/Node/node.d.ts" />
///<reference path="../.d.ts/q/Q.d.ts" />
var q = require("q");
var sql = require("mssql");

var config = {
    server: 'localhost',
    database: 'expressen_episerver',
    user: 're_b_e_l',
    password: 'souLesS11'
};

function query(querystring) {
    var defer = q.defer();
    var conn = new sql.Connection(config, function (err) {
        if (err) {
            defer.reject(err);
        } else {
            var request = new sql.Request(conn);
            request.query(querystring, function (err, data) {
                if (err)
                    defer.reject(err);
                else {
                    defer.resolve(data);
                }
            });
        }
    });
    return defer.promise;
}
exports.query = query;
//# sourceMappingURL=db.js.map
