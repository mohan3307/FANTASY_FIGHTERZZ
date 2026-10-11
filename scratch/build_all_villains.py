import os
import numpy as np
from PIL import Image, ImageFilter, ImageEnhance, ImageDraw
from scipy.ndimage import label, binary_fill_holes, gaussian_filter

ASSETS_DIR = 'd:/FANTASY_FIGHTZZ/public/assets'
W, H = 768, 1376

def clean_alpha_cutout(img, bg_thresh=22, blur_sigma=1.0):
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

def create_green_goblin():
    print("Building Green Goblin...")
    base = Image.open(os.path.join(ASSETS_DIR, 'fighter_hero_realistic.jpg')).convert('RGB')
    base_arr = np.array(base).astype(np.float32)
    
    mask_body = base_arr.max(axis=2) > 20
    recolored = base_arr.copy()
    
    recolored[:, :, 0] *= 0.35  # lower red
    recolored[:, :, 1] *= 1.25  # boost green
    recolored[:, :, 2] *= 0.55  # emerald blue
    
    belt_rows = (np.arange(H) >= 540) & (np.arange(H) <= 720)
    belt_mask = mask_body & belt_rows[:, None]
    recolored[belt_mask, 0] = base_arr[belt_mask, 0] * 1.15
    recolored[belt_mask, 1] = base_arr[belt_mask, 1] * 0.35
    recolored[belt_mask, 2] = base_arr[belt_mask, 2] * 1.35
    
    # Ensure borders are pure black (0, 0, 0)
    bg_pixel_mask = base_arr.max(axis=2) <= 15
    recolored[bg_pixel_mask] = 0
    
    recolored = np.clip(recolored, 0, 255).astype(np.uint8)
    body_img = Image.fromarray(recolored)
    
    # Goblin Head & Mask
    gob_src = Image.open(os.path.join(ASSETS_DIR, 'villain_green_goblin.jpg')).convert('RGB')
    gob_head = gob_src.crop((10, 10, 175, 230))
    gob_head = ImageEnhance.Contrast(gob_head).enhance(1.3)
    gob_head = ImageEnhance.Color(gob_head).enhance(1.4)
    gob_head = gob_head.resize((260, 280), Image.Resampling.LANCZOS)
    
    head_mask = Image.new('L', gob_head.size, 0)
    draw_hm = ImageDraw.Draw(head_mask)
    draw_hm.ellipse((10, 10, 250, 270), fill=255)
    head_mask = head_mask.filter(ImageFilter.GaussianBlur(10))
    body_img.paste(gob_head, (254, 230), head_mask)
    
    # Pumpkin Bomb
    bomb_crop = gob_src.crop((50, 180, 140, 290))
    bomb_crop = ImageEnhance.Brightness(bomb_crop).enhance(1.3)
    bomb_crop = ImageEnhance.Color(bomb_crop).enhance(1.6)
    bomb_crop = bomb_crop.resize((150, 160), Image.Resampling.LANCZOS)
    bomb_mask = Image.new('L', bomb_crop.size, 0)
    draw_bm = ImageDraw.Draw(bomb_mask)
    draw_bm.ellipse((10, 10, 140, 150), fill=255)
    bomb_mask = bomb_mask.filter(ImageFilter.GaussianBlur(8))
    body_img.paste(bomb_crop, (160, 620), bomb_mask)
    
    # Goblin Glider
    glider = Image.new('RGB', (620, 160), (0, 0, 0))
    draw_g = ImageDraw.Draw(glider)
    draw_g.polygon([(310, 20), (590, 90), (550, 140), (310, 110), (70, 140), (30, 90)], fill=(30, 65, 45), outline=(50, 160, 80))
    draw_g.ellipse((270, 40, 350, 100), fill=(40, 90, 60), outline=(34, 197, 94))
    draw_g.ellipse((285, 55, 335, 85), fill=(240, 120, 20))
    draw_g.ellipse((295, 62, 325, 78), fill=(255, 240, 100))
    glider = glider.filter(ImageFilter.GaussianBlur(1.5))
    glider_mask = Image.new('L', glider.size, 0)
    draw_gm = ImageDraw.Draw(glider_mask)
    draw_gm.polygon([(310, 15), (600, 90), (560, 145), (310, 115), (60, 145), (20, 90)], fill=255)
    glider_mask = glider_mask.filter(ImageFilter.GaussianBlur(6))
    body_img.paste(glider, (74, 1210), glider_mask)
    
    out = clean_alpha_cutout(body_img, bg_thresh=20)
    out.save(os.path.join(ASSETS_DIR, 'fighter_villain_green_goblin.png'))
    print("Saved fighter_villain_green_goblin.png")

