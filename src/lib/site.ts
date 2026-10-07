export const site = {
  name: "Липа",
  city: "Ярославль",
  since: 2016,
  phone: {
    display: "+7 (4852) 67-30-14",
    href: "tel:+74852673014",
  },
  address: {
    street: "ул. Полушкина Роща, 16",
    building: "строение 3",
  },
  hours: [
    { days: "Вторник — суббота", short: "Вт–сб", time: "10:00–19:00" },
    { days: "Воскресенье, понедельник", short: "Вс, пн", time: "выходной" },
  ],
};

export const nav = [
  { href: "/raboty", label: "Работы" },
  { href: "/masterskaya", label: "Мастерская" },
  { href: "/zakaz", label: "Заказ" },
  { href: "/kontakty", label: "Контакты" },
] as const;
