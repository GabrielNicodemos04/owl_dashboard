/** @odoo-module **/

import { Component, useState, onWillStart  } from "@odoo/owl";
import { ChartCard } from "../components/chart_card";
import { registry } from "@web/core/registry";
import { KPICard } from "../components/kpi_card";
import { rpc } from "@web/core/network/rpc";

export class Dashboard extends Component {
    static components = { KPICard, ChartCard };

    setup() {
        this.state = useState({
            loading: true,
            kpis: [],
            chartData: {
                labels: [],
                values: [],
            },
            filters: {
                date_from: "",
                date_to: "",
            }
        });

        this.loadKpis();
    }

    async loadKpis() {
        this.state.loading = true;
        await this.loadChartData();
        await this.loadKpisData();
        this.state.loading = false;
    }

    async loadChartData() {
        const chartData = await rpc("/web/dataset/call_kw", {
            model: "owl.dashboard.metrics",
            method: "get_chart_data",
            args: [
                this.state.filters.date_from || false,
                this.state.filters.date_to || false,
            ],
            kwargs: {},
        });

        this.state.chartData.labels = chartData.labels;
        this.state.chartData.values = chartData.values;
    }

    async loadKpisData() {
        const data = await rpc("/web/dataset/call_kw", {
            model: "owl.dashboard.metrics",
            method: "get_kpis",
            args: [
                this.state.filters.date_from || false,
                this.state.filters.date_to || false,
            ],
            kwargs: {},
        });

        this.state.kpis = [
            { title: "Clientes", value: data.clients },
            { title: "Usuários", value: data.users },
            { title: "Empresas", value: data.companies },
        ];
    }
}

Dashboard.template = "owl_dashboard.Dashboard";
registry.category("actions").add("owl_dashboard", Dashboard);
