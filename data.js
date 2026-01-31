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

// 2. ATLETAS Y SUS HEATS
export const ATHLETE_DATA = {
    "Amateur H": { 
        names: "Pablo & José Armando",
        heats: { "Heat 1": "José Armando (Carril 5)", "Heat 5": "Pablo (Carril 1)" }
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
    "Amateur H": { 
        border: "border-cyan-500", text: "text-cyan-400", bg_badge: "bg-cyan-950", bar: "bg-cyan-600", text_badge: "text-cyan-200",
        btn_active: "bg-cyan-600 border-cyan-400 text-white", btn_inactive: "border-cyan-900/50 text-cyan-600/70 hover:text-cyan-400",
        heat_highlight: "bg-cyan-500/30 border-cyan-400 text-white"
    },
    "Scaled H": { 
        border: "border-emerald-500", text: "text-emerald-400", bg_badge: "bg-emerald-950", bar: "bg-emerald-600", text_badge: "text-emerald-200",
        btn_active: "bg-emerald-600 border-emerald-400 text-white", btn_inactive: "border-emerald-900/50 text-emerald-600/70 hover:text-emerald-400",
        heat_highlight: "bg-emerald-500/30 border-emerald-400 text-white"
    },
    "Rx H": { 
        border: "border-violet-500", text: "text-violet-400", bg_badge: "bg-violet-950", bar: "bg-violet-600", text_badge: "text-violet-200",
        btn_active: "bg-violet-600 border-violet-400 text-white", btn_inactive: "border-violet-900/50 text-violet-600/70 hover:text-violet-400",
        heat_highlight: "bg-violet-500/30 border-violet-400 text-white"
    },
    "Master +35 Rx H": { 
        border: "border-amber-500", text: "text-amber-400", bg_badge: "bg-amber-950", bar: "bg-amber-600", text_badge: "text-amber-200",
        btn_active: "bg-amber-600 border-amber-400 text-white", btn_inactive: "border-amber-900/50 text-amber-600/70 hover:text-amber-400",
        heat_highlight: "bg-amber-500/30 border-amber-400 text-white"
    },
    "Master +35 Scaled H": { 
        border: "border-orange-500", text: "text-orange-400", bg_badge: "bg-orange-950", bar: "bg-orange-600", text_badge: "text-orange-200",
        btn_active: "bg-orange-600 border-orange-400 text-white", btn_inactive: "border-orange-900/50 text-orange-600/70 hover:text-orange-400",
        heat_highlight: "bg-orange-500/30 border-orange-400 text-white"
    }
};

// 4. CONFIGURACIÓN DE FECHAS (ISO)
export const DAY_ISO_MAP = {
    "Viernes 30": "2026-01-30",
    "Sábado 31": "2026-01-31",
    "Domingo 01": "2026-02-01"
};

// 5. CRONOGRAMA COMPLETO
export const RAW_SCHEDULE = [
    // VIERNES 30
    { d: "Viernes 30", c: "Master +35 Scaled H", s: "Conditioning (Ev 1)", p: "Heats 1-3", t: "08:00", te: "08:37", type: "heat", h: [{n:"Heat 1",t:"08:00 - 08:09"},{n:"Heat 2",t:"08:14 - 08:23"},{n:"Heat 3",t:"08:28 - 08:37"}] },
    { d: "Viernes 30", c: "Master +35 Rx H", s: "Conditioning (Ev 1)", p: "Heats 1-3", t: "09:36", te: "10:10", type: "heat", h: [{n:"Heat 1",t:"09:36 - 09:45"},{n:"Heat 2",t:"09:49 - 09:58"},{n:"Heat 3",t:"10:01 - 10:10"}] },
    { d: "Viernes 30", c: "Master +35 Scaled H", s: "Coca-Cola (Ev 2)", p: "Heats 1-3", t: "11:20", te: "11:43", type: "heat", h: [{n:"Heat 1",t:"11:20 - 11:25"},{n:"Heat 2",t:"11:29 - 11:34"},{n:"Heat 3",t:"11:38 - 11:43"}] },
    { d: "Viernes 30", c: "Master +35 Rx H", s: "Coca-Cola (Ev 2)", p: "Heats 1-3", t: "12:25", te: "12:50", type: "heat", h: [{n:"Heat 1",t:"12:25 - 12:30"},{n:"Heat 2",t:"12:34 - 12:39"},{n:"Heat 3",t:"12:45 - 12:50"}] },
    { d: "Viernes 30", c: "Scaled H", s: "Coca-Cola (Ev 2)", p: "Heats 1-4", t: "15:12", te: "15:44", type: "heat", h: [{n:"Heat 1",t:"15:12 - 15:17"},{n:"Heat 2",t:"15:21 - 15:26"},{n:"Heat 3",t:"15:30 - 15:35"},{n:"Heat 4",t:"15:39 - 15:44"}] },
    { d: "Viernes 30", c: "Rx H", s: "Conditioning (Ev 1)", p: "Heats 1-4", t: "15:32", te: "16:22", type: "heat", h: [{n:"Heat 1",t:"15:32 - 15:41"},{n:"Heat 2",t:"15:44 - 15:53"},{n:"Heat 3",t:"16:00 - 16:09"},{n:"Heat 4",t:"16:13 - 16:22"}] },
    { d: "Viernes 30", c: "Amateur H", s: "Coca-Cola (Ev 2)", p: "Heats 1-6", t: "16:33", te: "17:23", type: "heat", h: [{n:"Heat 1",t:"16:33 - 16:38"},{n:"Heat 2",t:"16:42 - 16:47"},{n:"Heat 3",t:"16:51 - 16:56"},{n:"Heat 4",t:"17:00 - 17:05"},{n:"Heat 5",t:"17:09 - 17:14"},{n:"Heat 6",t:"17:18 - 17:23"}] },
    { d: "Viernes 30", c: "Scaled H", s: "Conditioning (Ev 1)", p: "Heats 1-4", t: "17:10", te: "17:58", type: "heat", h: [{n:"Heat 1",t:"17:10 - 17:19"},{n:"Heat 2",t:"17:23 - 17:32"},{n:"Heat 3",t:"17:36 - 17:45"},{n:"Heat 4",t:"17:49 - 17:58"}] },
    { d: "Viernes 30", c: "Rx H", s: "Coca-Cola (Ev 2)", p: "Heats 1-4", t: "17:27", te: "17:59", type: "heat", h: [{n:"Heat 1",t:"17:27 - 17:32"},{n:"Heat 2",t:"17:36 - 17:41"},{n:"Heat 3",t:"17:45 - 17:50"},{n:"Heat 4",t:"17:54 - 17:59"}] },
    { d: "Viernes 30", c: "Amateur H", s: "Conditioning (Ev 1)", p: "Heats 1-6", t: "19:10", te: "20:25", type: "heat", h: [{n:"Heat 1",t:"19:10 - 19:19"},{n:"Heat 2",t:"19:23 - 19:32"},{n:"Heat 3",t:"19:36 - 19:45"},{n:"Heat 4",t:"19:49 - 19:58"},{n:"Heat 5",t:"20:02 - 20:11"},{n:"Heat 6",t:"20:16 - 20:25"}] },
    // SABADO 31
    { d: "Sábado 31", c: "Amateur H", s: "Coca-Cola (Ev 3)", p: "Heats 1-6", t: "08:30", te: "09:26", type: "heat", h: [{n:"Heat 1",t:"08:30 - 08:36"},{n:"Heat 2",t:"08:40 - 08:46"},{n:"Heat 3",t:"08:50 - 08:56"},{n:"Heat 4",t:"09:00 - 09:06"},{n:"Heat 5",t:"09:10 - 09:16"},{n:"Heat 6",t:"09:20 - 09:26"}] },
    { d: "Sábado 31", c: "Scaled H", s: "Coca-Cola (Ev 3)", p: "Heats 1-4", t: "10:20", te: "10:56", type: "heat", h: [{n:"Heat 1",t:"10:20 - 10:26"},{n:"Heat 2",t:"10:30 - 10:36"},{n:"Heat 3",t:"10:40 - 10:46"},{n:"Heat 4",t:"10:50 - 10:56"}] },
    { d: "Sábado 31", c: "Rx H", s: "Coca-Cola (Ev 3)", p: "Heats 1-4", t: "11:30", te: "12:06", type: "heat", h: [{n:"Heat 1",t:"11:30 - 11:36"},{n:"Heat 2",t:"11:40 - 11:46"},{n:"Heat 3",t:"11:50 - 11:56"},{n:"Heat 4",t:"12:00 - 12:06"}] },
    { d: "Sábado 31", c: "Amateur H", s: "Conditioning (Ev 4)", p: "Heats 1-6", t: "14:00", te: "15:11", type: "heat", h: [{n:"Heat 1",t:"14:00 - 14:08"},{n:"Heat 2",t:"14:13 - 14:21"},{n:"Heat 3",t:"14:25 - 14:33"},{n:"Heat 4",t:"14:38 - 14:46"},{n:"Heat 5",t:"14:50 - 14:58"},{n:"Heat 6",t:"15:03 - 15:11"}] },
    { d: "Sábado 31", c: "Scaled H", s: "Conditioning (Ev 4)", p: "Heats 1-4", t: "16:16", te: "17:00", type: "heat", h: [{n:"Heat 1",t:"16:16 - 16:24"},{n:"Heat 2",t:"16:28 - 16:36"},{n:"Heat 3",t:"16:40 - 16:48"},{n:"Heat 4",t:"16:52 - 17:00"}] },
    // NUEVO EVENTO AGREGADO: Master +35 Scaled (Evento 3)
    { d: "Sábado 31", c: "Master +35 Scaled H", s: "Coca-Cola (Ev 3)", p: "Heats 1-3", t: "16:40", te: "17:06", type: "heat", h: [{n:"Heat 1",t:"16:40 - 16:46"},{n:"Heat 2",t:"16:50 - 16:56"},{n:"Heat 3",t:"17:00 - 17:06"}] },
    { d: "Sábado 31", c: "Rx H", s: "Conditioning (Ev 4)", p: "Heats 1-4", t: "17:40", te: "18:25", type: "heat", h: [{n:"Heat 1",t:"17:40 - 17:48"},{n:"Heat 2",t:"17:52 - 18:00"},{n:"Heat 3",t:"18:05 - 18:13"},{n:"Heat 4",t:"18:17 - 18:25"}] },
    { d: "Sábado 31", c: "Master +35 Rx H", s: "Coca-Cola (Ev 3)", p: "Heats 1-3", t: "17:50", te: "18:16", type: "heat", h: [{n:"Heat 1",t:"17:50 - 17:56"},{n:"Heat 2",t:"18:00 - 18:06"},{n:"Heat 3",t:"18:10 - 18:16"}] },
    { d: "Sábado 31", c: "Master +35 Scaled H", s: "Coca-Cola (Ev 4)", p: "Heats 1-3", t: "18:45", te: "19:11", type: "heat", h: [{n:"Heat 1",t:"18:45 - 18:51"},{n:"Heat 2",t:"18:55 - 19:01"},{n:"Heat 3",t:"19:05 - 19:11"}] },
    { d: "Sábado 31", c: "Master +35 Rx H", s: "Coca-Cola (Ev 4)", p: "Heats 1-3", t: "19:55", te: "20:21", type: "heat", h: [{n:"Heat 1",t:"19:55 - 20:01"},{n:"Heat 2",t:"20:05 - 20:11"},{n:"Heat 3",t:"20:15 - 20:21"}] },
    // DOMINGO 01
    { d: "Domingo 01", c: "Master +35 Scaled H", s: "Coca-Cola (Ev 5)", p: "Heats 1-3", t: "08:00", te: "08:18", type: "heat", h: [{n:"Heat 1",t:"08:00 - 08:04"},{n:"Heat 2",t:"08:07 - 08:11"},{n:"Heat 3",t:"08:14 - 08:18"}] },
    { d: "Domingo 01", c: "Master +35 Rx H", s: "Coca-Cola (Ev 5)", p: "Heats 1-3", t: "08:53", te: "09:11", type: "heat", h: [{n:"Heat 1",t:"08:53 - 08:57"},{n:"Heat 2",t:"09:00 - 09:04"},{n:"Heat 3",t:"09:07 - 09:11"}] },
    { d: "Domingo 01", c: "Rx H", s: "Conditioning (Ev X)", p: "Heats 1-4", t: "10:00", te: "10:36", type: "heat", h: [{n:"Heat 1",t:"10:00 - 10:06"},{n:"Heat 2",t:"10:10 - 10:16"},{n:"Heat 3",t:"10:20 - 10:26"},{n:"Heat 4",t:"10:30 - 10:36"}] },
    { d: "Domingo 01", c: "Master +35 Rx H", s: "Conditioning (Ev X)", p: "Heats 1-3", t: "11:00", te: "11:26", type: "heat", h: [{n:"Heat 1",t:"11:00 - 11:06"},{n:"Heat 2",t:"11:10 - 11:16"},{n:"Heat 3",t:"11:20 - 11:26"}] },
    { d: "Domingo 01", c: "Master +35 Scaled H", s: "Conditioning (Ev X)", p: "Heats 1-3", t: "11:30", te: "11:56", type: "heat", h: [{n:"Heat 1",t:"11:30 - 11:36"},{n:"Heat 2",t:"11:40 - 11:46"},{n:"Heat 3",t:"11:50 - 11:56"}] },
    { d: "Domingo 01", c: "Amateur H", s: "Coca-Cola (Ev 5)", p: "Heats 1-6", t: "13:45", te: "14:41", type: "heat", h: [{n:"Heat 1",t:"13:45 - 13:51"},{n:"Heat 2",t:"13:55 - 14:01"},{n:"Heat 3",t:"14:05 - 14:11"},{n:"Heat 4",t:"14:15 - 14:21"},{n:"Heat 5",t:"14:25 - 14:31"},{n:"Heat 6",t:"14:35 - 14:41"}] },
    { d: "Domingo 01", c: "Scaled H", s: "Coca-Cola (Ev 5)", p: "Heats 1-4", t: "15:35", te: "16:11", type: "heat", h: [{n:"Heat 1",t:"15:35 - 15:41"},{n:"Heat 2",t:"15:45 - 15:51"},{n:"Heat 3",t:"15:55 - 16:01"},{n:"Heat 4",t:"16:05 - 16:11"}] },
    { d: "Domingo 01", c: "Rx H", s: "Coca-Cola (Ev 5)", p: "Heats 1-4", t: "16:45", te: "17:13", type: "heat", h: [{n:"Heat 1",t:"16:45 - 16:49"},{n:"Heat 2",t:"16:53 - 16:57"},{n:"Heat 3",t:"17:01 - 17:05"},{n:"Heat 4",t:"17:08 - 17:13"}] },
    // FINALES
    { d: "Domingo 01", c: "Master +35 Rx H", s: "Conditioning", p: "FINAL", t: "15:45", te: "---", type: "final" },
    { d: "Domingo 01", c: "Master +35 Scaled H", s: "Conditioning", p: "FINAL", t: "16:30", te: "---", type: "final" },
    { d: "Domingo 01", c: "Amateur H", s: "Conditioning", p: "FINAL", t: "16:45", te: "---", type: "final" },
    { d: "Domingo 01", c: "Scaled H", s: "Conditioning", p: "FINAL", t: "17:30", te: "---", type: "final" },
    { d: "Domingo 01", c: "Rx H", s: "Conditioning", p: "FINAL", t: "18:10", te: "---", type: "final" },
];


