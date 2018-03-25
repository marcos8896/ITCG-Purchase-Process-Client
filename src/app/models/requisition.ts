import { BudgetKeyInterface } from './budget-key';
import { BossDepartmentInterface } from './boss-department';
import { ConceptRequisition } from './concept-requisition';
import { Provider } from './provider';
import { PurchaseOrderRequisition } from './purchase-order-requisition';

export interface Requisition {
  acceptance_date?: Date;
  action?: string;
  boss_department?: BossDepartmentInterface;
  boss_departmentId?: number | string;
  budget_key?: BudgetKeyInterface;
  budget_keyId?: number | string;
  check_boss?: string;
  check_planning?: string;
  check_subdirection?: string;
  concept_requisition?: ConceptRequisition [];
  date?: Date;
  folio?: number;
  id?: number;
  provider?: Provider;
  purchase_order_Requisition?: PurchaseOrderRequisition [];
  status?: string
}


