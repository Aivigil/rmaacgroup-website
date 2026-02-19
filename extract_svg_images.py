#!/usr/bin/env python3
import re
import base64
import os
import sys
from pathlib import Path

def extract_embedded_images(svg_file_path):
    """Extract base64 encoded images from SVG and replace with file references"""
    
    svg_path = Path(svg_file_path)
    if not svg_path.exists():
        print(f"File not found: {svg_file_path}")
        return
        
    # Create extracted images directory
    extracted_dir = svg_path.parent / "extracted"
    extracted_dir.mkdir(exist_ok=True)
    
    # Read SVG content
    with open(svg_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find all data URLs
    data_url_pattern = r'data:image/([^;]+);base64,([^"\')\s]+)'
    matches = re.finditer(data_url_pattern, content)
    
    image_count = 0
    new_content = content
    
    for match in matches:
        image_format = match.group(1)
        base64_data = match.group(2)
        
        try:
            # Decode base64
            image_data = base64.b64decode(base64_data)
            
            # Create filename
            image_count += 1
            filename = f"{svg_path.stem}_{image_count}.{image_format}"
            image_path = extracted_dir / filename
            
            # Write image file
            with open(image_path, 'wb') as img_file:
                img_file.write(image_data)
                
            # Replace in SVG content - use relative path
            relative_path = f"./extracted/{filename}"
            new_content = new_content.replace(match.group(0), relative_path)
            
            print(f"Extracted: {filename} ({len(image_data)} bytes)")
            
        except Exception as e:
            print(f"Error processing image {image_count}: {e}")
    
    # Write updated SVG
    if image_count > 0:
        backup_path = svg_path.with_suffix('.svg.backup')
        svg_path.rename(backup_path)
        print(f"Created backup: {backup_path}")
        
        with open(svg_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
            
        print(f"Updated SVG: {svg_path}")
        print(f"Extracted {image_count} images")
        
        # Show size comparison
        original_size = backup_path.stat().st_size
        new_size = svg_path.stat().st_size
        print(f"Size reduced: {original_size:,} → {new_size:,} bytes ({(1-new_size/original_size)*100:.1f}% reduction)")
    else:
        print("No embedded images found")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python3 extract_svg_images.py <svg_file>")
        sys.exit(1)
        
    extract_embedded_images(sys.argv[1])
