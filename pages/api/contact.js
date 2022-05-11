import { faker } from "@faker-js/faker";

export default function handler(req, res) {
  const data = Array.from(Array(100).keys()).map((id) => {
    const [firstname, lastname] = faker.name.findName().split(" ");
    return {
      name: `${firstname} ${lastname}`,
      email: faker.internet.email(firstname, lastname),
      phone_number: faker.phone.phoneNumber(),
      address: faker.address.streetAddress(),
    };
  });

  res.status(200).json({ data });
}
