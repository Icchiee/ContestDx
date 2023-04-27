var information;
const arrayinformation=[];
var QRCode = require('qrcode');
const options = {
  errorCorrectionLevel: 'M'   // エラー訂正レベル(L, M, Q, H)
};
exports.home =function(req,res){
  res.render('show/home.ejs');
};

exports.confirm =function(req,res){
  res.render('show/confirm.ejs',{information:information});
};

exports.download =function(req,res){
  res.render('show/download.ejs');
};


exports.create =function(req,res){
  
   informations={
    name:req.body.name,
    subname: req.body.subname,
    namep:req.body.namep,
    subnamep: req.body.subnamep,
    zip: req.body.zip11,
    address: req.body.addr11,
    address2: req.body.address2,
    tel: req.body.tel,
    fax: req.body.fax,
    email: req.body.email,
    school: req.body.school,
    grade: req.body.grade,
    sex: req.body.sex,
    birth: req.body.birth,
    age: req.body.age,
    title: req.body.title,
    reference: req.body.reference
  };

 var arrayinformations=
  [req.body.name,
   req.body.subname,
   req.body.namep,
   req.body.subnamep,
   req.body.zip11,
   req.body.addr11,
   req.body.address2,
   req.body.school,
   req.body.grade,
   req.body.sex,
   req.body.birth,
   req.body.age,
   req.body.tel,
   req.body.fax,
   req.body.email,
   req.body.title,
   req.body.reference
  ];

  information = informations;
  for(var i =0; i<17;i++){
     arrayinformation[i]=arrayinformations[i];
  }
  res.redirect('/show/confirm');
};

exports.make =function(req,res){
  var str = JSON.stringify(
    arrayinformation[0] +','+ arrayinformation[1] + ',' + arrayinformation[2] + ',' + arrayinformation[3] + ',' +"'" +arrayinformation[4] + "'"+ ',' + arrayinformation[5] + ',' + arrayinformation[6] + ',' + arrayinformation[7] + ',' + arrayinformation[8] + ',' + arrayinformation[9] + ',' +"'"+ arrayinformation[10] +"'"+ ',' + arrayinformation[11] + ',' +"'"+ arrayinformation[12]+ "'"+ ',' + arrayinformation[13] + ',' + arrayinformation[14] + ',' + arrayinformation[15] + ',' + arrayinformation[16]);
  console.log(str);
  QRCode.toFile('QRcode.png', str,options);

  res.redirect('/show/download');


};

exports.show =function(req,res){


  res.render('show/show.ejs');

};
