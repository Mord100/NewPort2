"""
Remove white background from brandmark.jpeg and save as brandmark.png
with transparent background, keeping only the black hexagon and white inner mark.
"""
from PIL import Image
import numpy as np
import os

src = os.path.join(os.path.dirname(__file__), "..", "public", "brandmark.jpeg")
dst = os.path.join(os.path.dirname(__file__), "..", "public", "brandmark.png")

img = Image.open(src).convert("RGBA")
data = np.array(img, dtype=np.float32)

r, g, b, a = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]

# A pixel is "background white" when all channels are close to 255
# Use a threshold — anything above 230 in all channels is considered background
threshold = 230
is_white_bg = (r > threshold) & (g > threshold) & (b > threshold)

# Make those pixels fully transparent
data[:,:,3] = np.where(is_white_bg, 0, 255)

result = Image.fromarray(data.astype(np.uint8), "RGBA")
result.save(dst, "PNG")
print(f"Saved transparent PNG to: {dst}")
print(f"Image size: {result.size}")
