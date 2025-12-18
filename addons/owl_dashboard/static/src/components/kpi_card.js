/** @odoo-module **/
import { Component } from "@odoo/owl";

export class KPICard extends Component {
    static template = "owl_dashboard.KPICard";
    
    static props = {
        title: String,
        value: [String, Number],
    }
}