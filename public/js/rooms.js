/**
 * rooms.js — Single source of truth for all room data
 * Each room: id, floor, label, area, color, svgX, svgY, svgW, svgH
 * Interior design fields added later per room: materials, palette, furniture, moodboard
 */
const ROOMS = {

  // ── GROUND FLOOR ──────────────────────────────────────────
  garage:        { floor:'gf', label:'Garage',          area:520, unit:'sq ft', color:'#cdc0a0', svgX:113, svgY:131, svgW:150, svgH:300 },
  thinnai:       { floor:'gf', label:'Thinnai',         area:60,  unit:'sq ft', color:'#c4a870', svgX:263, svgY:451, svgW:120, svgH:68  },
  foyer:         { floor:'gf', label:'Foyer',           area:80,  unit:'sq ft', color:'#e8e0c4', svgX:263, svgY:381, svgW:120, svgH:70  },
  living:        { floor:'gf', label:'Sunken Living',   area:185, unit:'sq ft', color:'#c4d4e8', svgX:383, svgY:173, svgW:167, svgH:208 },
  pooja:         { floor:'gf', label:'Pooja Room',      area:52,  unit:'sq ft', color:'#f0d4e4', svgX:263, svgY:241, svgW:120, svgH:140 },
  dining:        { floor:'gf', label:'Dining Hall',     area:240, unit:'sq ft', color:'#f8f0c0', svgX:383, svgY:381, svgW:167, svgH:138 },
  kitchen:       { floor:'gf', label:'Open Kitchen',    area:180, unit:'sq ft', color:'#c8e8d0', svgX:550, svgY:245, svgW:144, svgH:136 },
  'kitchen-store':{ floor:'gf', label:'Kitchen Store',  area:48,  unit:'sq ft', color:'#e4e0a8', svgX:550, svgY:381, svgW:80,  svgH:70  },
  nadumuttam:    { floor:'gf', label:'Nadumuttam',      area:55,  unit:'sq ft', color:'#a8d8e8', svgX:630, svgY:381, svgW:64,  svgH:70  },
  'guest-bed':   { floor:'gf', label:'Guest Bedroom',   area:155, unit:'sq ft', color:'#d4e8f4', svgX:550, svgY:451, svgW:90,  svgH:68  },
  'guest-bath':  { floor:'gf', label:'Guest Bathroom',  area:45,  unit:'sq ft', color:'#c8e4e4', svgX:640, svgY:451, svgW:54,  svgH:68  },
  laundry:       { floor:'gf', label:'Laundry / WM',    area:32,  unit:'sq ft', color:'#f0e4d0', svgX:383, svgY:494, svgW:167, svgH:25  },

  // ── FIRST FLOOR ───────────────────────────────────────────
  'master-bed':  { floor:'ff', label:'Master Bedroom',  area:218, unit:'sq ft', color:'#e4d0f0', svgX:263, svgY:381, svgW:167, svgH:138 },
  'master-bath': { floor:'ff', label:'Master Ensuite',  area:64,  unit:'sq ft', color:'#f0c8c8', svgX:430, svgY:381, svgW:120, svgH:138 },
  'child-1-bed': { floor:'ff', label:'Child Room 1',    area:142, unit:'sq ft', color:'#f4e0d0', svgX:550, svgY:245, svgW:94,  svgH:160 },
  'child-1-bath':{ floor:'ff', label:'Child Bath 1',    area:38,  unit:'sq ft', color:'#c8e0e8', svgX:644, svgY:245, svgW:50,  svgH:160 },
  'child-2-bed': { floor:'ff', label:'Child Room 2',    area:142, unit:'sq ft', color:'#d0e8d8', svgX:550, svgY:405, svgW:94,  svgH:114 },
  'child-2-bath':{ floor:'ff', label:'Child Bath 2',    area:38,  unit:'sq ft', color:'#c8e4d0', svgX:644, svgY:405, svgW:50,  svgH:114 },
  'flex-library':{ floor:'ff', label:'Flex / Library',  area:125, unit:'sq ft', color:'#d8d0ec', svgX:430, svgY:519, svgW:264, svgH:60  },
  balcony:       { floor:'ff', label:'Balcony / Thotti',area:75,  unit:'sq ft', color:'#d0e8c8', svgX:263, svgY:519, svgW:167, svgH:60  },
  'nadumuttam-void':{ floor:'ff', label:'Nadumuttam Void', area:55, unit:'sq ft', color:'#a8d8e8', svgX:263, svgY:381, svgW:0, svgH:0 },
};

// Helper: get all rooms for a floor
function roomsOnFloor(floor) {
  return Object.entries(ROOMS).filter(([,r]) => r.floor === floor);
}
