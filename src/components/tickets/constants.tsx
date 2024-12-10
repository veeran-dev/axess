import { Action, CellType } from "../table/tableInterface";

export const title = 'Tickets';
export const actions:Action[] = [{
    label: "View all"
}]


export const ticketColumnOrderData = [
  { path: 'id', type: CellType.HIDDEN, as: 'ID' },
  { path: 'ticketId', type: CellType.TEXT, as: 'Ticket' },
  { path: 'eventName', type: CellType.TEXT, as: 'Event' },
  { path: 'filledSeats', type: CellType.TEXT, as: 'Seats' },
  { path: 'amount', type: CellType.TEXT, as: 'Cost' },
  { path: 'discount', type: CellType.TEXT, as: 'Discount' },
  { path: 'date', type: CellType.TEXT, as: 'Booked On' },
];

export const ticketData = [
  {
    id: 1,
    ticketId: "TCKT001",
    eventName: "Annual Music Festival Gala",
    filledSeats: 150,
    amount: 5000,
    discount: 10,
    date: "2024-12-01",
  },
  {
    id: 2,
    ticketId: "TCKT002",
    eventName: "Contemporary Art Exhibition Showcase",
    filledSeats: 120,
    amount: 3000,
    discount: 5,
    date: "2024-12-02",
  },
  {
    id: 3,
    ticketId: "TCKT003",
    eventName: "International Tech Conference Meetup",
    filledSeats: 300,
    amount: 7000,
    discount: 15,
    date: "2024-12-03",
  },
  {
    id: 4,
    ticketId: "TCKT004",
    eventName: "National Startup Founders Meetup",
    filledSeats: 80,
    amount: 2500,
    discount: 0,
    date: "2024-12-04",
  },
  {
    id: 5,
    ticketId: "TCKT005",
    eventName: "Gourmet Food Carnival Fest",
    filledSeats: 200,
    amount: 4000,
    discount: 8,
    date: "2024-12-05",
  },
  {
    id: 6,
    ticketId: "TCKT006",
    eventName: "Global Literary Book Fair",
    filledSeats: 180,
    amount: 3500,
    discount: 12,
    date: "2024-12-06",
  },
  {
    id: 7,
    ticketId: "TCKT007",
    eventName: "Standup Comedy Special Night",
    filledSeats: 250,
    amount: 4500,
    discount: 10,
    date: "2024-12-07",
  },
  {
    id: 8,
    ticketId: "TCKT008",
    eventName: "Drama and Theater Night Showcase",
    filledSeats: 220,
    amount: 4200,
    discount: 7,
    date: "2024-12-08",
  },
  {
    id: 9,
    ticketId: "TCKT009",
    eventName: "Annual Rock Concert Music Festival",
    filledSeats: 500,
    amount: 15000,
    discount: 20,
    date: "2024-12-09",
  },
  {
    id: 10,
    ticketId: "TCKT010",
    eventName: "Charity Auction and Dinner Gala",
    filledSeats: 50,
    amount: 2000,
    discount: 5,
    date: "2024-12-10",
  },
];

