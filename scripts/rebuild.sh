#!/bin/bash

# Print colorful status messages
print_status() {
    echo -e "\033[1;34m==>\033[0m \033[1m$1\033[0m"
}

# Stop all running containers
print_status "Stopping all containers..."
docker-compose down

# Remove volumes
print_status "Removing volumes..."
docker-compose down -v

# Remove node_modules and package-lock.json
print_status "Cleaning up node_modules and package-lock.json..."
rm -rf node_modules package-lock.json

# Clean Docker cache
print_status "Cleaning Docker cache..."
docker builder prune -f

# Rebuild and start containers
print_status "Rebuilding and starting containers..."
docker-compose up --build

# Add error handling
if [ $? -ne 0 ]; then
    echo -e "\033[1;31mError: Build failed!\033[0m"
    exit 1
fi