def create_magneto():
    print("Building Magneto...")
    base = Image.open(os.path.join(ASSETS_DIR, 'fighter_villain_realistic.jpg')).convert('RGB')
    base_arr = np.array(base).astype(np.float32)
    
    recolored = base_arr.copy()
    recolored[:, :, 0] *= 1.35
    recolored[:, :, 1] *= 0.35
    recolored[:, :, 2] *= 0.55
    
    bg_pixel_mask = base_arr.max(axis=2) <= 15
    recolored[bg_pixel_mask] = 0
    
    recolored = np.clip(recolored, 0, 255).astype(np.uint8)
    body_img = Image.fromarray(recolored)
    
    # Magneto Cape
    cape_overlay = Image.new('RGB', (W, H), (0, 0, 0))
    draw_c = ImageDraw.Draw(cape_overlay)
    draw_c.polygon([(140, 360), (240, 420), (210, 1240), (100, 1220)], fill=(70, 15, 80))
    draw_c.polygon([(520, 420), (620, 360), (660, 1220), (550, 1240)], fill=(65, 12, 75))
    cape_overlay = cape_overlay.filter(ImageFilter.GaussianBlur(12))
    
    cape_mask = Image.new('L', (W, H), 0)
    draw_cm = ImageDraw.Draw(cape_mask)
    draw_cm.polygon([(140, 360), (240, 420), (210, 1240), (100, 1220)], fill=200)
    draw_cm.polygon([(520, 420), (620, 360), (660, 1220), (550, 1240)], fill=200)
    cape_mask = cape_mask.filter(ImageFilter.GaussianBlur(15))
    body_img.paste(cape_overlay, (0, 0), cape_mask)
    
    # Magneto Helmet
    mag_src = Image.open(os.path.join(ASSETS_DIR, 'villain_magneto.jpg')).convert('RGB')
    mag_head = mag_src.crop((10, 15, 175, 235))
    mag_head = ImageEnhance.Contrast(mag_head).enhance(1.4)
    mag_head = ImageEnhance.Color(mag_head).enhance(1.4)
    mag_head = mag_head.resize((260, 290), Image.Resampling.LANCZOS)
    
    head_mask = Image.new('L', mag_head.size, 0)
    draw_hm = ImageDraw.Draw(head_mask)
    draw_hm.ellipse((15, 10, 245, 280), fill=255)
    head_mask = head_mask.filter(ImageFilter.GaussianBlur(10))
    body_img.paste(mag_head, (254, 210), head_mask)
    
    # Magnetic energy
    draw_fx = ImageDraw.Draw(body_img)
    draw_fx.ellipse((120, 680, 210, 770), outline=(239, 68, 68), width=4)
    draw_fx.ellipse((135, 695, 195, 755), outline=(168, 85, 247), width=3)
    draw_fx.ellipse((550, 680, 640, 770), outline=(239, 68, 68), width=4)
    draw_fx.ellipse((565, 695, 625, 755), outline=(168, 85, 247), width=3)
    
    out = clean_alpha_cutout(body_img, bg_thresh=20)
    out.save(os.path.join(ASSETS_DIR, 'fighter_villain_magneto.png'))
    print("Saved fighter_villain_magneto.png")

