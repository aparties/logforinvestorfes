export type Language = "en" | "es";

export const dictionaries = {
  en: {
    nav: {
      filter: "Smart Money Filter",
      course: "Courses",
    },
    hero: {
      title: "Invest with logic, not magic promises",
      subtitle: "Discover where the 'Smart Money' is for free and learn a validated system to invest long-term without wasting time.",
      cta_primary: "View Smart Money Free",
      cta_secondary: "Learn to Invest",
    },
    filter: {
      title: "Smart Money Filter",
      free: "Free",
      description: "Monitor the companies with the highest institutional volume in the market, constantly updated.",
      table_title: "Top 5 Active Volume",
      col_asset: "ASSET",
      col_volume: "VOLUME",
      col_change: "CHANGE",
      col_action: "ACTION",
      loading: "Loading market data...",
      btn_view: "View Details",
    },
    calculator: {
      title: "Validation Calculator",
      subtitle: "Discover the cost of NOT investing long-term.",
      label_initial: "Initial Capital ($)",
      label_monthly: "Monthly Contribution ($)",
      label_years: "Years investing",
      results_title: "Your results in {years} years",
      savings: "Traditional Savings (2%)",
      investment: "Passive Investment (8%)",
      losing_msg: "You are losing",
      not_investing_msg: "by not investing.",
    },
    course: {
      title: "From Spectator to Investor",
      subtitle: "A direct, uncomplicated method based on the Weinstein system to start investing passively and safely.",
      badge_basic: "Basic",
      badge_intermediate: "Intermediate",
      badge_bundle: "Best Value",
      course_basic_name: "Passive Investing",
      course_basic_desc: "The basic system to trade without stress.",
      course_basic_price: "$67",
      course_int_name: "Active Investing (Weinstein)",
      course_int_desc: "Advanced methods to time the market.",
      course_int_price: "$147",
      course_bundle_name: "Full Bundle (Basic + Int)",
      course_bundle_desc: "Get both courses and master the market.",
      course_bundle_price: "$167",
      payment_type: "one-time payment",
      features_basic: [
        "Lifetime access to basic video lessons.",
        "Basic use of the Weinstein system.",
        "Automated access after payment."
      ],
      features_int: [
        "Lifetime access to intermediate video lessons.",
        "Learn to read Smart Money deeply.",
        "Advanced use of the Weinstein system."
      ],
      features_bundle: [
        "All features from Basic and Intermediate.",
        "Complete mastering of the system.",
        "Best value for your money."
      ],
      btn_buy: "Buy Immediate Access",
      stripe_msg: "Secure payment processed by Stripe.",
    },
    footer: {
      rights: "All rights reserved.",
    }
  },
  es: {
    nav: {
      filter: "Filtro Smart Money",
      course: "Cursos",
    },
    hero: {
      title: "Invierte con lógica, no con promesas mágicas",
      subtitle: "Descubre dónde está el 'Smart Money' de forma gratuita y aprende un sistema validado para invertir a largo plazo sin perder tiempo operativo.",
      cta_primary: "Ver Smart Money Gratis",
      cta_secondary: "Aprender a Invertir",
    },
    filter: {
      title: "Filtro Smart Money",
      free: "Gratuito",
      description: "Monitorea las empresas con mayor volumen institucional en el mercado, actualizadas constantemente.",
      table_title: "Top 5 Volumen Activo",
      col_asset: "ACTIVO",
      col_volume: "VOLUMEN",
      col_change: "CAMBIO",
      col_action: "ACCIÓN",
      loading: "Cargando datos del mercado...",
      btn_view: "Ver Detalle",
    },
    calculator: {
      title: "Calculadora de Validación",
      subtitle: "Descubre el costo de NO invertir a largo plazo.",
      label_initial: "Capital Inicial ($)",
      label_monthly: "Aporte Mensual ($)",
      label_years: "Años invirtiendo",
      results_title: "Tus resultados en {years} años",
      savings: "Ahorro Tradicional (2%)",
      investment: "Inversión Pasiva (8%)",
      losing_msg: "Estás perdiendo",
      not_investing_msg: "por no invertir.",
    },
    course: {
      title: "Pasa de Espectador a Inversor",
      subtitle: "Un método directo, sin complicaciones y basado en el sistema de Weinstein para empezar a invertir de forma pasiva y protegida.",
      badge_basic: "Básico",
      badge_intermediate: "Intermedio",
      badge_bundle: "Mejor Valor",
      course_basic_name: "Inversión Pasiva",
      course_basic_desc: "El sistema básico que necesitas para operar sin estrés.",
      course_basic_price: "$67",
      course_int_name: "Inversión Activa (Weinstein)",
      course_int_desc: "Métodos avanzados para analizar el mercado.",
      course_int_price: "$147",
      course_bundle_name: "Bundle (Básico + Int)",
      course_bundle_desc: "Obtén ambos cursos y domina el mercado.",
      course_bundle_price: "$167",
      payment_type: "pago único",
      features_basic: [
        "Acceso de por vida a lecciones básicas.",
        "Uso básico del sistema de Weinstein.",
        "Acceso automatizado post-pago."
      ],
      features_int: [
        "Acceso de por vida a lecciones intermedias.",
        "Aprende a leer el Smart Money en profundidad.",
        "Uso avanzado del sistema de Weinstein."
      ],
      features_bundle: [
        "Todas las características de Básico e Intermedio.",
        "Dominio completo del sistema.",
        "La mejor relación calidad-precio."
      ],
      btn_buy: "Comprar Acceso Inmediato",
      stripe_msg: "Pago seguro procesado por Stripe.",
    },
    footer: {
      rights: "Todos los derechos reservados.",
    }
  }
};
