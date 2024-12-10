import { CellType, columnOrder, TableRow } from "@/components/table/tableInterface";


const getNestedValue = (obj: any, path: string): any => {
    return path.split('.').reduce((acc, key) => {
      if (acc && acc.hasOwnProperty(key)) {
        return acc[key];
      }
      return undefined;
    }, obj);
};

export const transformApiResponseToTableRows = (
    apiData: any[],
    orderedFields: columnOrder[],
  ): TableRow[] => {
    return apiData.map((item) => {
      const row: TableRow = {
          id: "",
          actions: [{label:""}],
          data: {}
      };
  
      orderedFields.forEach(({ path, type }) => {
        const value = getNestedValue(item, path);
        row['id'] = item.id
        row['data'][path] = { error:false, type, value, ...(type === CellType.CURRENCY && { currencyCode: item.currency }) };
      });

      row['actions'] = item['actions']
  
      return row;
    });
  };
  

export const isValidDate = (dateString: string) => {
  console.log("date...",dateString)
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if(dateString === ""){
    return false
  }
  if (!dateRegex.test(dateString)) {
    return false;
  }

  const [year, month, day] = dateString.split('-').map(Number);
  if (year < 1900 || year > new Date().getFullYear()) {
    return false;
  }

  const date = new Date(dateString);
  return !isNaN(date.getTime()) && date.getUTCFullYear() === year && (date.getUTCMonth() + 1) === month && date.getUTCDate() === day;
};

export const toCamelCase=(input:string) =>{
  return input
    .split(' ')
    .map((word, index) => 
      index === 0
        ? word.charAt(0).toUpperCase() + word.slice(1)
        : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join('');
}

export const encodedID = (id:string) => btoa(encodeURIComponent(id))