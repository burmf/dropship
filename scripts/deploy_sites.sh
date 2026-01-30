#!/bin/bash

# Base template path
TEMPLATE="projects/premium-template"

# List of projects to create (Folder Name)
PROJECTS=(
  "01-casecanvas"
  "02-soundsphere"
  "03-wristtech"
  "04-purrfectlife"
  "05-lumiskyn"
  "06-ambienthome"
  "07-tinytot"
  "08-shadeshift"
  "09-flexgear"
  "10-contentstudio"
)

echo "Starting deployment of 10 sites..."

for PROJ in "${PROJECTS[@]}"; do
  TARGET="projects/$PROJ"
  
  if [ -d "$TARGET" ]; then
    echo "Directory $TARGET already exists. Skipping..."
    continue
  fi

  echo "Creating $TARGET..."
  
  # Use rsync to excludes node_modules and .next for speed
  rsync -av --exclude 'node_modules' --exclude '.next' --exclude '.git' "$TEMPLATE/" "$TARGET/" > /dev/null
  
  echo "Created $TARGET"
done

echo "All projects created."
