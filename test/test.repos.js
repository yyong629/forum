var should = require("should")
    , domain = require("../domain");
	
	domain.seal();
	
	
    var userRepo = domain._my.repos.User;

describe("repos", function () {

    it("#user repository create", function () {

        userRepo.create({
            nickname: "leo",
            loginname: "brighthas",
            password: "brighthas",
            email: "brighthas@gmail.com"}, function (err, userAggre) {
            should.exist(userAggre)
        })

        userRepo.create({
            nickname: "leo",
            loginname: "brighthas",
            password: "brighthas",
            email: "brighthas@gmail.com"}, function (err, userAggre) {
            should.not.exist(userAggre)
        })
    });

	var aggre;

    it("user repository _data2aggre",function(){
        aggre = userRepo._data2aggre({
            id:"id001",
            nickname: "leo",
            loginname: "brighthas",
            password: "111111",
            email: "brighthas@gmail.com",
			createTime:new Date(),
			fraction:0
		});
        aggre.id.should.eql("id001");
        aggre.nickname.should.eql("leo");
        aggre.password.should.eql("111111");
        aggre.email.should.eql("brighthas@gmail.com");

    })
	
	it("user repository _aggre2data",function(){
		var data = userRepo._aggre2data(aggre);
        aggre.id.should.eql("id001");
        aggre.nickname.should.eql("leo");
        aggre.password.should.eql("111111");
        aggre.email.should.eql("brighthas@gmail.com");
	})

	/**
    it("cloumn repository create", function () {

        columnRepo.create({
            name: "node.js",
            des: "my node.js column"
        }, function (err, rs) {
            rs.model.name().should.eql("node.js");
            rs.model.des().should.eql("my node.js column");
        });

    });
	*/



})