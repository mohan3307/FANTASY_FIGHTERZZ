import os
import numpy as np
from PIL import Image, ImageFilter, ImageEnhance
from scipy.ndimage import label, binary_fill_holes, gaussian_filter

ASSETS_DIR = 'd:/FANTASY_FIGHTZZ/public/assets'
SCRATCH_DIR = 'd:/FANTASY_FIGHTZZ/scratch'
os.makedirs(SCRATCH_DIR, exist_ok=True)

TARGET_W, TARGET_H = 768, 1376

def clean_alpha_cutout(img, bg_thresh=25, blur_sigma=0.8):
    """
    Extracts solid interior human body with transparent background.
    Uses connected-component background analysis from canvas edges,
    and fills all interior holes so the human body is 100% solid and opaque.
    """
    img_rgb = img.convert('RGB')
    arr = np.array(img_rgb)
    h, w, _ = arr.shape
    
    # Identify dark pixels
    max_ch = arr.max(axis=2)
    is_dark = max_ch < bg_thresh
    
    # Label connected components
    labeled, num_features = label(is_dark)
    
    # Border pixels define the true outer background
    border_labels = set(labeled[0, :]).union(set(labeled[h-1, :])).union(set(labeled[:, 0])).union(set(labeled[:, w-1]))
    border_labels.discard(0)
    
    # True outer background
    bg_mask = np.isin(labeled, list(border_labels))
    
    # Character body is everything else
    body_mask = ~bg_mask
    
    # CRITICAL: Fill ALL interior holes so no armor, clothes, or muscles are transparent!
    body_mask = binary_fill_holes(body_mask)
    
    # Clean alpha
    alpha = np.where(body_mask, 255.0, 0.0)
    if blur_sigma > 0:
        alpha = gaussian_filter(alpha, sigma=blur_sigma)
    alpha = np.clip(alpha, 0, 255).astype(np.uint8)
    
    rgba = np.dstack([arr, alpha])
    return Image.fromarray(rgba)

def process_existing_fighter(filename, out_filename, y_shift=0):
    src_path = os.path.join(ASSETS_DIR, filename)
    im = Image.open(src_path).convert('RGB')
    
    # Apply vertical shift if needed (e.g. centering Thor)
    if y_shift != 0:
        shifted = Image.new('RGB', (im.width, im.height), (0, 0, 0))
        shifted.paste(im, (0, -y_shift))
        im = shifted
        
    out_im = clean_alpha_cutout(im, bg_thresh=22, blur_sigma=1.0)
    out_path = os.path.join(ASSETS_DIR, out_filename)
    out_im.save(out_path, 'PNG')
    print(f'Saved clean solid fighter: {out_filename}')

print('Processing heroes and Thanos...')
process_existing_fighter('fighter_hero_spiderman.jpg', 'fighter_hero_spiderman.png')
process_existing_fighter('fighter_hero_ironman.jpg', 'fighter_hero_ironman.png')
# Shift Thor up by 140 pixels so his head, hair, and torso are perfectly centered!
process_existing_fighter('fighter_hero_thor.jpg', 'fighter_hero_thor.png', y_shift=140)
process_existing_fighter('fighter_hero_captain_america.jpg', 'fighter_hero_captain_america.png')
process_existing_fighter('fighter_hero_dr_strange.jpg', 'fighter_hero_dr_strange.png')
process_existing_fighter('fighter_villain_thanos.jpg', 'fighter_villain_thanos.png')

print('Completed 6 fighter PNGs with 100% solid bodies!')
