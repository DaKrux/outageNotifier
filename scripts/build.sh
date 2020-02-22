#!/bin/bash

set -e

babel src --source-maps both -d ./builds/

cp ./package* ./builds
(cd builds && npm ci --only=production)