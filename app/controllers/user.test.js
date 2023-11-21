import UserController from "./user"
import { describe, expect, it, jest } from '@jest/globals'

const status = {
    OK: "OK",
    FAIL: "FAIL",
    SUCCESS: "Success"
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
                status: status["OK"],
                message: "Success",
                data: expect.any(Object)
            };

            await UserController.findAll(mockRequest, mockResponse);
            expect(mockResponse.json).toHaveBeenLastCalledWith(expectedResult)
        });
    });
});