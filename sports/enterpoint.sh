#!/usr/bin/env bash
set -e
cd /opt/client
ls
npm run dev

exec "$@"
