# ⚔️ Vision Warriors: AI Battle Arena
### *Cinematic Futuristic Superhero Fighting Game & Computer Vision Arena*

Developed for college science expos and AAA-grade web combat showcases, **Vision Warriors: AI Battle Arena** connects high-performance in-browser Computer Vision hand tracking with real-time Three.js 3D kinetic martial arts combat.

---

## 🌟 Key Features

### 1. 🎬 Cinematic Trailer-Style Battle Intro
- **Futuristic Neo-City Panorama**: Procedural cyber skyscrapers with glowing windows, skyway lanes with cruising hover-speeders, and atmospheric volumetric fog.
- **Dimensional Void Portal**: Swirling dark-matter vortex rings at the arena's center.
- **Hero & Weapon Materialization**: Hero warps in with quantum particle beams; signature weapons materialize into their hands.
- **Original AI Boss Entrance**: **VOID TITAN** steps through the void portal with earth-shattering ground stomp shockwaves.
- **Cinematic Text & Countdown**: `"CHOOSE YOUR POWER. DEFEND YOUR WORLD."` followed by a dramatic `3, 2, 1, FIGHT!` countdown.

---

### 2. 🖐️ Hand-Gesture Combat Controls (Computer Vision Engine)
Powered by real-time spatial chroma clustering and landmark skeleton synthesis (zero external APIs needed; runs locally at 60 FPS):

| Hand Gesture | In-Game Action | Fallback Hotkey | Tactical Effect |
| :--- | :--- | :--- | :--- |
| **🖐️ OPEN PALM** | **Energy Shield / Parry** | `[1]` or Left Click | Absorbs 100% damage when timed with attack warning; gains +28% EX Energy. |
| **✊ CLOSED FIST** | **Weapon Charge** | `[2]` or Right Click | Channels kinetic plasma into weapon; empowers next strike by +2,400 DMG. |
| **☝️ POINT INDEX** | **Targeted Aim Beam** | `[3]` or `[E]` | Long-range core laser beam directed at the villain's vital power core. |
| **🥊 QUICK FORWARD** | **Kinetic Combo Strike** | `[SPACE]` or `[F]` | Martial step-in strike; builds combos and depletes boss Stagger Shield. |
| **🙌 BOTH HANDS RAISED** | **Special Cataclysm** | `[4]` or `[R]` | Requires 100% EX Gauge; unleashes screen-filling elemental ultimate. |
| **↔️ SIDEWAYS SWIPE** | **Warp Dodge** | `[A] / [D] / [W]` | Quantum phase evade; dodges danger zones and grants +14% EX Energy. |

---

### 3. 🛡️ 5 Vision Warriors Superhero Archetypes
Each hero features unique animations, signature materializing weapons, attack trails, and audio:

1. **🕸️ WEB NINJA** (`Spider-Man Archetype`):
   - **Weapon**: *Quantum Web-Gauntlets*
   - **Combat Style**: Agile aerial strikes, high-speed web projectiles, and ground web snare traps that slow the villain.
2. **⚡ STORM GUARDIAN** (`Thor Archetype`):
   - **Weapon**: *Magnetic Storm Hammer*
   - **Combat Style**: Lightning-charged hammer swings, ground-shattering shockwaves, and returning hammer flight arcs.
3. **🛡️ SHIELD SENTINEL** (`Captain America Archetype`):
   - **Weapon**: *Vibranium Kinetic Shield*
   - **Combat Style**: Indestructible energy barrier, spinning ricochet disc projectiles, and star-slam counterattacks.
4. **🔥 PLASMA RANGER** (`Iron Man Archetype`):
   - **Weapon**: *Dual Arc Plasma Repulsors*
   - **Combat Style**: High-speed jet booster dashes, twin repulsor laser beams, and chest unibeam laser overdrive.
5. **🔮 ARCANE SORCERER** (`Doctor Strange Archetype`):
   - **Weapon**: *Eldritch Mandala Rings*
   - **Combat Style**: Floating geometric Tao mandalas, mirror dimension shattered shards, and dimensional portal projectiles.

---

### 4. 👾 Original AI Boss: VOID TITAN
Encased in obsidian cyber-armor with a volatile violet dark-matter core and dual anti-matter gauntlets.

#### 🧠 Finite State Machine (FSM):
- **`IDLE`**: Watches player distance, breathing core animation.
- **`APPROACH`**: Marches forward with heavy footstep camera tremors.
- **`ATTACK`**: Fires Dark Matter Beams or colossal gauntlet slams.
- **`DEFEND`**: Absorbs strikes into dark-matter crossguard.
- **`STUNNED`**: Triggered upon **Stagger Shield Break** (30,000 HP threshold broken -> 4.2s `1.85x CRIT` stun window).
- **`ENRAGED`**: Activates at $\le 60\%$ HP; attack rate accelerates to every 2.4s, orbiting void orbs ignite.
- **`DEFEATED`**: Collapses in a blinding burst of light and dissolves into the void.

---

### 5. 🎪 Crowd-Attracting College Science Expo Mode
- **Expo Blitz (60s Matches)**: Quick, crowd-friendly battles designed for fast student/visitor turnover.
- **Gesture Calibration Modal**: Live interactive hand tracking test screen before entering combat.
- **Real-Time Telemetry HUD**: Displays FPS (`60 FPS`), AI FSM State (`APPROACH / ATTACK / STUNNED`), and sensor latency (`12ms`).
- **Expo Scoreboard**: Calculates Visitor Combat Score, Max Combo Hits, and Rank Grade (`SSS TITAN SLAYER`, `SS S-RANK`, `S GUARDIAN`).
- **`[NEXT EXPO VISITOR]` Button**: Resets resources and returns to hero selection for the next attendee in line.

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start Vite Development Server
npm run dev
```

Visit the local server in your browser:
👉 **`http://localhost:3001/`** (or **`http://localhost:3000/`**)
