const ApplicationError = require("../../config/errors/ApplicationError.js");
const UserController = require("./user");
// const { describe, expect, it, jest } = require('@jest/globals');


jest.mock("../services/user", () => ({
    findAll: jest.fn(),
    create: jest.fn(),
    checkUser: jest.fn()
}));

const userService = require("../services/user");

const status = {
    OK: "OK",
    FAIL: "FAIL",
    SUCCESS: "Success"
}

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

describe("UserController", ()=> {
    const mockRequest = {};
    const mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
        setHeader: jest.fn()
    };
    const mockNext = jest.fn().mockReturnThis();

    describe("#findAll", () => {
        it("Should return status and user list", async () => {
            const expectedResult = {
                status: status.OK,
                message: "Success",
                data: expect.any(Object)
            };

            userService.findAll.mockResolvedValue([
                {
                    "id": "72c3f023-6fab-4c4c-a759-f504fbf08c3c",
                    "name": "Johnny",
                    "email": "johnny@gmail.com",
                    "phoneNumber": "082112345678",
                },
                {
                    "id": "b59a9ef2-cd87-418c-ba7e-ca2e64d829d3",
                    "name": "Fikri",
                    "email": "fikri@gmail.com",
                    "phoneNumber": "082112345678",
                }
            ])

            await UserController.findAll(mockRequest, mockResponse);
            expect(mockResponse.json).toHaveBeenLastCalledWith(expectedResult)
        });

        it("Should return data not found", async () => {
            const expectedResult = {
                status: status.FAIL,
                message: "Data not found."
            }

            userService.findAll.mockResolvedValue(null);

            await UserController.findAll(mockRequest, mockResponse);
            expect(mockResponse.json).toHaveBeenLastCalledWith(expectedResult);
        });

        it("Should catch error", async () => {
            const expectedResult = {
                status: status.FAIL,
                message: expect.any(String)
            }

            userService.findAll.mockImplementation(() => {throw new ApplicationError("Failed")});

            await UserController.findAll(mockRequest, mockResponse);
            expect(mockResponse.status).toHaveBeenLastCalledWith(400);
            expect(mockResponse.json).toHaveBeenLastCalledWith(expectedResult);
        });
    });

    describe("#register", () => {
        it("Should register member and return the account", async () => {
            const expectedResult = {
                status: status.OK,
                message: "Data was created successfully.",
                data: expect.any(Object)
            };

            userService.create.mockResolvedValue({ ...userDummy.member })
            await UserController.register(mockRequest, mockResponse);

            expect(mockResponse.status).toHaveBeenLastCalledWith(201);
            expect(mockResponse.json).toHaveBeenLastCalledWith(expectedResult);
        });

        it("Should catch error", async () => {
            const errMsg = "Please input email and password."
            const expectedResult = {
                status: status.FAIL,
                message: errMsg
            }

            userService.create.mockImplementation(() => {throw new ApplicationError(errMsg, 400)});
            await UserController.register(mockRequest, mockResponse);

            expect(mockResponse.json).toHaveBeenLastCalledWith(expectedResult);
        })
    });

    describe("#registerAdmin", () => {
        it("Should register member and return the account", async () => {
            const expectedResult = {
                status: status.OK,
                message: "Data was created successfully.",
                data: expect.any(Object)
            };

            userService.create.mockResolvedValue({ ...userDummy.root })
            await UserController.registerAdmin(mockRequest, mockResponse);

            expect(mockResponse.status).toHaveBeenLastCalledWith(201);
            expect(mockResponse.json).toHaveBeenLastCalledWith(expectedResult);
        });

        it("Should catch error", async () => {
            const expectedResult = {
                status: status.FAIL,
                message: "Please input email and password."
            };

            userService.create.mockImplementation(() => {throw new ApplicationError(`Please input email and password.`, 400);});
            await UserController.registerAdmin(mockRequest, mockResponse);

            expect(mockResponse.status).toHaveBeenLastCalledWith(400);
            expect(mockResponse.json).toHaveBeenLastCalledWith(expectedResult);
        });
    });

    describe("#login", () => {
        it("Should return credential", async () => {
            const expectedResult = {
                status: status.OK,
                message: "Login successfully.",
                data: expect.any(Object)
            };

            userService.checkUser.mockResolvedValue({ ...userDummy.root });
            await UserController.login(mockRequest, mockResponse);

            expect(mockResponse.json).toHaveBeenLastCalledWith(expectedResult);
        });

        it("Should catch error", async () => {
            const errMsg = "Please input email and password.";
            const expectedResult = {
                status: status.FAIL,
                message: errMsg
            }

            userService.checkUser.mockImplementation(() => {throw new ApplicationError(errMsg, 400);});
            await UserController.login(mockRequest, mockResponse);

            expect(mockResponse.json).toHaveBeenLastCalledWith(expectedResult);
        });
    });

    describe("#currentUser", () => {
        it("Should return current user", async () => {
            const expectedResult = {
                status: status.OK,
                message: "Login successfully.",
                data: { ...userDummy.root }
            };
            const mockRequest = {
                user: { ...userDummy.root }
            };

            await UserController.currentUser(mockRequest, mockResponse);

            expect(mockResponse.json).toHaveBeenLastCalledWith(expectedResult);
        });
    });
});