def create_doctor_doom():
    print("Building Doctor Doom...")
    base = Image.open(os.path.join(ASSETS_DIR, 'fighter_villain_realistic.jpg')).convert('RGB')
    base_arr = np.array(base).astype(np.float32)
    
    gray = (base_arr[:, :, 0] * 0.3 + base_arr[:, :, 1] * 0.5 + base_arr[:, :, 2] * 0.2)
    recolored = np.dstack([gray * 0.95, gray * 1.05, gray * 1.1])
    
    tunic_rows = (np.arange(H) >= 420) & (np.arange(H) <= 1040)
    mask_body = base_arr.max(axis=2) > 20
    tunic_mask = mask_body & tunic_rows[:, None]
    
    recolored[tunic_mask, 0] = gray[tunic_mask] * 0.25
    recolored[tunic_mask, 1] = gray[tunic_mask] * 1.35
    recolored[tunic_mask, 2] = gray[tunic_mask] * 0.45
    
    bg_pixel_mask = base_arr.max(axis=2) <= 15
    recolored[bg_pixel_mask] = 0
    
    recolored = np.clip(recolored, 0, 255).astype(np.uint8)
    body_img = Image.fromarray(recolored)
    
    # Doom Mask & Hood
    doom_src = Image.open(os.path.join(ASSETS_DIR, 'villain_doctor_doom.jpg')).convert('RGB')
    doom_head = doom_src.crop((10, 40, 175, 270))
    doom_head = ImageEnhance.Contrast(doom_head).enhance(1.3)
    doom_head = ImageEnhance.Color(doom_head).enhance(1.3)
    doom_head = doom_head.resize((265, 300), Image.Resampling.LANCZOS)
    
    head_mask = Image.new('L', doom_head.size, 0)
    draw_hm = ImageDraw.Draw(head_mask)
    draw_hm.ellipse((10, 10, 255, 290), fill=255)
    head_mask = head_mask.filter(ImageFilter.GaussianBlur(10))
    body_img.paste(doom_head, (251, 210), head_mask)
    
    draw_ch = ImageDraw.Draw(body_img)
    draw_ch.line([(280, 480), (384, 520), (488, 480)], fill=(234, 179, 8), width=6)
    draw_ch.ellipse((270, 470, 295, 495), fill=(245, 158, 11), outline=(254, 240, 138))
    draw_ch.ellipse((475, 470, 500, 495), fill=(245, 158, 11), outline=(254, 240, 138))
    draw_ch.rectangle((354, 760, 414, 800), fill=(234, 179, 8), outline=(254, 240, 138), width=3)
    
    out = clean_alpha_cutout(body_img, bg_thresh=20)
    out.save(os.path.join(ASSETS_DIR, 'fighter_villain_doctor_doom.png'))
    print("Saved fighter_villain_doctor_doom.png")

def create_loki():
    print("Building Loki...")
    base = Image.open(os.path.join(ASSETS_DIR, 'fighter_hero_realistic.jpg')).convert('RGB')
    base_arr = np.array(base).astype(np.float32)
    
    recolored = base_arr.copy()
    recolored[:, :, 0] *= 0.45
    recolored[:, :, 1] *= 1.15
    recolored[:, :, 2] *= 0.45
    
    bg_pixel_mask = base_arr.max(axis=2) <= 15
    recolored[bg_pixel_mask] = 0
    
    recolored = np.clip(recolored, 0, 255).astype(np.uint8)
    body_img = Image.fromarray(recolored)
    
    loki_src = Image.open(os.path.join(ASSETS_DIR, 'villain_loki.jpg')).convert('RGB')
    loki_head = loki_src.crop((5, 5, 175, 260))
    loki_head = ImageEnhance.Contrast(loki_head).enhance(1.3)
    loki_head = ImageEnhance.Color(loki_head).enhance(1.4)
    loki_head = loki_head.resize((270, 330), Image.Resampling.LANCZOS)
    
    head_mask = Image.new('L', loki_head.size, 0)
    draw_hm = ImageDraw.Draw(head_mask)
    draw_hm.ellipse((10, 10, 260, 320), fill=255)
    head_mask = head_mask.filter(ImageFilter.GaussianBlur(10))
    body_img.paste(loki_head, (249, 140), head_mask)
    
    draw_sc = ImageDraw.Draw(body_img)
    draw_sc.line([(180, 520), (150, 1200)], fill=(234, 179, 8), width=7)
    draw_sc.polygon([(180, 520), (200, 460), (170, 420), (150, 480)], fill=(245, 158, 11), outline=(254, 240, 138))
    draw_sc.ellipse((165, 465, 195, 495), fill=(34, 197, 94), outline=(134, 239, 172))
    
    out = clean_alpha_cutout(body_img, bg_thresh=20)
    out.save(os.path.join(ASSETS_DIR, 'fighter_villain_loki.png'))
    print("Saved fighter_villain_loki.png")

if __name__ == '__main__':
    create_green_goblin()
    create_magneto()
    create_doctor_doom()
    create_loki()
    print("All 4 villain fighter PNGs created successfully with true alpha cutout!")
