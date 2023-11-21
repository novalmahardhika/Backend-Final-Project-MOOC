jest.mock("bcrypt", () => ({
	hash: jest.fn(),
	compare: jest.fn()
}));

jest.mock("jsonwebtoken", () => ({
	sign: jest.fn(),
	verify: jest.fn()
}));

jest.mock("../repositories/user", () => ({
	findByPk: jest.fn()
}));

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authService = require("./auth");
const UserRepo = require("../repositories/user");
const ApplicationError = require("../../config/errors/ApplicationError.js");

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
};

describe("AuthService", () => {
	describe("#encryptPassword", () => {

		it("returns encrypted password", async () => {
			const mockPassword = "password";
			const mockHashedPassword = "encrypted";
			bcrypt.hash.mockResolvedValue(mockHashedPassword);
			
			const hashedPassword = await authService.encryptPassword(mockPassword);
			
			expect(hashedPassword).toBe(mockHashedPassword);
		});
		
		it("throws ApplicationError when hashing fails", async () => {
			const err = new ApplicationError("Hashing failed", 500);
			const mockPassword = "password";
			const expectedResult = `Encrypt password error. ${err.message}`;

			bcrypt.hash.mockRejectedValue(err);
			
			const result = async () => {await authService.encryptPassword(mockPassword)};
			expect(result).rejects.toThrow(expectedResult);
		});
	});

	describe("#cmpPassword", () => {
		it("Should return boolean", async () => {
			const mockPassword = "password";
			const mockHashedPassword = "encrypted";
			bcrypt.compare.mockResolvedValue(true);

			const isMatch = await authService.cmpPassword(mockPassword, mockHashedPassword);

			expect(isMatch).toBe(true);
		});
		
		it("throws ApplicationError when compare fails", async () => {
			const err = new ApplicationError("Compare fail");
			const mockPassword = "password";
			const mockHashedPassword = "encrypted";
			const expectedResult = `Password compare error. ${err.message}`;

			bcrypt.compare.mockRejectedValue(err);
			
			const result = async () => {await authService.cmpPassword(mockPassword, mockHashedPassword)};
			expect(await result).rejects.toThrow(expectedResult);
		});
	});

	describe("#createToken", () => {
		it("Should return token", () => {
			const mockToken = "TOKEN";
			jwt.sign.mockReturnValue(mockToken);
	
			const token = authService.createToken({ id: 1 });
			expect(token).toBe(mockToken);
		});
	});

	describe("#verifyToken", () => {
		it("Should return boolean", () => {
			jwt.verify.mockReturnValue({ ...userDummy.root });

			const verify = authService.verifyToken("TOKEN");
			expect(verify).toEqual({ ...userDummy.root });
		});
	});

	describe("#authorize", () => {
		it("Should authorize and return user", async () => {
			jwt.verify.mockReturnValue({ ...userDummy.root });

			UserRepo.findByPk.mockResolvedValue({ ...userDummy.root })
			const user = await authService.authorize("token");

			expect(user).toEqual({ ...userDummy.root });
		});

		it("Should throw caused by null token", async () => {
			const user = async () => {await authService.authorize("")};

			expect(user).rejects.toThrow("Unauthorized");
		});

		it("Should throw caused by null user", async () => {
			UserRepo.findByPk.mockResolvedValue(null);
			const user = async () => {await authService.authorize("TOKEN")};

			expect(user).rejects.toThrow("Unauthorized");
		});

		it("Should catch error", async () => {
			const err = new ApplicationError("Unknown Error");
			jwt.verify.mockImplementation(() => {throw err});

			const user = async () => {await authService.authorize("TOKEN")};

			expect(user).rejects.toThrow(err);
		});
	});
});