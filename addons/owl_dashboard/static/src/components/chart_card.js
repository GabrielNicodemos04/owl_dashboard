/** @odoo-module **/

import {Component, onWillUnmount, onWillUpdateProps, onMounted, useRef} from "@odoo/owl";

export class ChartCard extends Component {
    static template = "owl_dashboard.ChartCard";

    static props = {
        labels: Array,
        values: Array,
        title: String,
    }

    setup() {
        this.canvasRef = useRef("canvas");
        this.chart = null;
        
        onMounted(() => {
            const canvas = this.canvasRef.el;
            if (!canvas) return;

            const ctx = canvas.getContext("2d");
            this.chart = new Chart(ctx, {
                type: "bar",
                data: {
                    labels: [...this.props.labels],
                    datasets: [{
                        label: this.props.title,
                        data: [...this.props.values],
                    }],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                },
            });
        });

        onWillUnmount(() => {
            if (this.chart) {
                this.chart.destroy();
            }
        });

        onWillUpdateProps((nextProps) => {
            if (!this.chart) return;

            this.chart.data.labels = [...nextProps.labels];
            this.chart.data.datasets[0].data = [...nextProps.values];

            // Redesenha
            this.chart.update();
        });

        this.exportChart = () => {
            if (!this.chart) return;

            const url = this.chart.toBase64Image();
            const link = document.createElement("a");
            link.href = url;
            link.download = `${this.props.title || "chart"}.png`;
            link.click();
        };
    }
}