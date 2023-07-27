enum Permission {
  READ,
  WRITE,
  DELETE,
}

type User = {
  login: string,
};

type AdminPermission = {
  permission: Permission,
};

// BEGIN
type Admin = User & AdminPermission;

const addUser = (user: User): Admin => ({ ...user, permission: Permission.READ });
// END

export { User, Admin, Permission };
export default addUser;
