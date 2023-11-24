const ApplicationError = require("../../config/errors/ApplicationError.js");
const CourseController = require("./course.js");
// const { describe, expect, it, jest } = require('@jest/globals');


jest.mock("../services/course", () => ({
    findByPk: jest.fn(),
    findAll: jest.fn(),
    create: jest.fn(),
    checkUser: jest.fn(),
    destroy: jest.fn(),
    update: jest.fn()
}));

const courseService = require("../services/course.js");

const status = {
    OK: "OK",
    FAIL: "FAIL",
    SUCCESS: "Success"
};

const courseDummy = {
    premium: {
        beginner: {
            id: "a6b49292-7b16-4a00-be52-bd623df09b1f",
            title: "BackEnd",
            type: "Premium",
            level: "Beginner",
            price: 200000,
            image: "./image.png",
            creator: "John Doe",
            createdAt: "2023-11-23T10:08:13.005Z",
            updatedAt: "2023-11-23T10:08:13.005Z"
        }
    },
    free: {
        beginner: {
            id: "a6b49292-7b16-4a00-be52-bd623df09b1f",
            title: "BackEnd",
            type: "Free",
            level: "Beginner",
            price: 300000,
            image: "./image2.png",
            creator: "Lay Crestine",
            createdAt: "2023-11-23T10:08:00.929Z",
            updatedAt: "2023-11-23T10:08:00.929Z"
        }
    }
};

describe("CourseController", ()=> {
    const mockRequest = {};
    const mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
        setHeader: jest.fn()
    };
    const mockNext = jest.fn().mockReturnThis();

    describe("#list", () => {
        const mockRequest = {
            query: {}
        };

        it("Should return status and course list", async () => {
            const expectedResult = {
                status: status.OK,
                message: "Success",
                data: [courseDummy.free.beginner, courseDummy.premium.beginner]
            };

            courseService.findAll.mockResolvedValue([courseDummy.free.beginner, courseDummy.premium.beginner])
            await CourseController.list(mockRequest, mockResponse);

            expect(mockResponse.json).toHaveBeenLastCalledWith(expectedResult)
        });

        it("Should return data not found", async () => {
            const expectedResult = {
                status: status.OK,
                message: "Success",
                data: [courseDummy.premium.beginner]
            };
            const mockRequest = {
                query: {
                    type: "Premium"
                }
            };

            courseService.findAll.mockResolvedValue([courseDummy.premium.beginner]);
            await CourseController.list(mockRequest, mockResponse);
            
            expect(mockResponse.json).toHaveBeenLastCalledWith(expectedResult);
        });

        it("Should catch error", async () => {
            const errMsg = "Failed";
            const expectedResult = {
                status: status.FAIL,
                message: errMsg
            };

            courseService.findAll.mockRejectedValue(new ApplicationError(errMsg));
            await CourseController.list(mockRequest, mockResponse);

            expect(mockResponse.status).toHaveBeenLastCalledWith(500);
            expect(mockResponse.json).toHaveBeenLastCalledWith(expectedResult);
        });
    });

    describe("#create", () => {
        it("Should create new course", async () => {
            const expectedResult = {
                status: status.OK,
                message: "Success",
                data: courseDummy.free.beginner
            };

            courseService.create.mockResolvedValue({ ...courseDummy.free.beginner });
            await CourseController.create(mockRequest, mockResponse);

            expect(mockResponse.status).toHaveBeenLastCalledWith(201);
            expect(mockResponse.json).toHaveBeenLastCalledWith(expectedResult);
        });

        it("Should catch error", async () => {
            const errMsg = "Fail to create course"
            const expectedResult = {
                status: status.FAIL,
                message: errMsg
            }

            courseService.create.mockRejectedValue(new ApplicationError(errMsg));
            await CourseController.create(mockRequest, mockResponse);

            expect(mockResponse.status).toHaveBeenLastCalledWith(500);
            expect(mockResponse.json).toHaveBeenLastCalledWith(expectedResult);
        });
    });

    describe("#update", () => {
        it("Should update course", async () => {
            const expectedResult = {
                status: status.OK,
                message: "Data was updated successfully.",
                data: courseDummy.premium.beginner
            };
            const mockRequest = {
                body: {
                    ...courseDummy.premium.beginner
                }
            };

            courseService.update.mockResolvedValue({ ...courseDummy.premium.beginner });
            await CourseController.update(mockRequest, mockResponse);

            expect(mockResponse.status).toHaveBeenLastCalledWith(201);
            expect(mockResponse.json).toHaveBeenLastCalledWith(expectedResult);
        });
        
        it("Should catch error", async () => {
            const errMsg = "Fail to update course";
            const expectedResult = {
                status: status.FAIL,
                message: errMsg
            };

            courseService.update.mockRejectedValue(new ApplicationError(errMsg, 400));
            await CourseController.update(mockRequest, mockResponse);

            expect(mockResponse.json).toHaveBeenLastCalledWith(expectedResult);
        });
    });

    describe("#findAndSetById", () => {
        it("Should get course data by ID", async () => {
            const mockRequest = {
                params: {
                    id: courseDummy.free.beginner.id
                }
            };

            courseService.findByPk.mockResolvedValue({ ...courseDummy.free.beginner });
            await CourseController.findAndSetById(mockRequest, mockResponse, mockNext);

            expect(mockRequest.course).toEqual(courseDummy.free.beginner);
        });

        it("Should catch error", async () => {
            const errMsg = "Fail to find course"
            const mockRequest = {
                params: {}
            };
            const expectedResult = {
                status: status.FAIL,
                message: errMsg
            }

            courseService.findByPk.mockRejectedValue(new ApplicationError(errMsg));
            await CourseController.findAndSetById(mockRequest, mockResponse, mockNext);

            expect(mockResponse.status).toHaveBeenLastCalledWith(500);
            expect(mockResponse.json).toHaveBeenLastCalledWith(expectedResult);
        });
    });
    
    describe("#destroyById", () => {
        it("Should delete a course", async () => {
            const expectedResult = {
                status: status.OK,
                message: "Deleted successfully.",
                data: courseDummy.premium.beginner
            };
            const mockRequest = {
                course: {
                    ...courseDummy.premium.beginner
                }
            };

            courseService.destroy.mockResolvedValue(null);
            await CourseController.destroyById(mockRequest, mockResponse);

            expect(mockResponse.json).toHaveBeenLastCalledWith(expectedResult);
        });

        it("Should catch error", async () => {
            const errMsg = "Fail to delete course"
            const mockRequest = {
                course: {}
            };
            const expectedResult = {
                status: status.FAIL,
                message: errMsg
            }

            courseService.destroy.mockRejectedValue(new ApplicationError(errMsg));
            await CourseController.destroyById(mockRequest, mockResponse, mockNext);

            expect(mockResponse.status).toHaveBeenLastCalledWith(500);
            expect(mockResponse.json).toHaveBeenLastCalledWith(expectedResult);
        });
    });

    describe("#detail", () => {
        it("Should return current course detail", async () => {
            const expectedResult = {
                status: status.OK,
                message: "Success",
                data: courseDummy.free.beginner
            };
            const mockRequest = {
                course: courseDummy.free.beginner
            };

            await CourseController.detail(mockRequest, mockResponse);

            expect(mockResponse.json).toHaveBeenLastCalledWith(expectedResult);
        });
    });
});