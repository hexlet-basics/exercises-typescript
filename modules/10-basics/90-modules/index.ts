// BEGIN
namespace Company {
  export function isEmployeeEmail(email: string, domain: string) {
    return email.includes(domain);
  }
}
// END

type User = {
  email: string
}

function authorize(user: User | null) {
  if (user == null) {
    return false;
  }

  const companyDomain = 'hexlet.io';

  return Company.isEmployeeEmail(user.email, companyDomain);
}

export default authorize;
