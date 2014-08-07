/**
 * Created by ANNikolaev on 07.08.2014.
 */
///<reference path="../.d.ts/Node/node.d.ts" />
///<reference path="../.d.ts/Express/express.d.ts" />
///<reference path="../db/db.ts" />

import express = require('express');
import db = require("../db/db");
var router = new express.Router();


/* GET home page. */
router.get('/:parentId', function(req, res) {

    db.query<{Name:string; pageId:number}[]>('select tblPageLanguage.Name, tblPage.pkID as pageId ' +
        'from dbo.tblPage inner join dbo.tblPageLanguage on tblPage.pkID=tblPageLanguage.fkPageID ' +
        'where fkParentID='+ req.params.parentId)
        .then((data)=> {
            res.send(data);
        }).catch((err)=> {
            console.log(err);
            res.send(err);
        });
});

module.exports = router;