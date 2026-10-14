
import HttpError from './app.error.js';

export class BadRequestException extends HttpError {
    constructor(message = 'bad request', data = {}, code = 'BAD_REQUEST') {
        super(message, 400, data, code);
    }
}

export class ConflictException extends HttpError {
    constructor(message = 'conflict', data = {}, code = 'CONFLICT') {
        super(message, 409, data, code);
    }
}