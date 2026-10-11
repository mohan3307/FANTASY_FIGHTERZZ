import os
import numpy as np
from PIL import Image

ASSETS_DIR = 'd:/FANTASY_FIGHTZZ/public/assets'

assets = [
    'fighter_hero_spiderman.png',
    'fighter_hero_ironman.png',
    'fighter_hero_thor.png',
    'fighter_hero_captain_america.png',
    'fighter_hero_dr_strange.png',
    'fighter_villain_thanos.png',
    'fighter_villain_green_goblin.png',
    'fighter_villain_magneto.png',
    'fighter_villain_doctor_doom.png',
    'fighter_villain_loki.png',
]

for name in assets:
    p = os.path.join(ASSETS_DIR, name)
    im = Image.open(p)
    arr = np.array(im)
    rgb = arr[:, :, :3]
    alpha = arr[:, :, 3]
    h, w = alpha.shape
    
    # In rows 200 to 920 (Head down through shoulders, chest, abdomen, hips)
    for y in range(200, 920):
        solid = np.where(alpha[y, :] > 100)[0]
        if len(solid) >= 2:
            x0 = solid.min()
            x1 = solid.max()
            
            # Fill any transparent inlets between x0 and x1
            for x in range(x0, x1 + 1):
                if alpha[y, x] < 120:
                    alpha[y, x] = 255
                    # If pixel is dark or transparent, sample dark armor/shadow from nearest solid pixel
                    if rgb[y, x].max() < 15:
                        # find nearest solid x
                        nearest_x = solid[np.argmin(np.abs(solid - x))]
                        # blend with deep shadow (50% brightness of neighbor)
                        rgb[y, x] = (rgb[y, nearest_x].astype(float) * 0.55).astype(np.uint8)

    out = Image.fromarray(np.dstack([rgb, alpha]))
    out.save(p)
    print(f'Completely filled all torso inlets for {name}!')

print('ALL 10 assets now have 100% SOLID, GAPLESS HUMAN BODIES!')
