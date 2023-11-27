jest.mock("../models/index", () => ({
	User: {
		findAll: jest.fn(),
		findByPk: jest.fn(),
		create: jest.fn(),
	}
}));

const userRepository = require("./user");
const userModel = require('../models/index');

const userDummy = {
    root: {
        id: "2756f94e-bdc9-491c-be16-a8844b12bbb3",
        name: "root",
        email: "root@gmail.com",
        phoneNumber: "082112345678",
        address: "Earth",
        role: "ROOT",
        createdAt: "2023-11-21T07:01:44.934Z",
        updatedAt: "2023-11-21T07:01:44.934Z"
    },
    member: {
        id: "72c3f023-6fab-4c4c-a759-f504fbf08c3c",
        name: "Johnny",
        email: "johnny@gmail.com",
        phoneNumber: "082112345678",
        address: null,
        role: "MEMBER",
        createdAt: "2023-11-21T07:01:44.829Z",
        updatedAt: "2023-11-21T07:01:44.829Z"
    }
}

describe("CourseController", () => {
	describe("#findAll", () => {
		it("Should return user list", async () => {
			const expectedResult = [userDummy.member, userDummy.root];
            userModel.User.findAll.mockResolvedValue([userDummy.member, userDummy.root]);
			
			expect(await userRepository.findAll()).toEqual(expectedResult);
		});
	});

	describe("#create", () => {
		it("Should create course", async () => {
            userModel.User.create.mockResolvedValue(userDummy.root);

			const result = await userRepository.create(userDummy.root);

			expect(result).toEqual(userDummy.root);
		});
	});

	describe("#findByPk", () => {
		it("Should get course model data", async () => {
			const model = userDummy.member;

            userModel.User.findByPk.mockResolvedValue(model);

			const result = await userRepository.findByPk(model.id);
			expect(result).toEqual(model);
		});
	});
});