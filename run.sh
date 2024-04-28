#!/usr/bin/env bash

# Exit immediately if any command exits with a non-zero status.
set -e

# Install dependencies and run the dev script using npx.
npx --quiet npm install && npx --quiet npm run dev
