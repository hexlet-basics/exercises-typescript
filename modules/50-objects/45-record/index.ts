// BEGIN
const createAccessChecker = (
  <Roles extends string | number | symbol, Resource>(permissions: Record<Roles, Array<Resource>>) => (
    (role: Roles, resource: Resource) => permissions[role].includes(resource)
  )
);
// END

export default createAccessChecker;
