import { Action, CellType } from "../table/tableInterface";

export const title = 'Events';
export const actions:Action[] = [{
    label: "Create Event"
}]


export const eventColumnOrderData = [
  { path: 'id', type: CellType.HIDDEN, as: 'ID' },
  { path: 'event', type: CellType.TEXT, as: 'Event' },
  { path: 'organizer', type: CellType.TEXT, as: 'Organizer' },
  { path: 'tickets', type: CellType.TEXT, as: 'Tickets' },
  { path: 'refunds', type: CellType.TEXT, as: 'Refunds' },
  { path: 'status', type: CellType.PILL, as: 'Status' },
  { path: 'date', type: CellType.TEXT, as: 'Event On' },
];


export const eventTableData = [
    {
      id: 1,
      event: "Annual Music Festival Gala",
      organizer: "Harmony Events",
      tickets: 1500,
      refunds: 20,
      status: "Active",
      date: "2024-12-20",
    },
    {
      id: 2,
      event: "Contemporary Art Exhibition Showcase",
      organizer: "Artistic Minds",
      tickets: 1200,
      refunds: 15,
      status: "Active",
      date: "2024-12-22",
    },
    {
      id: 3,
      event: "International Tech Conference Meetup",
      organizer: "Tech World",
      tickets: 3000,
      refunds: 50,
      status: "Active",
      date: "2024-12-25",
    },
    {
      id: 4,
      event: "National Startup Founders Meetup",
      organizer: "Startup Inc.",
      tickets: 800,
      refunds: 10,
      status: "Active",
      date: "2024-12-27",
    },
    {
      id: 5,
      event: "Gourmet Food Carnival Fest",
      organizer: "Foodies United",
      tickets: 2000,
      refunds: 30,
      status: "Active",
      date: "2024-12-29",
    },
    {
      id: 6,
      event: "Global Literary Book Fair",
      organizer: "ReadMore Events",
      tickets: 1800,
      refunds: 25,
      status: "Inactive",
      date: "2024-12-31",
    },
    {
      id: 7,
      event: "Standup Comedy Special Night",
      organizer: "Laugh House",
      tickets: 2500,
      refunds: 20,
      status: "Active",
      date: "2025-01-02",
    },
    {
      id: 8,
      event: "Drama and Theater Night Showcase",
      organizer: "Theater Group",
      tickets: 2200,
      refunds: 35,
      status: "Inactive",
      date: "2025-01-04",
    }
]