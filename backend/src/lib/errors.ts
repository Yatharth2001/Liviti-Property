export class AppError extends Error {
  public readonly status: number;
  public readonly code: string;

  constructor(message: string, status: number = 500, code: string = "INTERNAL_ERROR") {
    super(message);
    this.status = status;
    this.code = code;
    this.name = "AppError";
  }
}

export const createErrorResponse = (error: AppError) => ({
  error: {
    code: error.code,
    message: error.message,
  },
});

export const createValidationErrorResponse = (message: string) => ({
  error: {
    code: "BAD_REQUEST",
    message,
  },
});
