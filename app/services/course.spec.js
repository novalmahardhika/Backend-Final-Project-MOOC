jest.mock("../repositories/course", () => ({
	findAll: jest.fn(),
	findByPk: jest.fn(),
	create: jest.fn(),
	destroy: jest.fn().mockResolvedValue(1)
}));

const courseService = require("./course");
const courseRepository = require('../repositories/course');
const ApplicationError = require('../../config/errors/ApplicationError');

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

describe("CourseService", () => {
	describe("#findAll", () => {
		it("Should return course list", async () => {
			const expectedResult = [courseDummy.free.beginner, courseDummy.premium.beginner];
            courseRepository.findAll.mockResolvedValue([courseDummy.free.beginner, courseDummy.premium.beginner]);
			
			expect(await courseService.findAll()).toEqual(expectedResult);
		});
		
		it("throw ApplicationError", async () => {
			const err = new ApplicationError("Failed to retrieve data.", 500);
			const expectedResult = `Failed to retrieve the list of course. ${err.message}`;

			courseRepository.findAll.mockRejectedValue(err);
			
			expect(courseService.findAll()).rejects.toThrow(expectedResult);
		});
	});

	describe("#create", () => {
		it("Should create course", async () => {
            courseRepository.create.mockResolvedValue(courseDummy.free.beginner);

			const result = await courseService.create(courseDummy.free.beginner);

			expect(result).toEqual(courseDummy.free.beginner);
		});
		
		it("throw ApplicationError", async () => {
			const err = new ApplicationError("Sequelize error.", 500);
			const expectedResult = `Failed to add a new course. ${err.message}`;

			courseRepository.create.mockRejectedValue(err);
			
			expect(courseService.create()).rejects.toThrow(expectedResult);
		});
	});

	describe("#update", () => {
		it("Should update course data", async () => {
			const payload = courseDummy.free.beginner;
			const mockRequest = {
				set: jest.fn(),
				save: jest.fn().mockReturnValue(payload)
			};
			
			const result = await courseService.update(mockRequest, payload);
			expect(result).toEqual(payload);
		});
		
		it("throw ApplicationError", async () => {
			const err = new ApplicationError("Sequelize error.", 500);
			const payload = courseDummy.free.beginner;
			const mockRequest = {
				set: jest.fn(),
				save: jest.fn().mockRejectedValue(err)
			};
			const expectedResult = `Failed to update data. ${err.message}`;

			courseRepository.create.mockRejectedValue(err);
			
			expect(courseService.update(mockRequest, payload)).rejects.toThrow(expectedResult);
		});
	});

	describe("#findByPk", () => {
		it("Should get course model data", async () => {
			const model = courseDummy.free.beginner;

            courseRepository.findByPk.mockResolvedValue(model);

			const result = await courseService.findByPk(model.id);
			expect(result).toEqual(model);
		});
		
		it("Should not found any data and throw ApplicationError", async () => {
			const err = new ApplicationError("Failed to get course by ID. Course not found", 500);
			const model = courseDummy.free.beginner;

            courseRepository.findByPk.mockResolvedValue(null);

			const result = async () => await courseService.findByPk(model.id);
			expect(result).rejects.toThrow(err);
		});
	});

	describe("#destroy", () => {
		it("Should return the number of destroyed rows", async () => {
			const result = await courseService.destroy(1);
			expect(result).toBe(1);
		});
		
		it("throw ApplicationError", async () => {
			const err = new Error("Sequelize error.");
			const expectedResult = new ApplicationError(`Failed to delete data. ${err.message}`, 500);

            courseRepository.destroy.mockRejectedValue(err);

			const result = async () => await courseService.destroy(1);
			expect(result).rejects.toThrow(expectedResult);
		});
	});
});