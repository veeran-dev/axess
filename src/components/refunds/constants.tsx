import { Action, CellType } from "../table/tableInterface";

export const title = 'Top Refund Requests';
export const actions:Action[] = [{
    label: "View all"
}]


export const columnOrderData = [
  { path: 'refundId', type: CellType.HIDDEN, as: 'ID' },
  { path: 'refundId', type: CellType.TEXT, as: 'Refund' },
  { path: 'ticketId', type: CellType.TEXT, as: 'Ticket' },
  { path: 'firstName', type: CellType.TEXT, as: 'Name' },
  { path: 'email', type: CellType.TEXT, as: 'Email' },
  { path: 'amount', type: CellType.TEXT, as: 'Amount' },
  { path: 'reason', type: CellType.TEXT, as: 'Reason' },
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


export const refundStatuses = [
  {
    id: '1',
    label: 'Done'
  },
  {
    id: '2',
    label: 'In Progress'
  }
]