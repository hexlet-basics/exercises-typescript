// BEGIN
type Property = string | number | symbol;

const createAccessChecker = (
  <Roles extends Property, Resource>(permissions: Record<Roles, Array<Resource>>) => (
    (role: Roles, resource: Resource) => permissions[role].includes(resource)
  )
);
// END

export default createAccessChecker;
