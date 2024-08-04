export interface LoginPayload {
  usr: string;
  pwd: string;
}

export interface TrackPayload {
  doctype: 'AWB';
  filters: {
    name: [string, string];
  };
}

interface Message {
  name: string;
  owner: string;
  creation: string;
  modified: string;
  modified_by: string;
  docstatus: number;
  idx: number;
  sender: string;
  sender_address: string | null;
  origin_state: string;
  origin_address_line2: string | null;
  sender_name: string;
  origin_area: string | null;
  origin_country: string;
  sender_phone: string | null;
  origin_city: string;
  origin_address_line_1: string | null;
  consignee: string;
  consignee_address: string | null;
  destination_state: string;
  destination_address_line_2: string | null;
  consignee_name: string | null;
  destination_area: string | null;
  destination_country: string;
  consignee_phone: string | null;
  destination_city: string;
  destination_address_line_1: string | null;
  geolocation_evkp: string | null;
  origin_zone: string;
  destination_zone: string;
  destination_branch: string | null;
  origin_branch: string | null;
  branch: string | null;
  shipping_service: string;
  service_type: string | null;
  total_weight: number;
  status: string;
  movable_units: string | null;
  barcode: string;
  amended_from: string | null;
  type: string | null;
  movable_unit: string;
  delivery_time: string | null;
  delivery_due_date: string | null;
  posting_date: string;
  posting_time: string;
  company: string;
  company_currency: string;
  cod: number;
  total_cod: number;
  currency: string;
  exchange_rate: number;
  pieces: number;
  awb_date: string;
  custodian_commission: number;
  overdue: number;
  is_returned: number;
  closed: number;
  awb_terms_template: string | null;
  awb_terms_and_conditions: string | null;
  custodian: string | null;
  assignee: string | null;
  doctype: string;
  fulfillment_service_items: any[];
  fees: Fee[];
  shipment_items: any[];
  scans: Scan[];
}

interface Fee {
  name: number;
  owner: string;
  creation: string;
  modified: string;
  modified_by: string;
  docstatus: number;
  idx: number;
  item_code: string;
  item_name: string;
  paying_party: string;
  exchange_rate: number;
  additional_condition_for_due_on: string | null;
  amount: number;
  base_amount: number;
  original_amount: number;
  billed_amt: number;
  due_on: string | null;
  parent: string;
  parentfield: string;
  parenttype: string;
  doctype: string;
}

interface Scan {
  name: number;
  owner: string;
  creation: string;
  modified: string;
  modified_by: string;
  docstatus: number;
  idx: number;
  created_on: string;
  scan_comment: string | null;
  added_by: string;
  scan_date: string;
  scan: string;
  parent: string;
  parentfield: string;
  parenttype: string;
  doctype: string;
}

export interface TrackShipmentResponse {
  message: Message;
}
