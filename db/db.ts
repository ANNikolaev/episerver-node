/**
 * Created by ANNikolaev on 07.08.2014.
 */
///<reference path="../.d.ts/Node/node.d.ts" />
///<reference path="../.d.ts/q/Q.d.ts" />

import q = require("q");
var sql = require("mssql");

var config = {
    server: 'localhost',
    database: 'expressen_episerver',
    user: 're_b_e_l',
    password: 'souLesS11'
};

export function query<T>(querystring: string) : Q.Promise<T> {

    var defer = q.defer<T>();
    var conn = new sql.Connection(config,function(err){
        if(err) {
            defer.reject(err);
        } else {
            var request = new sql.Request(conn);
            request.query(querystring, function(err,data) {
                if(err)
                    defer.reject(err);
                else
                {
                    defer.resolve(data);
                }
            })
        }
    });
    return defer.promise;
}