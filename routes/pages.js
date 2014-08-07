/**
* Created by ANNikolaev on 07.08.2014.
*/
///<reference path="../.d.ts/Node/node.d.ts" />
///<reference path="../.d.ts/Express/express.d.ts" />
///<reference path="../db/db.ts" />
var express = require('express');
var db = require("../db/db");
var router = new express.Router();

/* GET home page. */
router.get('/:parentId', function (req, res) {
    db.query('select tblPageLanguage.Name, tblPage.pkID as pageId ' + 'from dbo.tblPage inner join dbo.tblPageLanguage on tblPage.pkID=tblPageLanguage.fkPageID ' + 'where fkParentID=' + req.params.parentId).then(function (data) {
        res.send(data);
    }).catch(function (err) {
        console.log(err);
        res.send(err);
    });
});

module.exports = router;
//# sourceMappingURL=pages.js.map
