import * as msi from "misaki-studio-internal";
export type ApiRequests = {};
export type ApiResponse = {};
export type State = {
  user: { isLoggedIn: boolean };
  sign_in: { email?: string; password?: string; type?: string };
  sign_up: {
    email?: string;
    password?: string;
    firstName?: string;
    secondName?: string;
  };
  resetPassword: { password?: string };
  forgetPassword: { email?: string };
};
export const StorageInstant = new msi.storage.Storage<
  State,
  ApiRequests,
  ApiResponse
>(
  {
    user: { isLoggedIn: false },
    sign_in: { email: undefined, password: undefined, type: undefined },
    sign_up: {
      email: undefined,
      password: undefined,
      firstName: undefined,
      secondName: undefined,
    },
    resetPassword: { password: undefined },
    forgetPassword: { email: undefined },
  },
  (storage) => ({}),
);
