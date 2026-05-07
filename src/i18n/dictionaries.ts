export type Language = "en" | "es";

export const dictionaries = {
  en: {
    nav: {
      filter: "Smart Money Filter",
      course: "Course 101",
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
      badge: "Special MVP",
      course_name: "Passive Investing 101 Course",
      course_desc: "The system you need to trade without stress.",
      price: "$30",
      payment_type: "one-time payment",
      features: [
        "Lifetime access to 5-10 video lessons.",
        "Learn to read Smart Money.",
        "Basic use of the Weinstein system.",
        "Automated access after payment.",
        "No hidden subscriptions."
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
      course: "Curso 101",
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
      badge: "MVP Especial",
      course_name: "Curso Inversión Pasiva 101",
      course_desc: "El sistema que necesitas para operar sin estrés.",
      price: "$30",
      payment_type: "pago único",
      features: [
        "Acceso de por vida a 5-10 lecciones en video.",
        "Aprende a leer el Smart Money.",
        "Uso básico del sistema de Weinstein.",
        "Acceso automatizado post-pago.",
        "Sin suscripciones ocultas."
      ],
      btn_buy: "Comprar Acceso Inmediato",
      stripe_msg: "Pago seguro procesado por Stripe.",
    },
    footer: {
      rights: "Todos los derechos reservados.",
    }
  }
};
