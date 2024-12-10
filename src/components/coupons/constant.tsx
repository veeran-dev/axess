import { Action, CellType } from "../table/tableInterface";

export const title = 'Coupons';
export const actions:Action[] = [{
    label: "Create Coupon"
}]


export const columnOrderData = [
  { path: 'id', type: CellType.HIDDEN, as: 'ID' },
  { path: 'id', type: CellType.TEXT, as: 'Coupon' },
  { path: 'eventId', type: CellType.TEXT, as: 'Event' },
  { path: 'code', type: CellType.TEXT, as: 'Code' },
  { path: 'discount', type: CellType.TEXT, as: 'Discount' },
  { path: 'status', type: CellType.PILL, as: 'Status' },
  { path: 'createdOn', type: CellType.TEXT, as: 'Created On' },
  { path: 'expiresOn', type: CellType.TEXT, as: 'Expires On' },
];

export const couponData = [
    {
      id: 'DIS10001',
      eventId: 'EVE1234567',
      code: 'WEEKEND20',
      discount: '20%',
      status: 'Active',
      createdOn: '2023-10-01',
      expiresOn: '2024-01-01',
    },
    {
      id: 'DIS10002',
      eventId: 'EVE1234568',
      code: 'ENJOY10',
      discount: '10%',
      status: 'Active',
      createdOn: '2023-10-02',
      expiresOn: '2024-01-02',
    },
    {
      id: 'DIS10003',
      eventId: 'EVE1234569',
      code: 'MAR25',
      discount: '25%',
      status: 'Expired',
      createdOn: '2023-10-03',
      expiresOn: '2023-12-31',
    },
    {
      id: 'DIS10004',
      eventId: 'EVE1234570',
      code: 'SAVE15',
      discount: '15%',
      status: 'Active',
      createdOn: '2023-10-04',
      expiresOn: '2024-02-01',
    },
    {
      id: 'DIS10005',
      eventId: 'EVE1234571',
      code: 'FALL10',
      discount: '10%',
      status: 'Active',
      createdOn: '2023-10-05',
      expiresOn: '2024-03-01',
    },
    {
      id: 'DIS10006',
      eventId: 'EVE1234572',
      code: 'SUMMER15',
      discount: '15%',
      status: 'Active',
      createdOn: '2023-10-06',
      expiresOn: '2024-04-01',
    },
    {
      id: 'DIS10007',
      eventId: 'EVE1234573',
      code: 'SPRING20',
      discount: '20%',
      status: 'Inactive',
      createdOn: '2023-10-07',
      expiresOn: '2024-05-01',
    },
    {
      id: 'DIS10008',
      eventId: 'EVE1234574',
      code: 'ENJOY50',
      discount: '50%',
      status: 'Active',
      createdOn: '2023-10-08',
      expiresOn: '2024-06-01',
    },
    {
      id: 'DIS10009',
      eventId: 'EVE1234575',
      code: 'HOLIDAY30',
      discount: '30%',
      status: 'Expired',
      createdOn: '2023-10-09',
      expiresOn: '2024-01-10',
    },
    {
      id: 'DIS10010',
      eventId: 'EVE1234576',
      code: 'BLACKFRI',
      discount: '40%',
      status: 'Active',
      createdOn: '2023-10-10',
      expiresOn: '2024-07-01',
    },
  ];
  
  export const CouponStatuses = [
    {
        id:'1',
        label: 'Expired'
    },
    {
        id:'2',
        label:'Active'
    }
  ]