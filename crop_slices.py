from PIL import Image
from pathlib import Path

input_folder = Path("public/brain-slices")
output_folder = Path("public/brain-slices-cropped")
output_folder.mkdir(exist_ok=True)

padding = 25
threshold = 15

image_paths = sorted(input_folder.glob("slice_*.png"))

global_left = float("inf")
global_top = float("inf")
global_right = 0
global_bottom = 0

for img_path in image_paths:
    img = Image.open(img_path).convert("RGBA")
    pixels = img.load()

    xs = []
    ys = []

    for y in range(img.height):
        for x in range(img.width):
            r, g, b, a = pixels[x, y]
            if a > 0 and (r > threshold or g > threshold or b > threshold):
                xs.append(x)
                ys.append(y)

    if xs and ys:
        global_left = min(global_left, min(xs))
        global_top = min(global_top, min(ys))
        global_right = max(global_right, max(xs))
        global_bottom = max(global_bottom, max(ys))

global_left = max(global_left - padding, 0)
global_top = max(global_top - padding, 0)
global_right = global_right + padding
global_bottom = global_bottom + padding

for img_path in image_paths:
    img = Image.open(img_path).convert("RGBA")

    right = min(global_right, img.width)
    bottom = min(global_bottom, img.height)

    cropped = img.crop((global_left, global_top, right, bottom))
    cropped.save(output_folder / img_path.name)

print("Done. All slices cropped to the same box.")