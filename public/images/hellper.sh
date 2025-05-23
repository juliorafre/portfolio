#!/bin/bash

# This script copies 'image.jpeg' from each postcards/# folder to 'jpegs/image-#.jpeg'.

POSTCARDS_DIR="postcards"
TARGET_JPEG_DIR="jpegs"

# Create the target directory if it doesn't exist
mkdir -p "$TARGET_JPEG_DIR"

copied=0

for i in $(seq 1 30); do
  SRC="$POSTCARDS_DIR/$i/image.jpeg"
  DEST="$TARGET_JPEG_DIR/image-$i.jpeg"
  if [ -f "$SRC" ]; then
    cp "$SRC" "$DEST"
    echo "Copied $SRC → $DEST"
    ((copied++))
  else
    echo "Info: $SRC not found, skipping."
  fi
done

echo "------------------------------------"
echo "Copied $copied files to '$TARGET_JPEG_DIR/'."
