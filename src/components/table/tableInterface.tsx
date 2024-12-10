export enum CellType {
    TEXT= 'text',
    PILL='pill',
    CURRENCY='currency',
    WARNING='warning',
    TEXT_BOX='textBox',
    DATE_TIME='dateTime',
    NUMBER_BOX='numberBox',
    HIDDEN='hidden',
    POPUP='popup'
}

export interface TableCell {
    type?: CellType;
    value: string | string[] | number | number[];
    currencyCode?: 'USD' | 'INR' | 'EUR';
    error: boolean;
}

export interface Action {
    id?:string;
    label: string;
    type?: 'Popup';
    icon?: React.ReactElement
}
export interface TableRow {
    id:string;
    actions: Action[],
    data: {
        [key: string]: TableCell
    }
}

export interface columnOrder{ 
    path: string; 
    type: CellType, 
    currencyCode?: 'USD' | 'INR' | 'EUR';
    as?:string 
}

export interface FilterItem {
    label: string;
    id?: string;
}

export interface rowDataProps {
    [key: string]: string | string[] | number | number[]
}
