import { api } from '../index';

export class ReportController {
  static getEmployeeReport = (payload) =>
    api.get('/admin/report/employee', { params: payload });

  static getClientReport = (payload) =>
    api.get('/admin/report/client', { params: payload });

  static getDistrictReport = (payload) =>
    api.get('/admin/report/district', { params: payload });

  static getAppCountReport = (payload) =>
    api.get('/admin/report/app-count', { params: payload });

  static getOrderReport = (payload) =>
    api.get('/admin/report/order', { params: payload });

  static getUserReport = (payload) =>
    api.get('/admin/report/user', { params: payload });

  static getProductReport = () => api.get('/admin/report/product');
}
