import { CellType } from "../table/tableInterface";

export const revenueChartData = [
    { month: "January", revenue: 4000 },
    { month: "February", revenue: 3000 },
    { month: "March", revenue: 5000 },
    { month: "April", revenue: 4000 },
    { month: "May", revenue: 6000 },
    { month: "June", revenue: 7000 },
  ];

export const pieChartData = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  
export const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export const topCityData = [
    { city: "Mumbai", revenue: 112, maxRevenue: 112 },
    { city: "Goa", revenue: 98, maxRevenue: 112 },
    { city: "Delhi", revenue: 78, maxRevenue: 112 },
];

export const title = 'Refund Requests';

export const columnOrderData = [
  { path: 'refundId', type: CellType.HIDDEN, as: 'ID' },
  { path: 'refundId', type: CellType.TEXT, as: 'Refund' },
  { path: 'firstName', type: CellType.TEXT, as: 'Name' },
  { path: 'amount', type: CellType.TEXT, as: 'Amount' },
  { path: 'status', type: CellType.PILL, as: 'Status' },
];

export const tableData = [
  {
    refundId: 'REF12345',
    ticketId: 'TIC98765',
    firstName: 'John Doe',
    email: 'john.doe@example.com',
    amount: '100.00',
    reason: 'Customer Request',
    status: 'Pending',
  },
  {
    refundId: 'REF23456',
    ticketId: 'TIC87654',
    firstName: 'Jane Smith',
    email: 'jane.smith@example.com',
    amount: '150.00',
    reason: 'Event Canceled',
    status: 'Approved',
  },
  {
    refundId: 'REF34567',
    ticketId: 'TIC76543',
    firstName: 'Alice Brown',
    email: 'alice.brown@example.com',
    amount: '120.00',
    reason: 'Double Payment',
    status: 'Rejected',
  },
  {
    refundId: 'REF45678',
    ticketId: 'TIC65432',
    firstName: 'Bob White',
    email: 'bob.white@example.com',
    amount: '200.00',
    reason: 'Incorrect Amount',
    status: 'Pending',
  },
  {
    refundId: 'REF56789',
    ticketId: 'TIC54321',
    firstName: 'Charlie Green',
    email: 'charlie.green@example.com',
    amount: '250.00',
    reason: 'Other',
    status: 'Approved',
  },
];

export const eventColumnOrderData = [
  { path: 'name', type: CellType.TEXT, as: 'Name' },
  { path: 'location', type: CellType.TEXT, as: 'City' },
  { path: 'totalSeats', type: CellType.TEXT, as: 'Seats' },
  { path: 'onDate', type: CellType.PILL, as: 'OnDate' },
];

export const eventData = [
  {
    name: "Music Festival",
    location: "Mumbai",
    onDate: "2024-12-20",
    totalSeats: 5000,
  },
  {
    name: "Art Exhibition",
    location: "Delhi",
    onDate: "2024-12-22",
    totalSeats: 3000,
  },
  {
    name: "Tech Conference",
    location: "Bangalore",
    onDate: "2024-12-25",
    totalSeats: 7000,
  },
  {
    name: "Food Carnival",
    location: "Chennai",
    onDate: "2024-12-27",
    totalSeats: 4000,
  },
  {
    name: "Startup Meetup",
    location: "Hyderabad",
    onDate: "2024-12-30",
    totalSeats: 2500,
  },
];
