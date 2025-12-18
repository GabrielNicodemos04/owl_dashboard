{
    "name": "OWL Dashboard",
    "version": "1.0.0",
    "summary": "Dashboard com OWL e métricas",
    "category": "Tools",
    "author": "Gabriel Eduardo de C. Nicodemos",
    "depends": ["base", "web"],
    "data": [
        "data/owl_dashboard_groups.xml",
        "views/dashboard_menu.xml",
    ],
    "assets": {
        "web.assets_backend": [
            'https://cdn.jsdelivr.net/npm/chart.js',
            "owl_dashboard/static/src/js/dashboard.js",
            "owl_dashboard/static/src/components/kpi_card.js",
            "owl_dashboard/static/src/components/chart_card.js",
            "owl_dashboard/static/src/xml/dashboard.xml",
            "owl_dashboard/static/src/xml/kpi_card.xml",
            "owl_dashboard/static/src/xml/chart_card.xml",
            "owl_dashboard/static/src/css/dashboard.css",
        ],
    },
    "installable": True,
    "application": False,
}
