import CustomError from './custom-error.js';
import StatusCodes from 'http-status-codes';
export default class BadRequest extends CustomError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}
