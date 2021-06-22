import { api } from '../index';

export class ReportController {
  static getEmployeeReport = (payload) =>
    api.get('/admin/report/employee', { params: payload });
}
