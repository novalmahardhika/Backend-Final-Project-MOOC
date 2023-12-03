jest.mock("../models/index", () => ({
	Course: {
		findAll: jest.fn(),
		findByPk: jest.fn(),
		create: jest.fn(),
		destroy: jest.fn().mockResolvedValue(1)
	}
}));

const courseRepository = require("./course");
const courseModel = require('../models/index');
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

describe("CourseController", () => {
	describe("#findAll", () => {
		it("Should return course list", async () => {
			const expectedResult = [courseDummy.free.beginner, courseDummy.premium.beginner];
            courseModel.Course.findAll.mockResolvedValue([courseDummy.free.beginner, courseDummy.premium.beginner]);
			
			expect(await courseRepository.findAll()).toEqual(expectedResult);
		});
		
		it("throw ApplicationError", async () => {
			const expectedResult = new Error('filter is not an object');
			
			expect(await courseRepository.findAll("mock")).toEqual(expectedResult);
		});
	});

	describe("#create", () => {
		it("Should create course", async () => {
            courseModel.Course.create.mockResolvedValue(courseDummy.free.beginner);

			const result = await courseRepository.create(courseDummy.free.beginner);

			expect(result).toEqual(courseDummy.free.beginner);
		});
	});
	
	describe("#destroy", () => {
		it("Should return destroyed course", async () => {
			const expectedResult = courseDummy.free.beginner;
            courseModel.Course.destroy.mockResolvedValue(courseDummy.free.beginner);
			
			expect(await courseRepository.destroy()).toEqual(expectedResult);
		});
		
		it("throw ApplicationError", async () => {
			const expectedResult = new Error('filter is not an object');
			
			expect(await courseRepository.destroy("mock")).toEqual(expectedResult);
		});
	});

	describe("#findByPk", () => {
		it("Should get course model data", async () => {
			const model = courseDummy.free.beginner;

            courseModel.Course.findByPk.mockResolvedValue(model);

			const result = await courseRepository.findByPk(model.id);
			expect(result).toEqual(model);
		});
	});
});