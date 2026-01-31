// ==========================================
//              CENTRO DE DATOS
// ==========================================

// 1. ENLACES PRINCIPALES
export const LINKS = [
    { id: 3, label: "Ubicación (Maps)", icon: "MapPin", url: "https://maps.app.goo.gl/PE7XUMvkjD7TyAHH8?g_st=ic", color: "bg-blue-600 col-span-2" },
    { id: 6, label: "Resultados GENERAL", icon: "Podium", url: "https://boxpodium.com/en/event/690b44fd31dc2f1933a973cd?tab=leaderboards&division=690b454d31dc2f1933a973ce", color: "bg-yellow-500 text-black font-bold border-yellow-400" },
    { id: 7, label: "Resultados MASTER", icon: "Medal", url: "https://boxpodium.com/en/event/690ba4a931dc2f1933a977d8?tab=leaderboards&division=690ba4c131dc2f1933a977d9", color: "bg-orange-600 text-white font-bold border-orange-500" },
    { id: 1, label: "Nación Ranger", icon: "Instagram", url: "https://www.instagram.com/nacion.ranger?igsh=NDg2MG5vOWVwZHpk", color: "bg-gradient-to-r from-purple-600 to-pink-600" },
    { id: 2, label: "Ranger Box", icon: "Dumbbell", url: "https://www.instagram.com/rangerboxtraining?igsh=MTBiaWU0ZXJxcWV2Mg==", color: "bg-zinc-800 border border-zinc-600" },
    { id: 4, label: "StrongFit Games", icon: "Trophy", url: "https://www.instagram.com/strongfitgames_latam?igsh=MjZyZmJ6bmVweWd1", color: "bg-red-700" },
    { id: 5, label: "Comprar Entradas", icon: "Ticket", url: "https://www.eventrid.cl/eventos/strongfitgames/strongfit-games-verano-2026?utm_source=ig&utm_medium=social&utm_content=link_in_bio", color: "bg-green-600" },
];

// 2. ATLETAS NACIÓN RANGER (Tus compañeros)
export const ATHLETE_DATA = {
    "Amateur H": { 
        names: "Pablo & José Armando",
        heats: { 
            "Heat 1": "José Armando (Carril 5)", 
            "Heat 5": "Pablo (Carril 1)" 
        }
    },
    "Scaled H": { 
        names: "Pechan",
        heats: { "Heat 2": "Pechan (Carril 8)" }
    },
    "Rx H": { 
        names: "Cuba",
        heats: { "Heat 1": "Cuba (Carril 1)" }
    },
    "Master +35 Rx H": { 
        names: "Pato",
        heats: { "Heat 1": "Pato (Carril 5)" }
    },
    "Master +35 Scaled H": { 
        names: "Vairo",
        heats: { "Heat 3": "Vairo (Carril 3)" }
    }
};

// 3. ESTILOS POR CATEGORÍA
export const CATEGORY_STYLES = {
    // --- NUESTROS ATLETAS ---
    "Amateur H": { border: "border-cyan-500", text: "text-cyan-400", bg_badge: "bg-cyan-950", bar: "bg-cyan-600", text_badge: "text-cyan-200", btn_active: "bg-cyan-600 text-white", heat_highlight: "bg-cyan-500/30 border-cyan-400 text-white" },
    "Scaled H": { border: "border-emerald-500", text: "text-emerald-400", bg_badge: "bg-emerald-950", bar: "bg-emerald-600", text_badge: "text-emerald-200", btn_active: "bg-emerald-600 text-white", heat_highlight: "bg-emerald-500/30 border-emerald-400 text-white" },
    "Rx H": { border: "border-violet-500", text: "text-violet-400", bg_badge: "bg-violet-950", bar: "bg-violet-600", text_badge: "text-violet-200", btn_active: "bg-violet-600 text-white", heat_highlight: "bg-violet-500/30 border-violet-400 text-white" },
    "Master +35 Rx H": { border: "border-amber-500", text: "text-amber-400", bg_badge: "bg-amber-950", bar: "bg-amber-600", text_badge: "text-amber-200", btn_active: "bg-amber-600 text-white", heat_highlight: "bg-amber-500/30 border-amber-400 text-white" },
    "Master +35 Scaled H": { border: "border-orange-500", text: "text-orange-400", bg_badge: "bg-orange-950", bar: "bg-orange-600", text_badge: "text-orange-200", btn_active: "bg-orange-600 text-white", heat_highlight: "bg-orange-500/30 border-orange-400 text-white" },

    // --- EL RESTO DEL MUNDO (Gris Táctico) ---
    "default": { border: "border-zinc-700", text: "text-zinc-400", bg_badge: "bg-zinc-800", bar: "bg-zinc-600", text_badge: "text-zinc-400", btn_active: "bg-zinc-600 text-white", heat_highlight: "bg-zinc-700" }
};

// 4. CONFIGURACIÓN DE FECHAS (ISO)
export const DAY_ISO_MAP = {
    "Viernes 30": "2026-01-30",
    "Sábado 31": "2026-01-31",
    "Domingo 01": "2026-02-01"
};

// 5. CRONOGRAMA COMPLETO
export const RAW_SCHEDULE = [
    // ... (El contenido de RAW_SCHEDULE es el mismo que generé en el paso anterior, asegúrate de copiar TODO el bloque del mensaje anterior si no lo tienes a mano. Si necesitas que lo repita completo aquí, dímelo).
    // Para no hacer este mensaje eterno, asumiré que usas el RAW_SCHEDULE que te di en el mensaje justo antes de este, que ya tiene todos los datos de Viernes, Sábado y Domingo completos.
    // Si quieres que te pegue el RAW_SCHEDULE completo de nuevo aquí, avísame.
];


