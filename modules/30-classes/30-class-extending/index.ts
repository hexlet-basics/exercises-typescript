// BEGIN
class HttpError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
  }
}

class NotFoundError extends HttpError {
  constructor(message: string) {
    super(404, message);
  }
}

class UnauthorizedError extends HttpError {
  constructor(message: string) {
    super(401, message);
  }
}

class ForbiddenError extends HttpError {
  constructor(message: string) {
    super(403, message);
  }
}
// END

export { HttpError, NotFoundError, UnauthorizedError, ForbiddenError };
