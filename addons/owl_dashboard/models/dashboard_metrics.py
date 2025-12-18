from odoo import models, api
import time


class DashboardMetrics(models.AbstractModel):
    _name = "owl.dashboard.metrics"
    _description = "Dashboard Metrics"

    @api.model
    def get_kpis(self, date_from=None, date_to=None):
        if not self.env.user.has_group('owl_dashboard.group_owl_dashboard_user'):
            return []

        domain = []
        if date_from or date_to:
            domain = self._get_domain(date_from, date_to)

        clients = self.env["res.partner"].search_count(domain)
        return {
            "clients": clients,
            "users": self.env["res.users"].search_count([("active", "=", True)]),
            "companies": self.env["res.company"].search_count([]),
        }
    
    @api.model
    def get_chart_data(self, date_from=False, date_to=False):
        if not self.env.user.has_group('owl_dashboard.group_owl_dashboard_user'):
            return []
        
        domain = []
        if date_from or date_to:
            domain = self._get_domain(date_from, date_to)

        return {
            "labels": ["Clientes", "Usuários", "Empresas"],
            "values": [
                self.env["res.partner"].search_count(domain),
                self.env["res.users"].search_count([("active", "=", True)]),
                self.env["res.company"].search_count([]),
            ],
        }

    def _get_domain(self, date_from=False, date_to=False):
        domain = []

        if date_from:
            domain.append(("create_date", ">=", date_from))
        if date_to:
            domain.append(("create_date", "<=", date_to))
        return domain
