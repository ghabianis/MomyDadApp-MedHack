#!/bin/bash

# Define the plugin name and version
PLUGIN_NAME="loki"
PLUGIN_VERSION="2.8.2"

echo "Loki monitoring plugin initialization in progress..."

# Check if the plugin exists, and if so, remove it
if docker plugin ls | grep -q "$PLUGIN_NAME"; then
    echo "Removing the existing $PLUGIN_NAME plugin..."
    docker plugin disable "$PLUGIN_NAME"
    docker plugin remove "$PLUGIN_NAME"
fi

# Install or upgrade the Loki plugin
echo "Installing/upgrading the $PLUGIN_NAME plugin (version $PLUGIN_VERSION)..."
docker plugin install grafana/loki-docker-driver:"$PLUGIN_VERSION" --alias "$PLUGIN_NAME" --grant-all-permissions

# Enable the plugin
echo "Enabling the $PLUGIN_NAME plugin..."
docker plugin enable "$PLUGIN_NAME"

# Optional: Restart Docker to apply changes
# Note: This may not always be necessary, depending on your use case.
# systemctl restart docker

# Verify the plugin status
echo "Plugin status:"
docker plugin ls

echo "Loki monitoring plugin initialization completed."

COMPOSE_FILE="./docker-compose.yml"

# Check if the Docker Compose file exists
if [ ! -f "$COMPOSE_FILE" ]; then
  echo "Docker Compose file '$COMPOSE_FILE' not found."
  exit 1
fi

# Remove the 'logging' section from the Docker Compose file
sed -i '/logging:/,/loki-url: ${LOKI_URL}/d' "$COMPOSE_FILE"

# Check if the 'profiles' section contains ["prod"]
if grep -q 'profiles:\s*\[ "prod"\ ]' "$COMPOSE_FILE"; then
  # Add the 'logging' section under "profiles: ["prod"]"
  sed -i '/\[ "prod"\ ]/a \    logging:\n        driver: loki\n        options:\n          loki-url: ${LOKI_URL}' docker-compose.yml
  echo "Added 'logging' section under 'profiles: [ \"prod\" ]' in the Docker Compose file."
fi

# Check if the 'profiles' section contains ["cloudflare"]
if grep -q 'profiles:\s*\[ "cloudflare"\ ]' "$COMPOSE_FILE"; then
  # Add the 'logging' section under "profiles: ["prod"]"
  sed -i '/\[ "cloudflare"\ ]/a \    logging:\n        driver: loki\n        options:\n          loki-url: ${LOKI_URL}' docker-compose.yml
  echo "Added 'logging' section under 'profiles: [ \"cloudflare\" ]' in the Docker Compose file."
fi

# Check if the 'profiles' section contains both "prod" and "dev" profiles
if grep -q 'profiles:\s*\[ "prod","dev"\ ]' "$COMPOSE_FILE"; then
  # Add the 'logging' section under "profiles: ["prod", "dev"]"
  sed -i '/profiles:\s*\[ "prod","dev"\ ]/ {
    N; /\[ "prod","dev"\ ]/ a \    logging:\n        driver: loki\n        options:\n          loki-url: ${LOKI_URL}
  }' "$COMPOSE_FILE"
  echo "Added 'logging' section under 'profiles: [ \"prod\",\"dev\" ]' in the Docker Compose file."
else
  echo "Docker Compose file does not contain the 'profiles: [ \"prod\",\"dev\" ]' pattern in the 'profiles' section."
fi

echo "done Loki plugin config is set successfully..."
